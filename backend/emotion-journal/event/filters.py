import django_filters
from .models import Event
from .functions import transform_emotions


class EventFilter(django_filters.FilterSet):
    # emotions is a OR filter.
    emotions = django_filters.CharFilter(method='top_emotion_filter')
    tags = django_filters.CharFilter(method='tag_filter')

    def top_emotion_filter(self, queryset, value, *args, **kwargs):
        if(args):
            print(args)
            emotions = args[0].split(',')
            # Top Level Emotions
            tle = transform_emotions(emotions)
            queryset = queryset.filter(tags__name__in=tle).distinct()
            return queryset

    def tag_filter(self, queryset, value, *args, **kwargs):
        if(args):
            tags = args[0].split(',')
            qs = Event.objects.all()
            for tag in tags:
                tagType = tag.split(':')[0].lower()
                tagName = tag.split(':')[1].lower()

                qs = qs.filter(tags__type=tagType,
                                     tags__name=tagName)

        return qs.distinct()

    class Meta:
        model = Event
        fields = {
            'entry': ['exact'],
            'entry__datetime': ['date', 'range'],
        }
