from django.urls import path

from . import views

urlpatterns = [
    path('create/', views.EntryCreate.as_view(), name='Create New Entry'),
    path('', views.EntryViewSet.as_view(
        {'get': 'list'}), name='Filter Entry'),
    path('<int:pk>/', views.EntryViewSet.as_view(
        {'get': 'retrieve', 'patch': 'partial_update', 'delete': 'destroy'}), name='Retrieve Patch Delete Entry'),
]

