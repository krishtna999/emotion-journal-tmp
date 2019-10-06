import django_filters
from .models import Event,Segment

class EventFilter(django_filters.FilterSet):
    class Meta:
        model=Event
        fields = {
            'tags__type': ['exact'],
            'tags__name':['exact'],
            'segment__datetime': ['date','range'],
        }


class SegmentFilter(django_filters.FilterSet):
    class Meta:
        model=Segment
        fields = {
            'tags__type': ['exact'],
            'tags__name':['exact'],
            'datetime': ['date','range'],
            # 'event__segment__datetime__contains': ['exact'] 
        }
