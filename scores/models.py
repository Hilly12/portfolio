from django.db import models

class Score(models.Model):
    username = models.CharField(max_length=50)
    score = models.IntegerField()
    game_id = models.IntegerField()

    def __str__(self):
            return (str(self.game_id) + ": " + self.username + " " + str(self.score))