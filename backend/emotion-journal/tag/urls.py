from django.urls import path
from rest_framework.routers import SimpleRouter


from . import views

router=SimpleRouter()
router.register('',views.TagViewSet)
# print(router.urls)

urlpatterns=[
    path('autofill/',views.TagValuesView.as_view())
]

urlpatterns+=router.urls
