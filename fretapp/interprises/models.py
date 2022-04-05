from django.db import models


class Interprise(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=64)
    doc = models.CharField(max_length=18)
    about = models.CharField(max_length=255)
    active = models.BooleanField(default=True)
    site = models.CharField(max_length=255)
    
    def __str__(self):
        return self.name
    
    class Meta:
        abstract = True
        
class Provider(Interprise):
    pass

class Costumer(Interprise):
    pass