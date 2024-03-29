# yourapp/urls.py
from django.urls import path
from .views import (
       RegisterEmailView, CourseRegisterView, 
     PostRegisterView, ResetPasswordView, StudentCourseDetailView,
)
from . import views 
from rest_framework_simplejwt.views import (
    TokenRefreshView,
)

urlpatterns = [
    path('token/', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('reset-password/', ResetPasswordView.as_view(), name='reset_password'),
    path('account/create/', views.RegisterStaffView.as_view(), name='staff_auth_register'),
    path('api/register/staff', views.RegisterStaffView.as_view(), name='register-staff'),
    path('api/register/student', views.RegisterStudentView.as_view(), name='register-student'),
    path('api/user/student/', views.StudentUserView.as_view(), name='register'),
    path('api/user/staff/', views.StaffUserView.as_view(), name='register'),
    path('api/register/email',  RegisterEmailView.as_view(), name='email-register'),
    path('api/register/course',  CourseRegisterView.as_view(), name='course-register'),
    path('api/students/course/<int:user_id>/<int:course_id>/', views.BuyCourseView.as_view(), name='buy-course'),
    path('api/students/courses/<int:pk>/', views.BuyCourseView.as_view(), name='buy-course'),
    path('api/retrieve/course/<str:pk>/', StudentCourseDetailView.as_view(), name='course-register'),
    path('api/register/post', PostRegisterView.as_view(), name='post-register'),
    path('api/register/events/', views.EventListView.as_view(), name='event-list'),
    path('api/register/event/<str:pk>/', views.EventListView.as_view(), name='event-list'),
    path('api/register/events/<int:pk>/', views.EventDetailView.as_view(), name='event-detail'),
    path('api/students/profile/<int:pk>/', views.StudentProfileDetailView.as_view(), name='event-detail'),
    

    # other urlpatterns...
]
