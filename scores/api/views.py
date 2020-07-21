from rest_framework.generics import ListCreateAPIView
from scores.models import Score
from .serializers import ScoreSerializer


class ScoreListCreateView(ListCreateAPIView):
    queryset = Score.objects.all()
    serializer_class = ScoreSerializer