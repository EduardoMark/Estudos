/*
    Polimorfismo permite a sobrescrita de métodos
*/

class Vehicle {
    move() {
        return 'O veículo está se movendo.'
    }
}

class Car extends Vehicle {
    move() {
        console.log('O carro está se movendo');
    }
}

class Airplane extends Vehicle {
    move(speed) {
        console.log(`O avião está voando à ${speed}km/h`);
    }
}

const fusca = new Car();
const jatinho = new Airplane();

function start(vehicle) {
    if (vehicle instanceof Airplane) {
        vehicle.move(350);
        return;
    }

    vehicle.move();
}

start(fusca);
start(jatinho);