from django.db import models


class Project(models.Model):
    title = models.CharField(max_length=50)
    imgSrc = models.CharField(max_length=300)
    pretext = models.CharField(max_length=400)
    timespan = models.CharField(max_length=50)
    date = models.DateField()
    teamSize = models.IntegerField()
    links = models.CharField(max_length=240)
    technologies = models.CharField(max_length=120)
    keywords = models.CharField(max_length=120)
    demoSrc = models.CharField(max_length=120)
    award = models.CharField(max_length=50)
    article = models.BooleanField()
    featured = models.BooleanField()
    content = models.TextField(blank=True)

    def __str__(self):
        return self.title
