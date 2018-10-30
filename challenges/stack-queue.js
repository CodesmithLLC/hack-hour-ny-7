/**
 * Create a stack.Then create a queue using two stacks.
 */


function Stack() {    
    let storage = [];
    
    this.push = () => {
        return storage.push.apply(storage, arguments);
    };

    this.pop = () => {
        return storage.pop.apply(storage, arguments);
    }

    this.size = () => {
        return storage.length;
    }
    
    this.peek = () => {
        return storage;
    }
}


/**
* Queue Class
*/


function Queue() {

    let stack1 = new Stack();
    let stack2 = new Stack();

    this.eneque = () => {
        stack1.push.apply(stack1, arguments);
    };
    this.dequeue = () => {
        if (stack2.size() === 0) {
            while (stack1.size())
                stack2.push(stack1.pop());
        }
        return stack2.pop();
    };
    this.size = () => {
      return stack1.size() + stack2.size();
    };
    this.peek = () => {
        return stack2.peek();
    };
}

module.exports = {Stack: Stack, Queue: Queue};
