from django.db import models

class Score(models.Model):
    username = models.CharField(max_length=50)
    score = models.IntegerField()

    def __str__(self):
            return (self.username + ":" + str(self.score))