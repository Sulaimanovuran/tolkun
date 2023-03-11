
from django.contrib import admin
from django.urls import path, include
from config import settings
from django.conf.urls.static import static
from drf_yasg import openapi
from drf_yasg.views import get_schema_view

schema_view = get_schema_view(
    openapi.Info(
        title='Tolkun',
        default_version='v1',
        description='Портал государственных продаж'
    ), public=True
)



urlpatterns = [
    path('admin/', admin.site.urls),
    path('product/', include('product.urls')),
    path('swagger/', schema_view.with_ui('swagger')),
    path('', include('users.urls')),
]

if settings.DEBUG:
    urlpatterns+= static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
