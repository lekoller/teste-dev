from rest_framework import routers

from .views import OfferViewSet, BidViewSet


router = routers.SimpleRouter()

router.register('offers', OfferViewSet)
router.register('bids', BidViewSet)

urlpatterns = router.urls
