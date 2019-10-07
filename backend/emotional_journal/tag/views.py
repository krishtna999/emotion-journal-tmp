from rest_framework import viewsets
from django_filters import rest_framework as filters

from .models import EventTag,SegmentTag
from .serializers import EventTagSerializer,SegmentTagSerializer
from .filters import EventTagFilter,SegmentTagFilter

class EventViewSet(viewsets.ModelViewSet):
    serializer_class=EventTagSerializer
    queryset=EventTag.objects.all()
    filter_backends = (filters.DjangoFilterBackend,)
    filterset_class = EventTagFilter

class SegmentViewSet(viewsets.ModelViewSet):
    serializer_class=SegmentTagSerializer
    queryset=SegmentTag.objects.all()
    filter_backends = (filters.DjangoFilterBackend,)
    filterset_class = SegmentTagFilter