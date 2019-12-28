from rest_framework import viewsets
from django_filters import rest_framework as filters

from .models import Tag
from .serializers import TagSerializer
from .filters import TagFilter

class TagViewSet(viewsets.ModelViewSet):
    serializer_class=TagSerializer
    queryset=Tag.objects.all()
    filter_backends = (filters.DjangoFilterBackend,)
    filterset_class = TagFilter
