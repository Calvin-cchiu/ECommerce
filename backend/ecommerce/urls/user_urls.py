from django.urls import path
from ecommerce.views import user_views as views

urlpatterns = [
    path('', views.getUsers, name='users'),

    path('login/', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('profile/', views.getUserProfile, name="users-profile"),
    path('profile/update', views.updateUserProfile, name="users-profile-update"),
    path('register/', views.registerUser, name='user-register'),

    path('<str:pk>/', views.getUserById, name='user'), # has to place below otherwise will treat for expample 'profile' as primary key
    path('update/<str:pk>/', views.updateUser, name='user-update'),

    path('delete/<str:pk>/', views.deleteUser, name='user-delete'),
]