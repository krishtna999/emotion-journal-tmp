from django.db import models
from datetime import datetime
# Create your models here.


class Entry(models.Model):
    datetime = models.DateTimeField(default=datetime.now)
    

class Event(models.Model):
    # Emotional Text entry:
    text=models.TextField(null=False)

    '''
    TODO: Decide if "Rational Text entry" is needed as a feature or not
    text_rat=models.TextField(null=True)
    '''
    
    # order_id is going to be how the events are going to be ordered and displayed
    order_id = models.CharField(max_length=12)
    entry = models.ForeignKey(
        Entry, on_delete=models.CASCADE, related_name="events")
