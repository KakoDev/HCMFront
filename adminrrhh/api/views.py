from models import Jornada, Turno, JornadaTurno
from rest_framework import viewsets, permissions
from serializers import JornadadSerializer, TurnoSerializer, JornadadTurnoSerializer


class JornadaViewSet(viewsets.ModelViewSet):
    queryset = Jornada.objects.filter(activo=1)
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = JornadadSerializer


class TurnoViewSet(viewsets.ModelViewSet):
    queryset = Turno.objects.filter(activo=1)
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = TurnoSerializer


class JornadaTurnoViewSet(viewsets.ModelViewSet):
    queryset = JornadaTurno.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = JornadadTurnoSerializer
