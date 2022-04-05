from django.db import models

from enterprises.models import Customer
from enterprises.models import Provider


class Offer(models.Model):
    id = models.AutoField(primary_key=True)
    From = models.CharField(max_length=64)
    to = models.CharField(max_length=64)
    initial_value = models.FloatField(default=0.00)
    amount = models.FloatField(default=0.00)
    amount_type = models.CharField(max_length=16)
    
    id_customer = models.ForeignKey(Customer, on_delete=models.CASCADE)
    
    def save(self, *args, **kwargs):
        self.initial_value = round(self.initial_value, 2)
        super(Offer, self).save(*args, **kwargs)

    def __str__(self):
        return self.From


class Bid(models.Model):
    value = models.FloatField(default=0.00)
    amount = models.FloatField(default=0.00)
    
    id_provider = models.OneToOneField(Provider, on_delete=models.CASCADE)
    id_offer = models.OneToOneField(Offer, on_delete=models.CASCADE)
    
    def save(self, *args, **kwargs):
        self.value = round(self.value, 2)
        super(Bid, self).save(*args, **kwargs)

    def __str__(self):
        return f"{self.value} for offer {self.id_offer} from provider {self.id_provider}"