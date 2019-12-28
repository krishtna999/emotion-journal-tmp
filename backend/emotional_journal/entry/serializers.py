from rest_framework import serializers

from .models import Entry

class EntrySerializer(serializers.ModelSerializer):
    class Meta:
        model = Entry
        fields = ['id','datetime','events']
        depth=1


