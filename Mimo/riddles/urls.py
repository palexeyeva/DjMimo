from django.views.generic.base import RedirectView
from django.urls import path
from django.conf.urls import include, url


from . import views
# from Mimo import riddles

app_name = 'riddles'

urlpatterns = [
    # url(r'^$', views.index, name='index'),
    # url(r'^favicon\.ico$', RedirectView.as_view(url='/static/img/favicon.ico', permanent=True)),
    path('', views.index),
    path('fields.html', views.fields)
    
]