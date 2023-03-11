from django.contrib import admin
from .models import User, Client


@admin.register(User)
class UserAdmin(admin.ModelAdmin):
    list_display = ['__str__', 'full_name', 'email']

@admin.register(Client)
class UserCleint(admin.ModelAdmin):
    list_display = ['__str__']