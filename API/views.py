from django.shortcuts import render
from rest_framework import generics

from API.models import Room
from API.serialzers import RoomSerializer

# Create your views here.

# this creates a page for us to POST data via the createAPIView class or to retrieve data via the ListAPIView
class RoomView(generics.ListAPIView):
    queryset = Room.objects.all()
    serializer_class = RoomSerializer