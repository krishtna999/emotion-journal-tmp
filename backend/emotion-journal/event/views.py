from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status, viewsets
from django_filters import rest_framework as filters

from .models import Event
from .functions import tag_events, copy_tags
from .serializers import EventSerializer
from .filters import EventFilter

# Create your views here.
class EventCreate(APIView):
    def post(self, request):
        try:
            data = request.data

            base_event = Event.objects.get(pk=data['base_event_id'])
            '''
            start_index and end_index as how one would use in string slice.

            TODO: Validate start and end indices boundary wrt string length.
            '''
            start_index = data['start_index']
            end_index = data['end_index']
            tags = data['tags']

            print(data,len(base_event.text))
            og_text = base_event.text
            og_order_id = base_event.order_id
            og_entry = base_event.entry

            if(
                start_index == 0 and end_index == len(base_event.text)
                or
                start_index==end_index
            ):
                '''
                Event will be as is. No split operations here, just tagging
                '''
                tag_events(base_event, tags)

            elif(start_index == 0):
                '''
                [FROM START, BEFORE END] Event will be split into 2 events, one additional at the end.
                '''

                base_event.text = og_text[start_index:end_index]
                base_event.order_id = og_order_id+'1'
                base_event.save()

                new_event = Event.objects.create(
                    text=og_text[end_index:], order_id=og_order_id+'2', entry=og_entry)
                    
                # Copy the old tags to the event that was split.
                copy_tags(base_event, new_event)
                
                # Add the new tags to the designated event (in this case, the base event itself)
                tag_events(base_event, tags)    

            elif(end_index == len(base_event.text)):
                '''
                [AFTER START, TILL END]
                Event will be split into 2 events, 1 additional. Existing base event will be modified.
                '''

                base_event.text = og_text[0:start_index]
                base_event.order_id = og_order_id+'1'
                base_event.save()

                new_event = Event.objects.create(
                    text=og_text[start_index:], order_id=og_order_id+'2',entry=og_entry)

                # Copy the old tags to the event that was split.
                copy_tags(base_event, new_event)

                # Add the new tags to the designated event (in this case, the new event)
                tag_events(new_event, tags)    
            else:
                '''
                [FROM MIDDLE.  i.e.:
                AFTER START,BEFORE END
                ]
                '''
                base_event.text = og_text[0:start_index]
                base_event.order_id = og_order_id+'1'
                base_event.save()

                new_event_middle = Event.objects.create(
                    text=og_text[start_index:end_index], order_id=og_order_id+'2',entry=og_entry)

                new_event_end = Event.objects.create(
                    text=og_text[end_index:], order_id=og_order_id+'3',entry=og_entry)

                # Copy the old tags to the event that was split.
                copy_tags(base_event, new_event_middle)
                copy_tags(base_event, new_event_end)

                # Add the new tags to the designated event (in this case, the middle event)
                tag_events(new_event_middle, tags)                 

            return Response({'status': True}, status=status.HTTP_201_CREATED)

        except Exception as e:
            raise e
            return Response({'status': False, 'message': str(e)}, status=status.HTTP_400_BAD_REQUEST)


# NOTE: Filter is exclusive of end date
# TODO: Add a custom delete logic for Event, if there are no events belonging to an entry after deletion, then delete the entry too !
class EventViewSet(viewsets.ModelViewSet):
    queryset = Event.objects.all().order_by('order_id')
    serializer_class = EventSerializer
    filter_backends = (filters.DjangoFilterBackend,)
    filterset_class = EventFilter
