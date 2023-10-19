"use strict";
function Component(constructor) {
    console.log("Component decorator called");
    constructor.prototype.uniqueId = Date.now();
    constructor.prototype.insertInDOM = () => {
        console.log("Inserting the component in the DOM");
    };
}
Component;
class ProfileComponent {
}
