from rest_framework import serializers

from .models import Tag

class TagSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tag
        fields = ['id','type','name','text','event']
        # depth=1

