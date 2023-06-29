class Bytecode {
    
    name = undefined
    action = undefined
    mmnemonic = 0

    constructor(name, mmnemonic, act) {
        this.name = name
        this.mmnemonic = mmnemonic
        this.act = act
    }

    exec(...args) {
        
        this.act(args)
    }
}

module.exports = Bytecode