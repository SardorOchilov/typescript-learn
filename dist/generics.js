"use strict";
// You'll learn
// 1.Generic classes
// 2.Generic functions
// 3.Generic interfaces
// 4.Generic constraints
// 5.Type mapping
var _a;
// Generic classes 
class KeyValuePairs {
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
}
let pair = new KeyValuePairs('1', 'string');
// Generic functions 
function arr(value) {
    return [value];
}
let arr3 = arr(1);
class ArrayUtils {
    static arr(value) {
        return [value];
    }
}
let arr4 = ArrayUtils.arr(1);
function fetch() {
    return { error: null, data: null };
}
let result = fetch();
(_a = result.data) === null || _a === void 0 ? void 0 : _a.firstName;
// 
