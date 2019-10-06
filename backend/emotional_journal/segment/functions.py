from tag.models import EventTag, SegmentTag
from .models import Segment, Event


def create_events(events, segment):
    for event in events:
        new_event = Event.objects.create(
            start_index=event['start_index'], end_index=event['end_index'], segment=segment)

        create_eventTags(event['tags'], new_event)


def create_eventTags(tags, event):
    for tag in tags:
        if('note' in tag):
            EventTag.objects.create(
                type=tag['type'], name=tag['name'], note=tag['note'], event=event)
        else:
            EventTag.objects.create(
                type=tag['type'], name=tag['name'], event=event)


def create_segmentTags(tags, segment):
    for tag in tags:
        SegmentTag.objects.create(type=tag['type'],name=tag['name'],segment=segment)

def retrieve_event_text(event):
    retrieve_text=event.segment.text[event.start_index:event.end_index]
    return retrieve_text

    