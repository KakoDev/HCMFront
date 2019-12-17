# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.db import models


class Jornada(models.Model):
    idjornada = models.AutoField(primary_key=True)
    codigo = models.CharField(
        db_column='CODIGO', max_length=10, blank=False, null=False)
    nombre = models.CharField(
        db_column='NOMBRE', max_length=60, blank=False, null=False)
    activo = models.BooleanField(
        db_column='ACTIVO', blank=True, null=False, default=True)

    def __str__(self):
        return self.nombre

    class Meta:
        managed = True
        db_table = 'JORNADA'


class Dias(models.Model):
    iddia = models.AutoField(primary_key=True)
    nombre = models.CharField(
        db_column='NOMBRE', max_length=15, blank=False, null=False)

    def __str__(self):
        return self.nombre

    class Meta:
        managed = True
        db_table = 'DIAS_SEMANA'


class Turno(models.Model):
    idturno = models.AutoField(primary_key=True)
    diadesde = models.ForeignKey(
        Dias, models.DO_NOTHING, db_column='DIADESDE', related_name="dia1_turno_id")
    diahasta = models.ForeignKey(
        Dias, models.DO_NOTHING, db_column='DIAHASTA', related_name="dia2_turno_id")
    horadesde = models.CharField(
        db_column='HORADESDE', max_length=10, blank=False, null=False)
    horahasta = models.CharField(
        db_column='HORAHASTA', max_length=10, blank=False, null=False)
    activo = models.BooleanField(
        db_column='ACTIVO', blank=True, null=False, default=True)

    @property
    def nombrediahasta(self):
        return self.diahasta.nombre

    @property
    def nombrediadesde(self):
        return self.diadesde.nombre

    class Meta:
        managed = True
        db_table = 'TURNO'


class JornadaTurno(models.Model):
    idconfig = models.AutoField(primary_key=True)
    idjornada = models.ForeignKey(
        Jornada, models.DO_NOTHING, db_column='IDJORNADA')
    idturno = models.ForeignKey(Turno, models.DO_NOTHING, db_column='IDTURNO')

    @property
    def nombrejornada(self):
        return self.idjornada.nombre

    @property
    def codigojornada(self):
        return self.idjornada.codigo

    @property
    def nombrediadesdeturno(self):
        return self.idturno.diadesde.nombre

    @property
    def nombrediahastaturno(self):
        return self.idturno.diahasta.nombre

    @property
    def horahastaturno(self):
        return self.idturno.horahasta

    @property
    def horadesdeturno(self):
        return self.idturno.horadesde

    class Meta:
        managed = True
        db_table = 'JORNADA_TURNO'
