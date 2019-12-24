from django.db import models
from datetime import datetime
from .choices import SEGMENT_TYPE_CHOICES
# Create your models here.


class Entry(models.Model):
    datetime = models.DateTimeField(default=datetime.now)
    

class Event(models.Model):
    text=models.TextField()
    # order_id is going to be how the events are going to be ordered and displayed
    order_id = models.CharField(max_length=12)
    entry = models.ForeignKey(
        Entry, on_delete=models.CASCADE, related_name="events")
