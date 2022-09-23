var Name = "hello";
var age = 23;
var isFetching = false;
var a1 = [1, 2, 3, 4, 5, 6, 7, 8];
var a2 = ["a", "b", "c", "d", "e", "f"];
// tupple
var tup = ["sandhya", true];
// enum
var data;
(function (data) {
    data[data["User"] = 0] = "User";
    data[data["SuperUser"] = 1] = "SuperUser";
    data[data["Admin"] = 2] = "Admin";
    data[data["SuperAdmin"] = 3] = "SuperAdmin";
})(data || (data = {}));
;
var users = [
    { name: "Sandhya", age: 23, position: data.SuperUser },
];
// function pro
function pro(x, y) {
    return x * y;
}
pro(4, 6);
// function div
function div(x, y) {
    return x / y;
}
div(4, 4);
// function void
function v(name) {
    console.log(name);
}
