from rest_framework import serializers

from .models import Entry

from event.serializers import EventSerializer

class EntrySerializer(serializers.ModelSerializer):
    events=serializers.SerializerMethodField()
    class Meta:
        model = Entry
        fields = ['id','datetime','events']
        depth=1

    # To order the events set in the json:
    def get_events(self,instance):
        events_qs=instance.events.all().order_by('order_id')
        return EventSerializer(events_qs,many=True).data
