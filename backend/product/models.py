from django.db import models


class Warehouse(models.Model):
    name = models.CharField(max_length=200, verbose_name='Наименование склада: ')

    def __str__(self):
        return f'{self.id}. {self.name}'
    
    class Meta:
        verbose_name = 'Склад'
        verbose_name_plural = 'Склады'



LIFE = [
    (0, 'Без срока годности'),
    (1, 'Со сроком годности')
]

class Product(models.Model):
    name = models.CharField(max_length=200, verbose_name='Наименование: ')
    count = models.IntegerField(verbose_name='Количество товара: ')
    price = models.DecimalField(max_digits=12, decimal_places=4, verbose_name='Цена товара: ')
    imgage = models.ImageField(upload_to='product_images/%Y/%m/%d/')
    life = models.CharField(max_length=50, choices=LIFE)
    shelf_life = models.DateTimeField(verbose_name='Срок годности: ', null=True, blank=True)
    accessibility = models.BooleanField(verbose_name='Доступно для продажи: ', default=True)
    warehouse = models.ForeignKey(Warehouse, on_delete=models.CASCADE, related_name='product', verbose_name='Склад: ')


    

    def __str__(self):
        return f'{self.id}. {self.name}'
    
    def save(self, *args, **kwargs):
        if self.life:
            self.life = self.life
            return super(Product, self).save(*args, **kwargs)
        else:
            self.life = None
            return super(Product, self).save(*args, **kwargs)



    class Meta:
        verbose_name = "Продукт"
        verbose_name_plural = "Продукты"