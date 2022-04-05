from rest_framework import serializers, viewsets

from .models import Provider, Costumer


class ProviderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Provider
        fields = '__all__'
         
class CostumerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Costumer
        fields = '__all__'
        
        
class ProviderViewSet(viewsets.ModelViewSet):
    serializer_class = ProviderSerializer
    queryset = Provider.objects.all()
    
class CostumerViewSet(viewsets.ModelViewSet):
    serializer_class = CostumerSerializer
    queryset = Costumer.objects.all()