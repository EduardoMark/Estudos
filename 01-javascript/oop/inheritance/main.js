/*
    Herança permite que classes herdem caracteristicas de outras classes.
*/

class User {
    #password;
    constructor(email, password) {
        this.email = email;
        this.#password = password;
    }

    getEmail() {
        return this.email;
    }

    getPassword() {
        return this.#password;
    }

    setPassword(password) {
        this.#password = password;
    }
}

class AdminUser extends User {
    #role = 'admin';

    getRole() {
        return this.#role;
    }

    getDetails() {
        return `Email: ${this.getEmail()}, Role: ${this.getRole()}`;
    }
}

const defaultUser = new User('default@email.com', '456987');
console.log(defaultUser);

const adm = new AdminUser('email@email.com', '123456');
console.log(adm);
console.log(adm.getRole());
console.log(adm.getDetails());