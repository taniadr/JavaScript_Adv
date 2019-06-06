
class Car {
    constructor(doors, engine, color) {
        this.doors = doors;
        this.engine = engine;
        this.color = color;
    }
}

class carFactory{
    createCar(type){
        switch(type){
            case 'civic':
                return new Car(4, 'V6', 'grey'); 
            case 'honda':
                return new Car(2, 'V4', 'red');
        }
    }
}
//tem que instanciar primeiro pra poder usar os metodos 
//da clase, obviously. 
const factory = new carFactory(); 
const honda = factory.createCar('honda');
const xonda = factory.createCar('civic');

console.log(honda);
console.log(xonda);

