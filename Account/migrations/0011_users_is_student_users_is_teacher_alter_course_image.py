# Generated by Django 4.2.3 on 2024-02-22 10:31

import Account.models
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Account', '0010_alter_course_image'),
    ]

    operations = [
        migrations.AddField(
            model_name='users',
            name='is_student',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='users',
            name='is_teacher',
            field=models.BooleanField(default=False),
        ),
        migrations.AlterField(
            model_name='course',
            name='image',
            field=models.FileField(blank=True, null=True, upload_to=Account.models.course_file_path),
        ),
    ]
