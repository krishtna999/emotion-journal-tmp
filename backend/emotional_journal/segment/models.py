from django.db import models
from datetime import datetime
# Create your models here.


class Segment(models.Model):
    text = models.TextField()
    datetime = models.DateTimeField(default=datetime.now)


class Event(models.Model):
    start_index = models.IntegerField()
    end_index = models.IntegerField()
    segment = models.ForeignKey(
        Segment, on_delete=models.CASCADE, related_name="events")

    def retrieve_event_text(self):
        retrieve_text = self.segment.text[self.start_index:self.end_index]
        return retrieve_text
