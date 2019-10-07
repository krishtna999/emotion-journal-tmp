from django.urls import path
from rest_framework.routers import SimpleRouter


from . import views

router=SimpleRouter()
router.register('event',views.EventViewSet)
router.register('segment',views.SegmentViewSet)
# print(router.urls)

urlpatterns=router.urls
