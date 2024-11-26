class User {
    #name;
    #password;

    constructor(name, password) {
        this.name = name;
        this.password = password;
    }

    get name() {
        return this.#name;
    }

    set name(name) {
        if (typeof name !== 'string') throw new TypeError("The name must be String type!");
        if (name.length < 3) throw new Error("The name must have at least 3 characters!");
        this.#name = name;
    }

    set password(password) {
        if (password.length < 5) throw new Error("The password must have at least 5 characters!");
        this.#password = password;
    }
}

try {
    const defaultUser = new User('dudu', '12345');
    console.log(defaultUser.name);
} catch (err) {
    console.error(err.message);
}