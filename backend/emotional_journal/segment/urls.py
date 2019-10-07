from django.urls import path

from . import views

urlpatterns = [
    path('create/', views.SegmentCreate.as_view(), name='Create New Segment'),
    path('', views.SegmentViewSet.as_view({'get': 'list'})),
    path('<int:pk>/', views.SegmentViewSet.as_view(
        {'get': 'retrieve', 'patch': 'partial_update', 'delete': 'destroy'})),


    path('event/create/', views.EventCreate.as_view(), name='Create New Event'),
    path('event/', views.EventViewSet.as_view({'get': 'list'})),
    path('event/<int:pk>/', views.EventViewSet.as_view(
        {'get': 'retrieve', 'patch': 'partial_update', 'delete': 'destroy'})),
]
