/* The Register class is a JavaScript class that represents a register with a name and a value. */
class Register {

    constructor(name, value) {
        this.name = name
        this.value = value
    }

    getName() {
        return this.name
    }

    setName(name) {
        this.name = name
    }

    getValue() {
        return this.value
    }

    setValue(value) {
        this.value = value
    }
}

module.exports = Register