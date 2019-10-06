from django.urls import path

from . import views

urlpatterns = [
    path('create', views.SegmentCreate.as_view(), name='Create New Segment'),
    path('list', views.SegmentList.as_view(), name='List Events'),
    path('event/create', views.EventCreate.as_view(), name='Create New Event'),
    path('event/list', views.EventList.as_view(), name='List Events'),

    
]
