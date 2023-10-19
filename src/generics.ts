// You'll learn
// 1.Generic classes
// 2.Generic functions
// 3.Generic interfaces
// 4.Generic constraints
// 5.Type mapping


// Generic classes 
class KeyValuePairs<K, V>{
    constructor(public key: K, public value: V){}
}

let pair = new KeyValuePairs('1', 'string');

// Generic functions 

function arr<T>(value: T){
    return [value]
}

let arr3 = arr(1);

class ArrayUtils{
   static arr<T>(value: T){
        return [value]
    }
}

let arr4 = ArrayUtils.arr(1);

// Generic interfaces 
interface Result<T> {
    error: string | null;
    data: T | null
}

interface User {
    firstName : string
}

interface Product {
    title: string
}

function fetch<T>(): Result<T>{
    return {error: null, data: null}
}

let result = fetch<User>();
result.data?.firstName

// 