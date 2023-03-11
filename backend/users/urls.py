from rest_framework.routers import DefaultRouter

from django.urls import path, include
from .views import RegisterClientAPIView, LoginApiView, LogOutApiView

app_name = 'users'

urlpatterns = [
    path('register/client/', RegisterClientAPIView.as_view()),
    path('login/', LoginApiView.as_view()),
    path('logout/', LogOutApiView.as_view()),
]