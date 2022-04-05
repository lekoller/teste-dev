from rest_framework import serializers, viewsets

from .models import Offer, Bid


class OfferSerializer(serializers.ModelSerializer):
    _from = serializers.CharField(source='From')
    
    def get_fields(self):
        result = super().get_fields()
        _from = result.pop('_from')
        result['from'] = _from
        return result
    
    
    class Meta:
        model = Offer
        exclude = ('From', )
         
class BidSerializer(serializers.ModelSerializer):
    class Meta:
        model = Bid
        fields = '__all__'
        
        
class OfferViewSet(viewsets.ModelViewSet):
    serializer_class = OfferSerializer
    queryset = Offer.objects.all()
    
class BidViewSet(viewsets.ModelViewSet):
    serializer_class = BidSerializer
    queryset = Bid.objects.all()