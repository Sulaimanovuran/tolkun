from rest_framework import generics
from rest_framework.authtoken.models import Token
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.viewsets import ModelViewSet
from .models import User, Client
from .serializers import *


class RegisterClientAPIView(generics.ListCreateAPIView):
    '''Регистрация ментора'''
    queryset = User.objects.all()
    serializer_class = RegisterClientSerializer


class LoginApiView(ObtainAuthToken):
    '''Авторизация'''
    serializer_class = LoginSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data['user']
        token, created = Token.objects.get_or_create(user=user)
        return Response({'token': token.key, 'user_full_name': user.full_name})


class LogOutApiView(APIView):
    '''Выход из системы'''
    permission_classes = [IsAuthenticated]

    def post(self, request):
        try:
            user = request.user
            Token.objects.filter(user=user).delete()
            return Response('Вы успешно разлогинились')
        except Exception as s:
            return Response(status=403)