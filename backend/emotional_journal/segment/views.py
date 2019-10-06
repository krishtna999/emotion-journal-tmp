from rest_framework.views import APIView

from tag.models import EventTag, SegmentTag
from .models import Segment, Event
from .functions import create_events, create_eventTags, create_segmentTags
# Create your views here.


class SegmentCreate(APIView):
    def post(self, request):
        text = request['text']
        datetime = request['datetime']
        new_segment = Segment.create(text, datetime)
        create_events(request['events'], new_segment)
        create_segmentTags(request['tags'], new_segment)


class EventCreate(APIView):
    def post(self, request):
        segment=Segment.get(pk=request['segment_id'])
        
        new_event = Event.create(
            request['start_index'], request['end_index'], segment)
        
        create_eventTags(request['tags'],new_event)

