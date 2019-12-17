from __future__ import unicode_literals
from django.shortcuts import render


def index(request):
    return render(request, 'frontend/master.html')


def jornadaList(request):
    print("vine pa aca al menos")
    return render(request, 'frontend/jornadas/list.html')
