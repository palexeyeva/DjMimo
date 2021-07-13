from django.views.generic.base import RedirectView
# from django.contrib import admin
from django.urls import path
from django.conf.urls import include, url


from . import views
# from Mimo import riddles

app_name = 'riddles'

urlpatterns = [
    # url(r'^$', views.index, name='index'),
    # url(r'^favicon\.ico$', RedirectView.as_view(url='/static/img/favicon.ico', permanent=True)),
    # url(r'^/getData/$', views.getData, name='getData')
    path('', views.index)
    
]