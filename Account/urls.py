# yourapp/urls.py
from django.urls import path
from .views import RegisterView,  RegisterEmailView

urlpatterns = [
    path('api/register/', RegisterView.as_view(), name='register'),
    path('api/register/email',  RegisterEmailView.as_view(), name='register'),
    # other urlpatterns...
]
