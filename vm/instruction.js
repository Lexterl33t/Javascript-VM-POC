/* The above class represents a bytecode with a name, mnemonic, and an action to be executed. */
class Bytecode {
    
    name = undefined
    action = undefined
    mmnemonic = 0

    constructor(name, mmnemonic, act) {
        this.name = name
        this.mmnemonic = mmnemonic
        this.act = act
    }

    /**
     * The function takes in arguments and executes the "act" method with those arguments.
     * @param args - The `args` parameter is an array of arguments that will be passed to the `act`
     * method.
     * @returns The `act` method is being called with the `args` parameter and the result of that
     * method call is being returned.
     */
    exec(...args) {
        
        return this.act(args)
    }
}

module.exports = Bytecode