import django_filters
from .models import Event,Segment
from .functions import transform_emotions

class EventFilter(django_filters.FilterSet):
    emotions=django_filters.CharFilter(method='top_emotion_filter')

    def top_emotion_filter(self, queryset, value, *args, **kwargs):
        if(args):
            emotions=args[0].split(',')
            # Top Level Emotions
            tle=transform_emotions(emotions)
            queryset=queryset.filter(tags__name__in=tle).distinct()
            return queryset

    class Meta:
        model=Event
        fields = {
            'tags__type': ['exact'],
            'tags__name':['exact'],
            'segment__datetime': ['date','range'],
            'segment':['exact'],           
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


