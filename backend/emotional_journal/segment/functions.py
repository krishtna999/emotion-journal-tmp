from tag.models import EventTag, SegmentTag
from .models import Segment, Event

def create_events(events, segment):
    for event in events:
        new_event = Event.create(
            event['start_index'], event['end_index'], segment)
        
        create_eventTags(event['tags'],new_event)


def create_eventTags(tags, event):
    for tag in tags:
        EventTag.create(tag['type'],tag['name'],tag['note'],event)


def create_segmentTags(tags, segment):
    for tag in tags:
        Segment.create(tag['type'],tag['name'],segment)
