from django.urls import path

from . import views

urlpatterns = [
    path('tag/', views.EventCreate.as_view(), name='Create New Tagged Event'),
    path('', views.EventViewSet.as_view({'get': 'list'})),
    path('<int:pk>/', views.EventViewSet.as_view(
        {'get': 'retrieve', 'patch': 'partial_update', 'delete': 'destroy'})),
    path('analytics/',views.EventAnalyticsViewSet.as_view()),
]
