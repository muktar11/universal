# Generated by Django 4.2.3 on 2024-02-21 16:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Account', '0008_remove_post_imageid_remove_post_imageurl_post_image'),
    ]

    operations = [
        migrations.AlterField(
            model_name='course',
            name='image',
            field=models.ImageField(blank=True, null=True, upload_to=''),
        ),
    ]
