from django.contrib.auth import get_user_model

from rest_framework.authtoken.models import Token
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView
from .serializer import RegisterClientSerializer, LoginSerializer

User = get_user_model()


class RegisterApiView(APIView):
    def post(self, request):
        data = request.data
        serializer = RegisterClientSerializer(data=data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            message = f'Success'
            return Response(message, status=201)


class LoginApiView(ObtainAuthToken):
    serializer_class = LoginSerializer


class LogOutApiView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        try:
            user = request.user
            Token.objects.filter(user=user).delete()
            return Response('Вы успешно разлогинились')
        except:
            return Response(status=403)

