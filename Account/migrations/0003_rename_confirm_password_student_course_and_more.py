# Generated by Django 4.2.3 on 2024-02-03 08:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Account', '0002_remove_student_birthday'),
    ]

    operations = [
        migrations.RenameField(
            model_name='student',
            old_name='confirm_password',
            new_name='Course',
        ),
        migrations.RenameField(
            model_name='student',
            old_name='first_name',
            new_name='confirmPassword',
        ),
        migrations.RenameField(
            model_name='student',
            old_name='last_name',
            new_name='firstName',
        ),
        migrations.AddField(
            model_name='student',
            name='lastName',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
    ]
