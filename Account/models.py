from django.db import models

# Create your models here.


class Student(models.Model):
    _id = models.AutoField(primary_key=True, editable=False)
    firstName = models.CharField(max_length=255, blank=True, null=True)
    lastName = models.CharField(max_length=255, blank=True, null=True)
    Course = models.CharField(max_length=255, blank=True, null=True)
    email = models.EmailField(max_length=255, blank=True, null=True)
    password = models.CharField(max_length=255, blank=True, null=True)
    confirmPassword = models.CharField(max_length=255, blank=True, null=True)


class EmailSubscription(models.Model):
    _id = models.AutoField(primary_key=True, editable=False)
    email = models.EmailField(max_length=255, blank=True, null=True)