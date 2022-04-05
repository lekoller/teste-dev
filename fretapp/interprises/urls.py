from rest_framework import routers

from .views import ProviderViewSet, CostumerViewSet

router = routers.SimpleRouter()

router.register('providers', ProviderViewSet)
router.register('customers', CostumerViewSet)

urlpatterns = router.urls
