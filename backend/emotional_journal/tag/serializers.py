from rest_framework import serializers

from .models import EventTag,SegmentTag

class EventTagSerializer(serializers.ModelSerializer):
    class Meta:
        model = EventTag
        fields = ['id','type','name','note','event']
        # depth=1

class SegmentTagSerializer(serializers.ModelSerializer):
    class Meta:
        model = SegmentTag
        fields = ['id','type','name','segment']
        # depth=1

