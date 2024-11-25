/*
    Classe => É basicamente um molde para um objeto.
    Instância => São os objetos criados a partir de uma classe.
    Atributos => São os dados do objeto.
    Métodos => São as funções executadas por um objetos.
*/

// classe
class People {
    // construtor
    constructor(firstName, age) {
        // atributos
        this.firstName = firstName;
        this.age = age;
    }

    // método
    getBirthyear() {
        return 2024 - this.age;
    }
}

const john = new People("John", 33); // instância
console.log(john);
console.log(john.getBirthyear());