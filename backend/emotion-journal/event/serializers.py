from rest_framework import serializers

from .models import Event

class EventSerializer(serializers.ModelSerializer):
    # event_text=serializers.CharField(source='retrieve_event_text')
    # entry_id=serializers.IntegerField(source='entry.id')
    class Meta:
        model = Event
        fields = ['id','text','order_id','tags']
        read_only=('order_id',)
        depth=1
