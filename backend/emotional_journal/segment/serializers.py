from rest_framework import serializers

from .models import Event,Segment

class EventSerializer(serializers.ModelSerializer):
    event_text=serializers.CharField(source='retrieve_event_text')
    segment_id=serializers.IntegerField(source='segment.id')
    class Meta:
        model = Event
        fields = ['id','segment_id','start_index','end_index','event_text','tags']
        read_only=('segment_id','event_text')
        # write_only=('start_index','end_index')
        depth=1


class SegmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Segment
        fields = ['id','text','datetime','tags']
        depth=1


