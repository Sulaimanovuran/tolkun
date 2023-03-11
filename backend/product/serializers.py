from rest_framework.serializers import ModelSerializer, DateTimeField
from .models import *


class SerializerWharehouse(ModelSerializer):

    class Meta:
        model = Warehouse
        fields = "__all__"


class SerializerProduct(ModelSerializer):
    shelf_life = DateTimeField(format="%Y-%m-%d %H:%M:%S", read_only=True)


    class Meta:
        model = Product
        fields = "__all__"