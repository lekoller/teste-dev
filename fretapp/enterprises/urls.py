from rest_framework import routers

from .views import ProviderViewSet, CustomerViewSet

router = routers.SimpleRouter()

router.register('providers', ProviderViewSet)
router.register('customers', CustomerViewSet)

urlpatterns = router.urls
