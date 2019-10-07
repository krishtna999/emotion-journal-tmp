from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status, generics, viewsets
from django_filters import rest_framework as filters


from tag.models import EventTag, SegmentTag
from .models import Segment, Event
from .functions import create_events, create_eventTags, create_segmentTags
from .serializers import EventSerializer, SegmentSerializer
from .filters import EventFilter, SegmentFilter
'''
    TODO: Add functionality for Segment and Event PARTIAL_UPDATE
    The text field can be updated but however, the start_index and end_index of the event
    have to be updated accordingly too.

    If text was added before the start_index of the event, then the start_index has to be 
    increased to the number of characters added.

    If text was added in the event itself, then the end_index must be increased by the number of
    added characters.

    If text was added after end_index, the event should be left untouched.

    NOTE: This should be done for all events within the segment

'''

class SegmentCreate(APIView):
    def post(self, request):
      try:
         data = request.data
         text = data['text']
         datetime = data['datetime']
         new_segment = Segment.objects.create(text=text, datetime=datetime)
         create_events(data['events'], new_segment)
         create_segmentTags(data['tags'], new_segment)
         return Response({'status': True}, status=status.HTTP_201_CREATED)
      except Exception as e:
         return Response({'status': False, 'message': str(e)}, status=status.HTTP_400_BAD_REQUEST)


class EventCreate(APIView):
    def post(self, request):
      try:
         data = request.data

         segment = Segment.objects.get(pk=data['segment_id'])
         create_events([data], segment)
         return Response({'status': True}, status=status.HTTP_201_CREATED)

      except Exception as e:
         return Response({'status': False, 'message': str(e)}, status=status.HTTP_400_BAD_REQUEST)


# NOTE: segment__datetime__range is exclusive of end date
class EventViewSet(viewsets.ModelViewSet):
   queryset = Event.objects.all()
   serializer_class = EventSerializer
   filter_backends = (filters.DjangoFilterBackend,)
   filterset_class = EventFilter


class SegmentViewSet(viewsets.ModelViewSet):
   queryset = Segment.objects.all()
   serializer_class = SegmentSerializer
   filter_backends = (filters.DjangoFilterBackend,)
   filterset_class = SegmentFilter


'''
Sample SegmentCreate POST Request

{
   "text":"I finally went out with my squad really after a long time. It was an amazing day, as i spent more time with my four bestfriends. Me, sara, jane and simran went for a movie and had a good lunch. A whole day shopping is a dream for every girl that too with her besties, trying clothes in the fitting room,taking photos etc,. I felt very relaxed and happy walking in the free air and making fun with my friends.Even when i had a great time with my friends today, one thing really pissed me off. Sara was annoying to me the whole day as i was very close with jane. I dont really understand why she was so possessive about me being close with jane, rather she knows that she and I are best friends for life. This whole thing made me sad and sara being very mean to me.",
   "events":[
      {
         "start_index":194,
         "end_index":406,
         "tags":[
            {
               "type":"EMOTION",
               "name":"Happy",
               "note":"I was happy because of my friends"
            },
            {
               "type":"EMOTION",
               "name":"Overjoyed"
            }
         ]
      },
      {
         "start_index":492,
         "end_index":762,
         "tags":[
            {
               "type":"EMOTION",
               "name":"MAD",
               "note":"Mad because of Sara's behaviour"
            },
            {
               "type":"EMOTION",
               "name":"Hurt",
               "note":"Testing"
            }
         ]
      }
   ],
   "tags":[
      {
         "type":"PERSON",
         "name":"Sara"
      },
      {
         "type":"PERSON",
         "name":"Jane"
      },
      {
         "type":"PERSON",
         "name":"Simran"
      }
   ],
   "datetime":"2019-12-1T14:41:46-05"
}
'''
