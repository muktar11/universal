# Generated by Django 4.2.3 on 2024-02-03 11:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Account', '0003_rename_confirm_password_student_course_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='EmailSubscription',
            fields=[
                ('_id', models.AutoField(editable=False, primary_key=True, serialize=False)),
                ('email', models.EmailField(blank=True, max_length=255, null=True)),
            ],
        ),
    ]
