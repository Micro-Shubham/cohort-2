"use strict";
function islegal(age) {
    if (age >= 18)
        return true;
    else
        return false;
}
const value = islegal(20);
console.log(value);
