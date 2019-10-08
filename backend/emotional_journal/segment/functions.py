from tag.models import EventTag, SegmentTag
from .constants import TOP_LEVEL_EMOTIONS
from .models import Segment, Event


def create_events(events, segment):
    for event in events:
        if(event['start_index']<0 or event['end_index']>=len(segment.text)):
            raise Exception('Event boundaries exceed Segment boundaries')
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



def transform_emotions(emotions):
    transformed_set=emotions.copy()
    # print(emotions)
    for emotion in emotions:

        if(emotion in TOP_LEVEL_EMOTIONS):
            transformed_set+=TOP_LEVEL_EMOTIONS[emotion]
    return transformed_set
