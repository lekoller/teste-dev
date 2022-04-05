from django.contrib import admin

from .models import Provider, Customer

admin.site.register(Provider)
admin.site.register(Customer)
