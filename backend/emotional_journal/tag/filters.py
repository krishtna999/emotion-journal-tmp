import django_filters
from .models import EventTag, SegmentTag


class EventTagFilter(django_filters.FilterSet):
    class Meta:
        model = EventTag
        fields = {
            'type': ['exact'],
            'name':['exact'],
            'event__segment__datetime': ['date','range'],
        }

class SegmentTagFilter(django_filters.FilterSet):
    class Meta:
        model = SegmentTag
        fields = {
            'type': ['exact'],
            'name':['exact'],
            'segment__datetime': ['date','range'],
        }