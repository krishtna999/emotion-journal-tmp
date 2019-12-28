from django.db import models
from datetime import datetime
# Create your models here.


class Entry(models.Model):
    datetime = models.DateTimeField(default=datetime.now)
    
