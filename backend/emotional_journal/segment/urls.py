from django.urls import path

from . import views

urlpatterns = [
    path('create/', views.SegmentCreate.as_view(), name='Create New Segment'),
    path('event/create/', views.EventCreate.as_view(), name='Create New Event'),
    
]
