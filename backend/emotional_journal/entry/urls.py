from django.urls import path

from . import views

urlpatterns = [
    path('', views.EntryCreate.as_view(), name='Create New Entry'),
    path('<int:pk>/', views.DestroyEntryView.as_view(), name='Delete Entry'),
]
