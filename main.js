/* The code is importing a module called `VM` from the file `./vm/vm.js`. It then creates a new
instance of the `VM` class and assigns it to the variable `vm`. Finally, it calls the `run` method
of the `vm` object, passing in an array of hexadecimal values as an argument. */
const VM = require('./vm/vm')

let vm = new VM()

vm.run([
    0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
    0x01, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00
])