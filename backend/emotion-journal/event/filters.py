import django_filters
from .models import Event
from .functions import transform_emotions
from urllib import parse


class EventFilter(django_filters.FilterSet):
    # emotions is a OR filter.
    emotions = django_filters.CharFilter(method='top_emotion_filter')
    tags = django_filters.CharFilter(method='tag_filter')

    def top_emotion_filter(self, queryset, value, *args, **kwargs):
        if(args):
            emotions = args[0].split(',')
            # Top Level Emotions
            tle = transform_emotions(emotions)
            queryset = queryset.filter(tags__name__in=tle).distinct()
            return queryset

    def tag_filter(self, queryset, value, *args, **kwargs):
        if(args):
            tags = args[0].split(',')
            qs = queryset
            for tag in tags:
                # NOTE: Check the comment under TagValuesView in Tag.views
                tagType = parse.unquote(tag.split(':')[0])
                tagName = parse.unquote(tag.split(':')[1])

                qs = qs.filter(tags__type=tagType,
                                     tags__name=tagName)

        return qs.distinct()

    class Meta:
        model = Event
        fields = {
            'entry': ['exact'],
            'entry__datetime': ['date', 'range'],
        }
