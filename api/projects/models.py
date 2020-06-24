from django.db import models


class Project(models.Model):
    title = models.CharField(max_length=120)
    content = models.TextField(blank=True)

    def __str__(self):
        return self.title
