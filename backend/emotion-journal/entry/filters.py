import django_filters
from .models import Entry

class EntryFilter(django_filters.FilterSet):
    class Meta:
        model=Entry
        fields = {
            'datetime': ['date','range'],
        }


