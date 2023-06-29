const Stack = require('./stack')
const Register = require('./register')
const Bytecode = require('./instruction')


class VM {

    bytecodes = undefined

    /**
     * The function initializes a bytecode table with different mnemonics and their corresponding
     * opcodes.
     */
    init_bytecode_table() {
        this.bytecodes_table =  [
            new Bytecode("add", 0x00, this.add_mnemonic),
            new Bytecode("sub", 0x01, this.sub_mnemonic),
            new Bytecode("div", 0x02, this.div_mnemonic),
            new Bytecode("mod", 0x03, this.mod_mnemonic),
            new Bytecode("mul", 0x04, this.mul_mnemonic),
        ]
    }

    /* The code defines several mnemonic functions that perform arithmetic operations on the input
    arguments `a` and `b`. */
    add_mnemonic(a) {

        return a[0] + a[1]
    }

    sub_mnemonic(a) {

        return a[0] - a[1]
    }

    div_mnemonic(a, b) {

        return a[0] / a[1]
    }

    mod_mnemonic(a, b) {

        return a[0] % a[1]
    }   

    mul_mnemonic(a, b) {

        return a[0] * a[1]
    }

    /**
     * The constructor function initializes the PC register to 0 and creates a new stack, as well as
     * initializing the bytecode table.
     */
    constructor() {
        this.pc = new Register("PC", 0);
        this.stack = new Stack()
        this.init_bytecode_table()
    }

    /**
     * The function "get_bytecode_by_mnemonic" returns the bytecode object from the bytecodes_table
     * array that matches the given mnemonic.
     * @param mmnemonic - The parameter "mmnemonic" is a string representing the mnemonic for which we
     * want to retrieve the bytecode.
     * @returns the bytecode object that matches the given mnemonic. If no match is found, it returns
     * undefined.
     */
    get_bytecode_by_mnemonic(mmnemonic) {

        for (let i = 0; i < this.bytecodes_table.length; ++i) {
            if (this.bytecodes_table[i].mmnemonic == mmnemonic)
                return (this.bytecodes_table[i])
        }

        return (undefined)
    }

   /* The `run` method in the `VM` class is responsible for executing the bytecode instructions. */
    run(bytecodes) {
        this.bytecodes = bytecodes

        /* The code is checking if the length of the `bytecodes` array is not divisible by 8. If it is
        not divisible by 8, it means that the bytecode instructions are not properly formatted, as
        each instruction should be represented by 8 bytes. If the length is not divisible by 8, it
        throws an error indicating that the bytecode size is incorrect. */
        if (this.bytecodes.length % 8 !== 0)
            throw new Error("Incorrect size bytecode")


        /* The `while` loop is the main execution loop of the virtual machine. It continues to execute
        as long as the value of the program counter (`this.pc.getValue()`) is less than the length
        of the `bytecodes` array. */
        while (this.pc.getValue() < this.bytecodes.length) {

            let bytecode = this.get_bytecode_by_mnemonic(this.bytecodes[this.pc.getValue()])

            if (bytecode == undefined)
                throw new Error(`Unknow bytecode [${this.bytecodes[this.pc.getValue()]}]`)


            console.log(bytecode.exec(1, 2))
            

            this.pc.value+=8
        }
    }
}

module.exports = VM