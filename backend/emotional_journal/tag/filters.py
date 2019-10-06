import django_filters
from .models import EventTag, SegmentTag


class EventTagFilter(django_filters.FilterSet):
    class Meta:
        model = EventTag
        fields = {
            'type': ['exact'],
            'name':['exact'],
            'event__segment__datetime__date': ['exact','gt','lt'],
            # 'event__segment__datetime__contains': ['exact'] 
        }
