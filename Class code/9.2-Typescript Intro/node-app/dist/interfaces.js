"use strict";
function isLegal(user) {
    if (user.age > 18) {
        return true;
    }
    else {
        return false;
    }
}
const ans = isLegal({
    firstName: "guddu",
    lastName: "dash",
    age: 10,
});
console.log(ans);
