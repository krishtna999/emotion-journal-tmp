import django_filters
from .models import Event
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
            'entry':['exact'],   
            'entry__datetime': ['date','range'],        
        }

