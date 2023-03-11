from rest_framework.routers import DefaultRouter

from django.urls import path, include
from .views import RegisterApiView, LoginApiView, LogOutApiView

app_name = 'users'

urlpatterns = [
    path('register/client/', RegisterApiView.as_view()),
    path('login/', LoginApiView.as_view()),
    path('logout/', LogOutApiView.as_view()),
]