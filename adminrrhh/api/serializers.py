from rest_framework import serializers
from models import Jornada, Turno, JornadaTurno, Dias


class JornadadSerializer(serializers.ModelSerializer):
    class Meta:
        model = Jornada
        fields = '__all__'


class DiasSerializer(serializers.ModelSerializer):
    class Meta:
        model = Dias
        fields = '__all__'


class TurnoSerializer(serializers.ModelSerializer):
    nombrediadesde = serializers.ReadOnlyField()
    nombrediahasta = serializers.ReadOnlyField()

    class Meta:
        model = Turno
        fields = '__all__'


class JornadadTurnoSerializer(serializers.ModelSerializer):
    nombrejornada = serializers.ReadOnlyField()
    codigojornada = serializers.ReadOnlyField()
    nombrediadesdeturno = serializers.ReadOnlyField()
    nombrediahastaturno = serializers.ReadOnlyField()
    horadesdeturno = serializers.ReadOnlyField()
    horahastaturno = serializers.ReadOnlyField()

    class Meta:
        model = JornadaTurno
        fields = '__all__'
