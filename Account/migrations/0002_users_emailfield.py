# Generated by Django 4.2.3 on 2024-02-15 08:04

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Account', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='users',
            name='emailfield',
            field=models.CharField(blank=True, max_length=255, null=True, unique=True),
        ),
    ]
