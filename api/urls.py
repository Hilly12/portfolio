"""api URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include, re_path
from django.views.generic import TemplateView
from django.conf import settings
import os


# The precache-manifest may be generated with a new name, so we need to get it manually
files_in_root = []
for file in os.listdir(os.path.join(settings.BASE_DIR, 'build')):
    files_in_root.append(file)
precache_manifest_path = [f for f in files_in_root if ("precache-manifest" in f)][0]

urlpatterns = [
    path('asset-manifest.json', (TemplateView.as_view(template_name="asset-manifest.json", content_type='application/manifest+json', )),
            name='asset-manifest.json'),
    path('service-worker.js', (TemplateView.as_view(template_name="service-worker.js", content_type='application/javascript', )),
            name='service-worker.js'),
    path(precache_manifest_path, (TemplateView.as_view(template_name=precache_manifest_path, content_type='application/javascript', )),
            name=precache_manifest_path),
    path('api-auth/', include('rest_framework.urls')),
    path('admin/', admin.site.urls),
    path('api/projects/', include('projects.api.urls')),
    path('api/scores/', include('scores.api.urls')),
    re_path('.*', TemplateView.as_view(template_name='index.html'))
]
