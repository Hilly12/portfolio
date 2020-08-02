from rest_framework import serializers
from projects.models import Project


class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = ('id', 'title', 'imgSrc', 'pretext', 'timespan', 'date', 'teamSize', 'links', 'technologies', 'keywords', 'demoSrc', 'award', 'article', 'featured', 'content')
