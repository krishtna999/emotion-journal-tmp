from django.urls import path

from . import views

urlpatterns = [
    # TODO: Add functionality for PARTIAL_UPDATE. Check views file
    path('tag/', views.EventCreate.as_view(), name='Create New Event'),
    path('', views.EventViewSet.as_view({'get': 'list'})),
    path('<int:pk>/', views.EventViewSet.as_view(
        {'get': 'retrieve', 'patch': 'partial_update', 'delete': 'destroy'})),
]
