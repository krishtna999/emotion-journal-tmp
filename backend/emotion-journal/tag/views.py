from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status, viewsets
from django_filters import rest_framework as filters

from .models import Tag
from .serializers import TagSerializer
from .filters import TagFilter


class TagViewSet(viewsets.ModelViewSet):
    serializer_class = TagSerializer
    queryset = Tag.objects.all()
    filter_backends = (filters.DjangoFilterBackend,)
    filterset_class = TagFilter


class TagValuesView(APIView):
    def get(self, request):
        autofill_field = request.query_params.get('field')
        field_type = request.query_params.get('type')
        if(autofill_field not in ('name', 'type')):
            return Response({'status': False,
                             'message': 'Autofill only for tag name or tag type'},
                            status=status.HTTP_400_BAD_REQUEST)

        print(field_type,autofill_field)
        
        if(field_type):
            values = Tag.objects.filter(type=field_type).values_list(autofill_field, flat=True).distinct()
        else:
            values = Tag.objects.values_list(autofill_field, flat=True).distinct()
                
        return Response({'status': True, 'values': values}, status=status.HTTP_200_OK)
