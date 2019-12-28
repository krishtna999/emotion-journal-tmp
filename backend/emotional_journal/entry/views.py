from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status, generics, viewsets
from django_filters import rest_framework as filters

from event.models import Event

from .models import Entry
from .serializers import EntrySerializer
from .constants import FIRST_EVENT_ORDER_ID
from .filters import EntryFilter

class EntryCreate(APIView):
    def post(self, request):
        try:
            data = request.data
            if('datetime' in data):
                new_entry = Entry.objects.create(datetime=data['datetime'])

            new_entry = Entry.objects.create()
            
            new_event = Event.objects.create(
                text=data['text'], order_id=FIRST_EVENT_ORDER_ID, entry=new_entry)
            return Response({'status': True}, status=status.HTTP_201_CREATED)
        except Exception as e:
            return Response({'status': False, 'message': str(e)}, status=status.HTTP_400_BAD_REQUEST)




'''
Sample POST JSON:
{
   "text":"I finally went out with my squad really after a long time. It was an amazing day, as i spent more time with my four bestfriends. Me, sara, jane and simran went for a movie and had a good lunch.A whole day shopping is a dream for every girl that too with her besties, trying clothes in the fitting room,taking photos etc,. I felt very relaxed and happy walking in the free air and making fun with my friends.Even when i had a great time with my friends today, one thing really pissed me off. Sara was annoying to me the whole day as i was very close with jane. I dont really understand why she was so possessive about me being close with jane, rather she knows that she and I are best friends for life. This whole thing made me sad and sara being very mean to me."
}

Can add datetime
'''
