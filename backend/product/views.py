from django.shortcuts import render
from rest_framework import generics, decorators
from rest_framework.response import Response
from rest_framework.viewsets import ModelViewSet
from users.serializers import User

from .models import *
from .serializers import *

class APIWarehouse(ModelViewSet):
    queryset = Warehouse.objects.all()
    serializer_class = SerializerWharehouse


class APIProduct(ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = SerializerProduct

    @decorators.action(detail=False)
    def count_list(self, request):
        
        product_count = Product.objects.all().count()
        user = User.objects.all().count()
        warehouse = Warehouse.objects.all().count()
        context = {"count":product_count, "user":user, "warehouse":warehouse}
        return Response(context)