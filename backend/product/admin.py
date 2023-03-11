from django.contrib import admin

from .models import *

class ProductAdmin(admin.ModelAdmin):
    list_display = ['id', 'name', 'count', 'price', 'shelf_life']
    

admin.site.register(Product, ProductAdmin)

admin.site.register(Warehouse)