# Generated by Django 4.2.8 on 2024-05-23 13:02

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Invest',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('value1', models.DecimalField(blank=True, decimal_places=2, max_digits=20, null=True)),
                ('value2', models.DecimalField(blank=True, decimal_places=2, max_digits=20, null=True)),
                ('value3', models.DecimalField(blank=True, decimal_places=2, max_digits=20, null=True)),
                ('lv', models.IntegerField(blank=True, null=True)),
                ('totalasset', models.DecimalField(blank=True, decimal_places=2, max_digits=20, null=True)),
                ('profit', models.IntegerField(blank=True, null=True)),
                ('buycount', models.IntegerField(blank=True, null=True)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='investments', to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
