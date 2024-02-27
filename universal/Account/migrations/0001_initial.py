# Generated by Django 4.2.3 on 2024-02-14 17:57

import Account.models
from django.db import migrations, models
import phonenumber_field.modelfields


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('auth', '0012_alter_user_first_name_max_length'),
    ]

    operations = [
        migrations.CreateModel(
            name='Course',
            fields=[
                ('_id', models.AutoField(editable=False, primary_key=True, serialize=False)),
                ('Instructor', models.CharField(blank=True, max_length=255, null=True)),
                ('title', models.CharField(blank=True, max_length=255, null=True)),
                ('language', models.CharField(blank=True, max_length=255, null=True)),
                ('content', models.CharField(blank=True, max_length=255, null=True)),
                ('courseduration', models.CharField(blank=True, max_length=255, null=True)),
                ('streamingtime', models.CharField(blank=True, max_length=255, null=True)),
                ('startingday', models.CharField(blank=True, max_length=255, null=True)),
                ('endingday', models.CharField(blank=True, max_length=255, null=True)),
                ('imageId', models.CharField(blank=True, max_length=255, null=True)),
                ('imageUrl', models.CharField(blank=True, max_length=1000, null=True)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
            ],
        ),
        migrations.CreateModel(
            name='EmailSubscription',
            fields=[
                ('_id', models.AutoField(editable=False, primary_key=True, serialize=False)),
                ('email', models.EmailField(blank=True, max_length=255, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='Events',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=100, verbose_name='Title for your event')),
                ('startingtime', models.CharField(max_length=120)),
                ('endtime', models.CharField(max_length=120)),
                ('description', models.TextField(blank=True, null=True)),
                ('startingday', models.DateField(null=True)),
                ('endingday', models.DateField(null=True)),
                ('audience', models.CharField(choices=[('WebDesign', 'WebDesign'), ('GraphicsDesign', 'GraphicsDesign'), ('UI/UX', 'UI/UX'), ('StoreKeeping', 'StoreKeeping'), ('DigitalExplorer', 'DigitalExplorer'), ('WebDevelopment', 'WebDevelopment'), ('Coding', 'Coding'), ('TradingTitans', 'TradingTitans'), ('PhotoshopProdigy', 'PhotoshopProdigy'), ('CulinaryCanvas', 'CulinaryCanvas'), ('SocialMediaMaverick', 'SocialMediaMaverick'), ('FitProInstructor', 'FitProInstructor'), ('NumberCruncher', 'NumberCruncher'), ('WeddingWizard', 'WeddingWizard'), ('WordPress Wiz', 'WordPress Wiz'), ('Influence Igniter', 'Influence Igniter'), ('Stocks Savvy', 'Stocks Savvy'), ('E-commerce Expertise', 'E-commerce Expertise'), ('Digital Explorer', 'Digital Explorer')], max_length=50)),
            ],
        ),
        migrations.CreateModel(
            name='Post',
            fields=[
                ('_id', models.AutoField(editable=False, primary_key=True, serialize=False)),
                ('imageId', models.CharField(blank=True, max_length=255, null=True)),
                ('imageUrl', models.CharField(blank=True, max_length=1000, null=True)),
                ('caption', models.CharField(blank=True, max_length=255, null=True)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
            ],
        ),
        migrations.CreateModel(
            name='Student',
            fields=[
                ('_id', models.AutoField(editable=False, primary_key=True, serialize=False)),
                ('firstName', models.CharField(blank=True, max_length=255, null=True)),
                ('lastName', models.CharField(blank=True, max_length=255, null=True)),
                ('Course', models.CharField(blank=True, max_length=255, null=True)),
                ('email', models.EmailField(blank=True, max_length=255, null=True)),
                ('password', models.CharField(blank=True, max_length=255, null=True)),
                ('confirmPassword', models.CharField(blank=True, max_length=255, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='Users',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('password', models.CharField(max_length=128, verbose_name='password')),
                ('last_login', models.DateTimeField(blank=True, null=True, verbose_name='last login')),
                ('email', models.EmailField(max_length=254, unique=True)),
                ('first_name', models.CharField(blank=True, max_length=50, null=True)),
                ('last_name', models.CharField(blank=True, max_length=50, null=True)),
                ('user_type', models.CharField(choices=[('HOD', 'HOD'), ('Staff', 'Staff'), ('Student', 'Student')], max_length=12)),
                ('phone', phonenumber_field.modelfields.PhoneNumberField(max_length=128, region=None, unique=True)),
                ('gender', models.CharField(choices=[('M', 'Male'), ('F', 'Female')], max_length=1)),
                ('image', models.ImageField(blank=True, null=True, upload_to='images/')),
                ('address', models.TextField()),
                ('Program', models.CharField(blank=True, max_length=255, null=True)),
                ('Term', models.CharField(blank=True, max_length=255, null=True)),
                ('school_credentials', models.FileField(blank=True, null=True, upload_to=Account.models.school_file_path)),
                ('school_credentials_two', models.FileField(blank=True, null=True, upload_to=Account.models.school_file_path2)),
                ('school_credentials_three', models.FileField(blank=True, null=True, upload_to=Account.models.school_file_path3)),
                ('is_active', models.BooleanField(default=True)),
                ('is_accepted', models.BooleanField(default=False)),
                ('is_first_time', models.BooleanField(default=True)),
                ('is_monthly_paid', models.BooleanField(default=False)),
                ('is_registeration_paid', models.BooleanField(default=False)),
                ('is_approved', models.BooleanField(default=False)),
                ('is_staff', models.BooleanField(default=False)),
                ('is_superuser', models.BooleanField(default=False)),
                ('date_joined', models.DateTimeField(auto_now_add=True)),
                ('groups', models.ManyToManyField(blank=True, related_name='custom_user_groups', to='auth.group', verbose_name='groups')),
                ('user_permissions', models.ManyToManyField(blank=True, related_name='custom_user_permissions', to='auth.permission', verbose_name='user permissions')),
            ],
            options={
                'abstract': False,
            },
        ),
    ]
