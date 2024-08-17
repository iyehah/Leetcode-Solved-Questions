function checkIfInstanceOf(obj: any, classFunction: any): boolean {
   if (obj == null || typeof classFunction !== 'function') {
        return false;
    }
    
    // Traverse the prototype chain of the object
    let prototype = Object.getPrototypeOf(obj);
    
    while (prototype !== null) {
        if (prototype === classFunction.prototype) {
            return true;
        }
        prototype = Object.getPrototypeOf(prototype);
    }
    
    return false;
};

/**
 * checkIfInstanceOf(new Date(), Date); // true
 */