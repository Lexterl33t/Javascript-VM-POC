/* The Stack class is a JavaScript implementation of a stack data structure. */
class Stack {

    stack = []

    pop() {

        if (!this.stack)
            return (undefined)

        return this.stack.pop()
    }

    push(value) {

        if(!this.stack)
            return (undefined)

        
        return this.stack.push(value)
    }

    len_stack() {
        
        if (!this.stack) 
            return (undefined)

        return this.stack.length
        
    }

    top() {

        if (!this.stack)
            return (undefined)

        return this.stack[this.len_stack()-1]
    }
}

module.exports = Stack