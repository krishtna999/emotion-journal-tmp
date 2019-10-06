from django.db import models
from segment.models import Segment,Event
from .choices import EVENT_TAG_CHOICES,SEGMENT_TAG_CHOICES


class EventTag(models.Model):
    '''
    Event Tags are models that are tied to an "Event"
    The `name` field should be unique amongst all tags in the Event
    '''
    type=models.CharField(max_length=80,choices=EVENT_TAG_CHOICES,default="CUSTOM")
    name=models.CharField(max_length=80)
    note=models.TextField(blank=True, null=True)
    event=models.ForeignKey(Event,on_delete=models.CASCADE,related_name="tags")

class SegmentTag(models.Model):
    '''
    Segment Tags are tied to Segments.
    The `name` field should be unique amongst all tags in the Segment
    '''
    type=models.CharField(max_length=80,choices=SEGMENT_TAG_CHOICES,default="CUSTOM")
    name=models.CharField(max_length=80)
    segment=models.ForeignKey(Segment,on_delete=models.CASCADE,related_name="tags")
    

    




