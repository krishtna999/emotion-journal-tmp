from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status, viewsets, generics
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

            base_event = Event.objects.get(pk=data['base_event']['id'])            
            og_entry=base_event.entry
            

            tags = data['tags']

            
            if('new_events' not in data):
                tag_events(base_event, tags)

            else:
                '''
                There are new_events which arise from the split
                '''
                
                base_event.text=data['base_event']['text']
                base_event.order_id=data['base_event']['order_id']
                base_event.save()
                
                for event in data['new_events']:
                    new_split_event = Event.objects.create(
                        text=event['text'],
                        order_id=event['order_id'],
                        entry=og_entry
                    )

                    if('tag_flag' in event):
                        # add the NEW tags to the new event
                        tag_events(new_split_event, tags)

                    # Copy all old tags and the newly added ones to new_split_event
                    copy_tags(base_event, new_split_event)

                if('tag_flag' in data['base_event']):
                    # add NEW tags to base after creating new events.
                    tag_events(base_event, tags)


            return Response({'status': True}, status=status.HTTP_201_CREATED)

        except Exception as e:
            raise e
            return Response({'status': False, 'message': str(e)}, status=status.HTTP_400_BAD_REQUEST)


# NOTE: Filter is exclusive of end date
# TODO: Add a custom delete logic for Event, if there are no events belonging to an entry after deletion, then delete the entry too !
class EventViewSet(viewsets.ModelViewSet):
    queryset = Event.objects.all().order_by('entry__datetime', 'order_id')
    serializer_class = EventSerializer
    filter_backends = (filters.DjangoFilterBackend,)
    filterset_class = EventFilter


class EventAnalyticsViewSet(generics.ListAPIView):
    queryset = Event.objects.all().order_by('entry__datetime', 'order_id')
    serializer_class = EventSerializer
    filter_backends = (filters.DjangoFilterBackend,)
    filterset_class = EventFilter
    # Override finalize_response

    def list(self, request, *args, **kwargs):
        # The first line is taken directly from the list function source.
        queryset = self.filter_queryset(self.get_queryset())
        # The pagination part in the source is excluded as we only require the count() value.

        analytics_tag_type = request.query_params.get('analytics_tag_type')

        count_data = {}
        if(analytics_tag_type):
            # Find the ratio of primary tags.
            for event in queryset:
                for tag in event.tags.filter(type=analytics_tag_type):
                    count_data[tag.name] = count_data.get(tag.name, 0)+1

        else:
            # Simply just the count of the queryset
            count_data = {'count': queryset.count()}

        return Response(data=count_data, status=status.HTTP_200_OK)
