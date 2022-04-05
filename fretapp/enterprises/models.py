from django.db import models


class Enterprise(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=64, unique=True)
    doc = models.CharField(max_length=18, unique=True)
    about = models.CharField(max_length=255)
    active = models.BooleanField(default=True)
    site = models.CharField(max_length=255, unique=True)
    
    def __str__(self):
        return self.name
    
    class Meta:
        abstract = True
        
class Provider(Enterprise):
    pass

class Customer(Enterprise):
    pass