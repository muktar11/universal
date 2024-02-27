# Generated by Django 4.2.3 on 2024-02-21 15:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Account', '0007_remove_course_imageid_remove_course_imageurl_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='post',
            name='imageId',
        ),
        migrations.RemoveField(
            model_name='post',
            name='imageUrl',
        ),
        migrations.AddField(
            model_name='post',
            name='image',
            field=models.ImageField(blank=True, max_length=1000, null=True, upload_to=''),
        ),
    ]