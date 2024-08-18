// ex1
function showDate() {
   document.getElementById('s_date').innerHTML=Date();
}
// ex2
function lightOn(){
   document.getElementById('myImg').src='images/pic_bulbon.gif';
}
function lightOff(){
   document.getElementById('myImg').src='images/pic_bulboff.gif';
}
// ex3
function styleChange(){
   document.getElementById('demo').style.fontSize='35px';
}
// ex4
function styleChange2() {
   document.getElementById('demo2').style.display='none';
}
// ex5
function styleChange3() {
   document.getElementById('demo3').style.display='block';
}
// ex6
function myFunction(){
   document.getElementById('demo4').innerHTML='Paragraph changed.';
}
// ex7
function myFunction1(){
   document.getElementById("demo5").innerHTML = "My First JavaScript";
}
// ex8
function myFunction2(){
   document.getElementById("demo6").innerHTML = 5 + 6;
}
// ex9
function myFunction3(){
   document.write(7+7);
}
// ex10
function myFunction4(){
   window.alert(7+7);
}
// ex11
function myFunction5(){
   console.log(7+9);
}
// ex12
function myFunction6(){
   window.print();
}
// ex13
var x, y;
x=5+6;
y=x*10
document.getElementById('demo13').innerHTML = y;
// ex14
try {
  const PI = 3.141592653589793;
  PI = 3.14;
}
catch (err) {
  document.getElementById("demo14").innerHTML = err;
}
// ex15
if (new Date().getHours() < 18) {
  document.getElementById("demo").innerHTML = "Good day!";
}
// Create a Map
const fruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);
document.getElementById("demo").innerHTML = typeof fruits;
// ex16
var number1 = 5;
var number2 = 4;

var result = number1 + number2;

function dataManipulate(){
   document.getElementById('res').innerHTML=result;
}
// ex17
let number3, number4;

number3 = 6;
number4 = 7;
number3+=number4;

function dataManipulate1(){
   document.getElementById('number').innerHTML=number3;
}
// ex18
var data = "welcome toss";
function dataRepeat(){
   document.getElementById('rep').innerHTML=data.repeat(3);
}
// ex19
let number5, number6, result19;
number5 = 20;
number6 = 5;
result19 = number5 < number6;
function resultComp(){
   document.getElementById('result19').innerHTML= result19;
}

// ex20
let x1, y1, z1;
x1 = 5 + 5;
y1 = "5" + 5;
z1 = "Hello" + 5;
function resultComp(){}
   document.getElementById("result20").innerHTML =
x1+ "<br>" + y1 + "<br>" + z1;

// ex21
function boolValu(){
   document.getElementById("bool").innerHTML = Boolean(10 > 9);
}

// ex22
let x2 = null;
function boolValu(){
   document.getElementById("boolnull").innerHTML = Boolean(x2);
}
// ex23
function myFunction() {
  let age = document.getElementById("age").value;
  let voteable = (age < 18) ? "Too young":"Old enough";
  document.getElementById("demo23").innerHTML = voteable + " to vote.";
}
// ex24
if (new Date().getHours() < 18) {
  document.getElementById("demo").innerHTML = "Good day!";
}
// ex25
let day;
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case  6:
    day = "Saturday";
}
document.getElementById("demo").innerHTML = "Today is " + day;

// ex26
let text = "";

for (let i = 0; i < 5; i++){
   text += "the number is " + i + "<br>";
}
document.getElementById("demo26").innerHTML = text;

// ex27

const numbers = [45, 4, 9, 16, 25];

let txt = "";

function myFunction(value){
   txt += value + "<br>";
}

numbers.forEach(myFunction);
document.getElementById("demo27").innerHTML = txt;

// ex28

let text28 = "";
let i = 0;
while (i < 10){
   text28 += "<br>the number is " + i;
   i++;
}
document.getElementById("demo28").innerHTML = text28;

