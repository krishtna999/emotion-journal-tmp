from tag.models import Tag
from tag.emotion_tag_constants import TOP_LEVEL_EMOTIONS
from .models import Event
from tag.models import Tag


# def create_events(events, entry):
#     for event in events:
#         if(event['start_index']<0 or event['end_index']>=len(entry.text)):
#             raise Exception('Event boundaries exceed Segment boundaries')
#         new_event = Event.objects.create(
#             start_index=event['start_index'], end_index=event['end_index'], entry=entry)

#         create_eventTags(event['tags'], new_event)


# def create_eventTags(tags, event):
#     for tag in tags:
#         if('note' in tag):
#             EventTag.objects.create(
#                 type=tag['type'], name=tag['name'], note=tag['note'], event=event)
#         else:
#             EventTag.objects.create(
#                 type=tag['type'], name=tag['name'], event=event)


# def create_entryTags(tags, entry):
#     for tag in tags:
#         SegmentTag.objects.create(type=tag['type'],name=tag['name'],entry=entry)



def transform_emotions(emotions):
    transformed_set=emotions.copy()
    # print(emotions)
    for emotion in emotions:

        if(emotion in TOP_LEVEL_EMOTIONS):
            transformed_set+=TOP_LEVEL_EMOTIONS[emotion]
    return transformed_set


def tag_events(event,tags):
    for tag in tags:
        Tag.objects.create(type=tag['type'].lower(),name=tag['name'].lower(),text=tag.get('text',None),event=event)
    
    
def copy_tags(event1,event2):
    for tag in event1.tags.all():
        # Should the tag.text (note) be the same even if the tag is duplicated
        tag.pk=None
        tag.event=event2
        tag.save()