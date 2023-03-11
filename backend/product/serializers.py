from rest_framework.serializers import ModelSerializer, DateTimeField
from .models import *


class SerializerWharehouse(ModelSerializer):
    class Meta:
        model = Warehouse
        fields = "__all__"


class SerializerProduct(ModelSerializer):
    shelf_life = DateTimeField(format="%Y-%m-%d %H:%M:%S", read_only=True)

    def to_representation(self, instance):
        rep = super().to_representation(instance)
        rep['warehouse'] = SerializerWharehouse(instance.warehouse).data
        return rep
    
    class Meta:
        model = Product
        fields = "__all__"