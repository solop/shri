/**
 * Создает экземпляр Машины
 * @this {Car}
 * @param {string} manufacturer Производитель
 * @param {string} model Модель
 * @param {number} year Год производство
 */
function Car(manufacturer, model, year) {
    this.manufacturer = manufacturer;
    this.model = model;
    this.year = year;
}
function Car(manufacturer, model) {
    Car(manufacturer, model, new Date().getFullYear());
}

Car.prototype.getInfo = function() {
    return this.manufacturer + ' ' + this.model + ' ' + this.year;
};
Car.prototype.getDetailedInfo = function() {
    return 'Производитель: ' + this.manufacturer + '. Модель: ' + this.model + '. Год: ' + this.year;
};
Car.prototype.getCountry = function() {
    switch (this.manufacturer.toLowerCase()) {
        case 'bmw':
        case 'audi':
            return 'Germany';
        case 'toyota':
            return 'Japan';
    }
};
// @TODO: если конструктор вызывается без указания текущего года, то подставлять текущий
// @TODO: реализовать методы вывода информации о машине:
// console.log('Car: ' + bmw); // Car: BMW X5 2010
// console.log(bmw.getInfo()); // BMW X5 2010
// console.log(bmw.getDetailedInfo()); // Производитель: BMW. Модель: X5. Год: 2010

var bmw = new Car("BMW", "X5", 2010),
    audi = new Car("Audi", "Q5", 2012),
    toyota = new Car("Toyota", "Camry");


/**
 * Создает экземпляр Автосалона
 * @this {CarDealer}
 * @param {string} name Название автосалона
 */
function CarDealer(name) {
    this.name = name;
    this.cars = [];
    this.price = [];
}

var yandex = new CarDealer('Яндекс.Авто');

// @TODO: реализовать метод добавления машин в автосалон. Предусмотреть возможность добавления одной машины, нескольких машин.
CarDealer.prototype.add = function(cars) {
    for (var key in this.cars) {
        if (this.cars[key] instanceof Car) {
            this.cars.push(this.cars[key]);
        }
    }
    return this;
};
yandex
    .add(toyota)
    .add(bmw, audi);

// @TODO: реализовать метод установки цены на машину
/**
 * Установить цену на машину
 * @param {string} car идентификатор машины
 * @param {string} price стоимость
 */
// идентификатор машины составляется следующим образом "производитель модель год"
// стоимость машины может быть задана в двух валютах: йена и евро.
CarDealer.prototype.setPrice = function(car, price) {
    this.price.push({car: car, price: price});
    return this;
};
yandex
    .setPrice('BMW X5 2010', '€2000')
    .setPrice('Audi Q5 2012', '€3000')
    .setPrice('Toyota Camry 2012', '¥3000');

// @TODO: реализовать вывод списка автомобилей в продаже, с фильтрацией по стране производителю, используя метод getCountry:

CarDealer.prototype.list = function() {
    var result = [];
    for (var key in this.cars) {
        result.push(this.cars[key].getInfo());
    }
    return result.join(', ');
};
CarDealer.prototype.listByCountry = function(country) {
    var result = [];
    for (var key in this.cars) {
        if (this.cars[key].getCountry() == country) result.push(this.cars[key].getInfo());
    }
    return result.join(', ');
};


yandex.list(); //BMW X5 2010, Audi Q5 2012, Toyota Camry 2012
yandex.listByCountry('Germany'); //BMW X5 2010, Audi Q5 2012