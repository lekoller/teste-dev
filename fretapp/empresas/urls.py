from rest_framework import routers

from .views import EmpresaViewSet

router = routers.SimpleRouter()

router.register('empresas', EmpresaViewSet)

urlpatterns = router.urls
