from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet

from .models import *
from .serializers import *

class APIWarehouse(ModelViewSet):
    queryset = Warehouse.objects.all()
    serializer_class = SerializerWharehouse


class APIProduct(ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = SerializerProduct