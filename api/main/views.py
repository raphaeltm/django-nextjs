from django.shortcuts import render
from django.http import JsonResponse
from django.contrib.auth.models import User

def user_list(request):
    if request.method == 'GET':
        users = User.objects.all().values('id', 'username', 'email')
        return JsonResponse(list(users), safe=False)

# Create your views here.
