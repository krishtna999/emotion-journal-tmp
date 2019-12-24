from django.db import models
from entry.models import Event
from .choices import EVENT_TAG_CHOICES


class Tag(models.Model):
    '''
    Event Tags are models that are tied to an "Event"
    The `name` field should be unique amongst all tags in the Event
    '''
    type=models.CharField(max_length=80,choices=EVENT_TAG_CHOICES,default="CUSTOM")
    name=models.CharField(max_length=80)
    # Text can be used like notes about the tag.
    text=models.TextField(blank=True, null=True)
    event=models.ForeignKey(Event,on_delete=models.CASCADE,related_name="tags")

    class Meta:
        constraints=[
            models.UniqueConstraint(fields=['name','event'],name='unique tag per event')
        ]


    




