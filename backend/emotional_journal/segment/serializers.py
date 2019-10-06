from rest_framework import serializers

from .models import Event,Segment

class EventSerializer(serializers.ModelSerializer):
    event_text=serializers.CharField(source='retrieve_event_text')
    class Meta:
        model = Event
        fields = ['tags','event_text']
        depth=1


class SegmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Segment
        fields = ['text','datetime']
        depth=1


        