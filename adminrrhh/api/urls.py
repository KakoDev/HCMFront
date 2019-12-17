from rest_framework import routers
from django.conf.urls import url
from .views import JornadaViewSet, TurnoViewSet, JornadaTurnoViewSet


router = routers.DefaultRouter()
router.register('jornadas', JornadaViewSet, 'jornadas')
router.register('turnos', TurnoViewSet, 'turnos')
router.register('jornadaturno', JornadaTurnoViewSet, 'config')

urlpatterns = router.urls
