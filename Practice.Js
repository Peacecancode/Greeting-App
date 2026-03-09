console.log("counter Js is connected")

let textButton = document.getElementById("btn");

textButton.onclick = function () {
    document.getElementById("message").innerText = "You Clicked Using JavaScript🎉";
}


// if/else logic //

let Button = document.getElementById("button");
Button.onclick = function () {
    let Age = document.getElementById("ageInput").value;
    if (Age >= 18) {
        document.getElementById("result").innerText = "Yay, Your'e An Adult😁, WELCOME!!";
    }
    else if (Age ===""){
        document.getElementById("result").innerText = "Please Enter Your Age ☹";
    }
    else {
        document.getElementById("result").innerText = "Sorry Your'e Under-aged And Therefore Can't Use This Application 😞 ";
    }
};

// Simple Button Toggle //

let lightStatus = document.getElementById("status");
let toggleButton = document.getElementById("toggleBtn");

toggleButton.onclick = function () {
    if (lightStatus.innerText === "Light Is Off 💡") {
         lightStatus.innerText = "Light Is On 💡";
    }
    else {
        lightStatus.innerText = "Light Is Off 💡";
    }
};

// If/Else Logic With Numbers //

let numInput = document.getElementById("numInput");
let numButton = document.getElementById("numBtn");
let numChecked = document.getElementById("numChecked");

numButton.onclick = function () {
    let num = document.getElementById("numInput").value;
    if (num > 10) {
        document.getElementById("numChecked").innerText = "Greater Than 10"
    } 
    else {
        document.getElementById("numChecked").innerText = "10 or less"
    }
};

// Multiple conditions //


let scoreButton = document.getElementById("scoreBtn");
scoreButton.onclick = function () {
    let score = document.getElementById("scoreInput").value;
    if (score >= 80) {
        document.getElementById("scoreResult").innerText = "Excellent"
    }
    else if (score >= 50 ) {
        document.getElementById("scoreResult").innerText = "Pass"
    }
    else {
        document.getElementById("scoreResult").innerText = "Fail"
    }
};

// return //

// function multiply(4,5) {
//     return 4 * 5;
// };

function add() {
    let a = Number(document.getElementById("a1").value);
    let b = Number(document.getElementById("a2").value);

    document.getElementById("a-result").innerText = a + b;
};

function multiply() {
    let c = Number(document.getElementById("m1").value);
    let d = Number(document.getElementById("m2").value);

    document.getElementById("m-result").innerText = c * d;
};

function subtract() {
    let e = Number(document.getElementById("s1").value);
    let f = Number(document.getElementById("s2").value);

    document.getElementById("s-result").innerText = e - f;
};

function divide() {
    let g = Number(document.getElementById("d1").value);
    let h = Number(document.getElementById("d2").value);

    document.getElementById("d-result").innerText = g / h;
};


function getNumbers() {
    let a = Number(document.getElementById("num1").value);
    let b = Number(document.getElementById("num2").value);
    return { a , b };
}

//--------------------------------------------------------------------------------------//

let fruits = ["Apple", "Banana", "Orange", "Mango"];
console.log(fruits[0]);
console.log(fruits[2]);


// for (let i = 0; i < 5; i++){
//   console.log(i);
// }


// let numbers = [5, 10, 15, 20];
// for (let i = 0; i < numbers.length; i++) {
//     console.log (numbers[i]);
// };


// DAY 1 //

// let scores = [45, 60, 72, 88, 95];

// for (let a = 0; a < scores.length; a++) {
//     console.log (scores[a]);
// };

// let numbers = [1, 2, 3, 4, 5]
// for (let i = 1; i <= 5; i++) {
//     console.log (i);
// };

// let points = [12, 45, 7, 89, 23];

// for (let p = 3; ) {
//     console.log (points[p]);
// };

let animals = ["Dog", "Cat"];

animals.push("Lion");
console.log(animals);

animals.push("Tiger");
console.log(animals);

animals.pop();
console.log(animals);

// print(animals);

let numbers = [];
numbers.push("10");
console.log(numbers);

numbers.push("20");
console.log(numbers);

numbers.push("30");
console.log(numbers);

numbers.push("40");
console.log(numbers);

numbers.push("50");
console.log(numbers);

let nums = [10, 20, 30, 40, 50];

for (let n = 0; n < nums.length; n++) {
    console.log(nums[n]);
};

let num = [12, 4, 78, 90];
console.log(num);

let food = ["rice", "beans", "water"];

food.forEach(food => {
    console.log(food);
});

console.log(food.includes("rice"));