// ex29
let text29 = ""
let a = 0;

do {
  text29 += "<br>The number is " + a;
  a++;
}
while (a < 10);  

document.getElementById("demo29").innerHTML = text29;

// ex30
class Car{
   constructor(name,year){
      this.name = name;
      this.year = year;
   }
   age(x){
      return x - this.year
   }
}

const date = new Date();
let year = date.getFullYear();

const myCar = new Car("Ford", 2014);
document.getElementById("demo30").innerHTML=
"My car is " + myCar.age(year) + " years old.";

// ex31
const obj = document.getElementById("demo31");
obj.innerHTML = " Hello";

// ex32
let b = 0;
document.getElementById("demo32").innerHTML = Boolean(b = 10);

// ex33
let c = 10;
switch(c) {
  case 10: document.getElementById("demo33").innerHTML = "Hello";
}

// ex34
let x11 = "";
let x12 = 0;
let x13 = false;
const x4 = {};
const x5 = [];
const x6 = /()/;
const x7 = function(){};

document.getElementById("demo34").innerHTML =
"x11: " + typeof x1 + "<br>" +
"x12: " + typeof x2 + "<br>" +
"x13: " + typeof x3 + "<br>" +
"x4: " + typeof x4 + "<br>" +
"x5: " + typeof x5 + "<br>" +
"x6: " + typeof x6 + "<br>" +
"x7: " + typeof x7 + "<br>";

// ex35
function myFunction(e, f) {
  if (f === undefined) {
    f = 0;
  }  
  return e * f;
}
document.getElementById("demo35").innerHTML = myFunction(4);

// ex36
document.getElementById("demo36").innerHTML =
"Hello Dolly.";

// ex37
a = 5;
b = 6;
c = a + b;
console.log(c);

// ex38
let text38 = '{"employees":[' +
'{"firstName":"John","lastName":"Doe" },' +
'{"firstName":"Tanzer","lastName":"Ahammad" },' +
'{"firstName":"Peter","lastName":"Jones" }]}';

const object1 = JSON.parse(text38);
document.getElementById("demo38").innerHTML =
object1.employees[1].firstName + " " + object1.employees[1].lastName;

// ex39
// Create an object:
const person = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
  fullName : function() {
    return this.firstName + " " + this.lastName;
  }
};

// Display data from the object:
document.getElementById("demo").innerHTML = person.fullName();
// ex40
class Car1 {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
}

const myCar1 = new Car1("Ford", 2014);
const myCar2 = new Car1("Audi", 2019);

document.getElementById("demo40").innerHTML =
myCar1.name + " " + myCar2.name;

// ex41
let hello = "";

hello = () => "Hello World!";

document.getElementById("demo41").innerHTML = hello();

// ex42
try {
  carName = "Saab";
  let carName = "Volvo";
}
catch(err) {
  document.getElementById("demo").innerHTML = err;
}

// ex43
"use strict";
myFunction();

function myFunction() {
  y = 3.14;   // This will cause an error (y is not defined)
}
// ex44
myFunction();

function myFunction() {
  let carName = "Volvo";
  document.getElementById("demo441").innerHTML = typeof carName + " " + carName;
}

document.getElementById("demo442").innerHTML = typeof carName;

// ex45
try {
  adddlert("Welcome guest!");
}
catch(err) {
  document.getElementById("demo45").innerHTML = err.message;
}
// ex46
document.getElementById("demo46").innerHTML = 100 / 50 * 3;

// ex47
let text47 = "Visit W3Schools!"; 
let n = text47.search("W3Schools");
document.getElementById("demo47").innerHTML = n;

// ex48
document.getElementById("demo48").innerHTML = 5 & 1;

// ex49
document.getElementById("demo").innerHTML = ~ 5;

// ex50
// Create an Object
const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 50
};

// Destructuring
let {lastName : name} = person1;

// Display Primitive Values
document.getElementById("demo50").innerHTML = name;




































