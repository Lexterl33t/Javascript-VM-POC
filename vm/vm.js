const Stack = require('./stack')
const Register = require('./register')
const Bytecode = require('./instruction')


class VM {

    bytecodes = undefined

    init_bytecode_table() {
        this.bytecodes_table =  [
            new Bytecode("add", 0x00, this.add_mnemonic),
            new Bytecode("sub", 0x01, this.sub_mnemonic),
            new Bytecode("div", 0x02, this.div_mnemonic),
            new Bytecode("mod", 0x03, this.mod_mnemonic),
            new Bytecode("mul", 0x04, this.mul_mnemonic),
        ]
    }

    add_mnemonic(a, b) {
        if (!this.pc)
            return (null)

        return a + b
    }

    sub_mnemonic(a, b) {
        if (!this.pc)
            return (null)

        return a - b
    }

    div_mnemonic(a, b) {
        if (!this.pc)
            return (null)

        return a / b
    }

    mod_mnemonic(a, b) {
        if (!this.pc)
            return (null)

        return a % b
    }   

    mul_mnemonic(a, b) {
        if (!this.pc)
            return (null)

        return a * b
    }

    constructor() {
        this.pc = new Register("PC", 0);
        this.stack = new Stack()
        this.init_bytecode_table()
    }

    get_bytecode_by_mnemonic(mmnemonic) {

        for (let i = 0; i < this.bytecodes_table.length; ++i) {
            if (this.bytecodes_table[i].mmnemonic == mmnemonic)
                return (this.bytecodes_table[i])
        }

        return (undefined)
    }

    run(bytecodes) {
        this.bytecodes = bytecodes

        if (this.bytecodes.length % 8 !== 0)
            throw new Error("Incorrect size bytecode")


        while (this.pc.getValue() < this.bytecodes.length) {

            let bytecode = this.get_bytecode_by_mnemonic(this.bytecodes[this.pc.getValue()])

            if (bytecode == undefined)
                throw new Error(`Unknow bytecode [${this.bytecodes[this.pc.getValue()]}]`)


            console.log(bytecode)
            

            this.pc.value+=8
        }
    }
}

module.exports = VM