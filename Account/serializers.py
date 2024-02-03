from rest_framework import serializers
from django.contrib.auth.hashers import make_password
from .models  import Student, EmailSubscription

class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Student
        fields = ['_id', 'firstName', 'lastName', 'email', 'Course', 'password', 'confirmPassword']
        extra_kwargs = {
            'password': {'write_only': True},
            'confirm_password': {'write_only': True},
        }

    def create(self, validated_data):
        password = validated_data.pop('password', None)
        confirm_password = validated_data.pop('confirmPassword', None)

        # Check if the passwords match
        if password != confirm_password:
            raise serializers.ValidationError("Passwords do not match.")

        # Hash the password before saving to the database
        validated_data['password'] = make_password(password)

        return super().create(validated_data)


class EmailSubscriptionSerializer(serializers.ModelSerializer):
    class Meta: 
        model = EmailSubscription
        fields = ('__all__')