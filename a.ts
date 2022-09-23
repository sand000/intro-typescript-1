let Name: string = "hello";
let age: number = 23;
let isFetching: boolean = false;

let a1: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8];
let a2: Array<string> = ["a", "b", "c", "d", "e", "f"];

// tupple
let tup: [x:string, y:boolean]=["sandhya", true];

// enum
enum data{
    "User", 
    "SuperUser",
     "Admin",
     "SuperAdmin"};

type User = {
    name: string;
    age: number;
    position: data;
}

let users : Array<User> = [
    { name: "Sandhya", age: 23, position: data.SuperUser },
];

// function pro
function pro(x:number, y:number): number{
    return x * y;
}
pro(4,6);

// function div
function div(x:number, y:number): number{
    return x / y;
}
div(4,4);

// function void
function v(name:string): void{
    console.log(name);
}
