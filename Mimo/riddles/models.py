from django.db import models

# Create your models here.

class Riddle(models.Model):
    riddle_text = models.CharField(max_length=255)
    pub_date = models.DateTimeField('date published')


class Option(models.Model):
    riddle = models.ForeignKey(Riddle, on_delete=models.CASCADE)
    text = models.CharField(max_length=255)
    correct = models.BooleanField(default=False)

class Values(models.Model):
    name = models.CharField(max_length = 30)

    def __str__(self):
        return self.name