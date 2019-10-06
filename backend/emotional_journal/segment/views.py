from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from tag.models import EventTag, SegmentTag
from .models import Segment, Event
from .functions import create_events, create_eventTags, create_segmentTags
# Create your views here.


class SegmentCreate(APIView):
    def post(self, request):
      data = request.data
      text = data['text']
      datetime = data['datetime']
      new_segment = Segment.objects.create(text=text, datetime=datetime)
      create_events(data['events'], new_segment)
      create_segmentTags(data['tags'], new_segment)
      return Response({'status': True}, status=status.HTTP_201_CREATED)


class EventCreate(APIView):
    def post(self, request):

      data = request.data
      try:
         segment = Segment.get(pk=data['segment_id'])
      except:
         return Response({'status': False, 'message': 'Segment with id'+str(data['segment_id'])+' not found'}, status=status.HTTP_201_CREATED)

      new_event = Event.objects.create(
         start_index=data['start_index'], end_index=data['end_index'], segment=segment)

      create_eventTags(data['tags'], new_event)
      return Response({'status': True}, status=status.HTTP_201_CREATED)



# class EventList(APIView):
   # def get(self,request):

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
