const VM = require('./vm/vm')

let vm = new VM()

vm.run([
    0x01, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00
])