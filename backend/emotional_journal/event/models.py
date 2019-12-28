from django.db import models
from entry.models import Entry

# Create your models here.

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
