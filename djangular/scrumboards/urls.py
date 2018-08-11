from rest_framework.routers import DefaultRouter
from django.views.generic import TemplateView

from .api import ListViewSet, CardViewSet

router = DefaultRouter()
router.register(r'lists', ListViewSet)
router.register(r'cards', CardViewSet)


urlpatterns = router.urls
