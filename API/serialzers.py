#take the python model and translate it into json for the frontend part to be able to use it


from rest_framework import serializers

from API.models import Room


class RoomSerializer(serializers.ModelSerializer):
    class Meta:
        model =Room
        # fields=('code','host','guest_can_pause','vote_to_skip','created_at')
        fields='__all__'
    


         
