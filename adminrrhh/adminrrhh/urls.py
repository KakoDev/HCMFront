from django.conf.urls import url, include
from django.contrib import admin
from api.views import *


urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^api/', include('api.urls')),
    url(r'^', include('frontend.urls')),
]
