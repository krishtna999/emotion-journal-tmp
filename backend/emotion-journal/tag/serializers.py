from rest_framework import serializers

from .models import Entry

from event.serializers import EventSerializer

class EntrySerializer(serializers.ModelSerializer):
    events=EventSerializer(many=True)
    class Meta:
        model = Entry
        fields = ['id','datetime','events']
        depth=1


