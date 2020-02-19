from rest_framework import serializers

from .models import Event

class EventSerializer(serializers.ModelSerializer):
    # event_text=serializers.CharField(source='retrieve_event_text')
    # entry_id=serializers.IntegerField(source='entry.id')
    date = serializers.DateTimeField(format="%A, %d %b %Y",source='entry.datetime')
    class Meta:
        model = Event
        fields = ['id','date','text','order_id','tags',]
        read_only=('order_id','date')
        depth=1