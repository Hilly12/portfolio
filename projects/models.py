from django.db import models


class Project(models.Model):
    title = models.CharField(max_length=120)
    imgSrc = models.CharField(max_length=100)
    pretext = models.CharField(max_length=200)
    timespan = models.CharField(max_length=50)
    date = models.DateField()
    content = models.TextField(blank=True)

    def __str__(self):
        return self.title
