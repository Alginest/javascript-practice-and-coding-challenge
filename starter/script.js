// Lecture: let and const


/*// ES5 code

var name5 = 'Jane Smith';
var age5 = '23';
name5 = 'Jane Miller';
console.log(name5);

// ES6 code

const name6 = 'Jane Smith';
let age6 = '23';
name6 = 'Jane Miller';
console.log(name6);
*/  // here we see that const cannt be changed it will show a error
/*
// ES5 
function driversLicence5(passedTest){
    if (passedTest){
        var firstName = 'John';
        var yearOfBirth = 1990;

        console.log(firstName + ' born in ' + yearOfBirth + ', is now officaly allowed to drive a car.');
    }
}
driversLicence5(true);

// ES6 code
function driversLicence6(passedTest){
    if (passedTest){
        let firstName = 'John';
        const yearOfBirth = 1990;

        console.log(firstName + ' born in ' + yearOfBirth + ', is now officaly allowed to drive a car.');
    } // Diffrence here is in the es 6 code its not function scoped its block scoped so if we moved console.log outside it wouldnt work {} make the blocks
}
driversLicence6(true);
*/
// secon example  if we want to make it work outside the block, we would have to define it like with variables before in the function begining
//
/*
function driversLicence6(passedTest){

    let firstName;
    const yearOfBirth = 1990; // diffrence her const dosent still work so we have to type it out here

    if (passedTest){
        let firstName = 'John';
    } 
      console.log(firstName + ' born in ' + yearOfBirth + ', is now officaly allowed to drive a car.');
}
driversLicence6(true);



let i = 23;
for (let i = 0; i < 5; i++) {
    console.log(i);
}        // cuz let is block scoped the inside the for loop is completly diffrent from the i variable above.
console.log(i);

*/
///////////////////////////////////////////////
// Lecture: Blocks and IIFEs
// ES 6
/*
{
    const a = 1;
    let b = 2;
    var c = 3;
}
*/
//console.log(a + b); // ES 6 data privacy is archived during a spot


// ES5
/*
(function(){
    var c = 3;
})();*/

// console.log(c);

///////////////////////////////////////////////
// Lectures: Strings
/*
let firstName = 'john';
let lastName = 'Smith';
const yearOfBirth = 1990;
function calcAge(year){
    return 2016 - year;
}

// ES 5
console.log('This is ' + firstName + ' ' + lastName + ' . He was born in ' +
yearOfBirth + '. Today, he is ' + calcAge(yearOfBirth) + ' years old.')

// ES 6
console.log(`This is ${firstName} ${lastName}. He was born in ${yearOfBirth}. Today he is ${calcAge(yearOfBirth)} years old.`)
// targeting letters with new commands.
const n = `${firstName} ${lastName}`;
console.log(n.startsWith('j'));
console.log(n.endsWith('th'));
console.log(n.includes(' '));
// repeat method targeting a specific variable and repeting it how much we want
console.log(firstName.repeat(5));
// including a template litarature,if we want it to go one under the other one we shove it in the next row after the ``
console.log(`${firstName} `.repeat(5));*/


/////////////////////////////////////////////////
// Lecture: Arrow functions
/*
const years = [1990, 1965, 1982, 1937];

// ES 5

var ages5 = years.map(function(el) {
        return  2016 - el;
});
console.log(ages5);

// ES 6
let ages6 = years.map(el => 2016 - el); // for one argument
console.log(ages6);
// with more arguments like index and element
ages6 = years.map((el, index) => `Age element ${index + 1}: ${2016 - el}.`);
console.log(ages6);
// if there is more then 2 then we need to use the  curly braces and return
ages6 = years.map((el, index) => {
  const now = new 
  Date().getFullYear();
  const age = now - el;
  return `Age element ${index + 1}: ${age}.`
});
console.log(ages6);

/////////////////////////////////////////
// Lecture: Arrow Functions 2

// Arrow functions dont have the this keyword they just this whenever they are located

// ES 5
/*
var box5 = {
    color: 'green',
    position: 1,
    clickme: function () {
            
          var self = this; // we make a variable and put self as this.
          document.querySelector('.green').addEventListener('click', function (){
              var str = 'This is box number ' + self.position + ' and it is ' + self.color;
              alert(str);
          });
    }
}

box5.clickme();
*/
// ES 6 
/*
const box6 = {
    color: 'green',
    position: 1,
    clickme: function () {
          document.querySelector('.green').addEventListener('click', () => {
              let str = 'This is box number ' + this.position + ' and it is ' + this.color;
              alert(str);
          });
    }
}

box6.clickme();

//  ES 6 practice
const box7 = {
    color: 'green',
    position: 1,
    clickMe: function () {
     document.querySelector('.green').addEventListener('click', () => {
       let str = 'This si box number ' + this.position + ' and it is '
       + this.color;
       alert(str);
     });

    }
}
// es 5 expm
var ages5 = years.map(function(el) {
        return  2016 - el;
});
ages6 = years.map((el, index) => `Age element ${index + 1}: ${2016 - el}.`);
console.log(ages6);
console.log(ages5);
//convert to es 6

let ages8 = years.map(el => 2016 - el);
console.log(ages6); // one argument

let ages7 = years.map((el, index) => `Age element ${index + 1}: ${2016 - el}`);
console.log(ages7); // 2 argument 
function driversLicence9 (passedTest){
    if (passedTest){
        let firstName = 'John';
        const yearOfBirth = 1990;
        console.log(`${firstName}: born in ${yearOfBirth}: , is now officaly allowed to drive a car.`)
    } // 3 arguments
}

// more argument req {} and return
//
var name5 = 'Jane Smith';
var age5 = '23';
name5 = 'Jane Miller';
console.log(name5); // transform into ES6 

let name9 = 'Jane Smith';
const age9 = '23';
name9 = 'Jane Miller'; // using let and const insted of var usuful, const cant be changed
console.log(name9);

function driversLicence5(passedTest){
    if (passedTest){
        var firstName = 'John';
        var yearOfBirth = 1990;

        console.log(firstName + ' born in ' + yearOfBirth + ', is now officaly allowed to drive a car.');
    }
} // Transform this function into a es 6




function driversLicence6(passedTest){
    if (passedTest){
        let firstName = 'John';
        const yearOfBirth = 1990;

        console.log(firstName + ' born in ' + yearOfBirth + ', is now officaly allowed to drive a car.');
    }
}
function driversLicence9 (passedTest){
    if (passedTest){
        let firstName = 'John';
        const yearOfBirth = 1990;
        console.log(`${firstName}: born in ${yearOfBirth}: , is now officaly allowed to drive a car.`)
    }
}
driversLicence9(true);
*/
/////////////////////////////////////////////////////
// Lecture: Arrow Functions 2
/*
// ES 5
var box5 = {
    color: 'green',
    position: 1,
    clickMe: function (){
        var self = this;
        document.querySelector('.green').addEventListener('click', function (){
            var str = 'This is box number ' + self.position + ' and it is ' + self.color;
            alert(str);
        });
    }
}
//box5.clickMe();

// ES 6

const box6 = {
    color: 'green',
    position: 1,
    clickMe:  function () {
        document.querySelector('.green').addEventListener('click',  () => {
            var str = 'This is box number ' + this.position + ' and it is ' + this.color;
            alert(str);
        });
    }
}
box6.clickMe();

const box66 = {
    color: 'green',
    position: 1,
    clickMe: function () {
        document.querySelector('.green').addEventListener('click',  () => {
            var str = 'This is box number ' + this.position + ' and it is ' + this.color;
            alert(str);
        });
    }          // we have to be careful with arrow functions so we know where the this keyword is poiting to its always poting outside the block 
}
box66.clickMe();

// another expalm
// es 5
function Person(name) {
    this.name = name;
}

Person.prototype.myFriends5 = function (friends){

        var arr = friends.map(function(el)
        {
           return this.name + ' is friends with ' + el;
        }.bind(this));
     console.log(arr);
}

var friends = ['Bob', 'Jane', 'Mark'];

new Person('John').myFriends5(friends);

// ES 6

function Person(name) {
    this.name = name;
}

Person.prototype.myFriends6 = function (friends){

        var arr = friends.map(el => `${this.name} is friends with ${el}`)       
        console.log(arr);
}

var friends = ['Bob', 'Jane', 'Mark'];

new Person('Mike').myFriends6(friends);
new Person('Jane').myFriends6(friends);*/


/////////////////////////////////////////////////
/// Lecutre: Destructuring

// ES 5 
/*
var john = ['John', 26];
//var name = john[0];
//var age = john [1];

// ES 6

const [name, age] = ['John', 26];
console.log(name);
console.log(age);

const obj = {
    firstName: 'John',
    lastName: 'Smith'
};

const {
    firstName, 
    lastName
   } = obj;
console.log(firstName);
console.log(lastName);

const {firstName: a, lastName: b} = obj; 
console.log(a);
console.log(b);

// es 5
function calcAge(year){
    return 2016 - year;
} 
var age5 = calcAge(1990);
console.log(age5);*/
//retirment
/*
function calcAgeUntilRetirment(age){
 var age = calcAge();
 return 65 - age; 
}
var ageRetirment = calcAgeRetirment(1992);
console.log(ageRetirment);*/
// es 6
/*
function calcAgeRetirment(year){
    const age = new Date().getFullYear() - year;
    return [age, 65 - age];
}
const [age2, retirment] = 
calcAgeRetirment(1990);
console.log(age2);
console.log(retirment);*/


///////////////////////////////////////////////////////
// Lecture: Arrays
/*
const boxes = document.querySelectorAll('.box');

// ES 5

var boxesArr5 = Array.prototype.slice.call(boxes);
boxesArr5.forEach(function(cur){
    cur.style.backgroundColor = 'dodgerblue';
});

//ES 6
const boxesArr6 = Array.from(boxes);
Array.from(boxes).forEach(cur => cur.style.backgroundColor = 'dodgerblue');
*/
// Loop

// ES 5
/*
for(var i = 0; i < boxesArr5.length; i++){
    if (boxesArr5[i].className === 'box blue') {
        continue; // with continue they change
    }
    boxesArr5[i].textContent = 'I changed to blue!';
}*/
/*
// ES 6
for (const cur of boxesArr6) {
    if (cur.className.includes('blue')){
        continue;
    }
    cur.textContent = 'I changed to blue!';
}

// new methods to find indexes of arrays

// ES5

var ages = [12, 17, 8, 21, 14, 11];

var full = ages.map(function(cur){
    return cur >= 18;
});
console.log(full);

full.indexOf(true);
console.log(full.indexOf(true));
console.log(ages[full.indexOf(true)]);

// ES6 
ages.findIndex(cur => cur >= 18);

console.log(ages.findIndex(cur => cur >= 18));
console.log(ages.find(cur => cur >= 18));*/

//////////////////////////////////////////////
/// Lecture: Spread operator
/*
function addFourAge (a, b, c, d){
    return a + b + c + d;
}
var sum1 = addFourAge(18, 30, 12, 21); 
console.log(sum1);

// ES 5
var ages  = [18, 30, 12, 21];
var sum2 = addFourAge.apply(null, ages);

console.log(sum2);

// ES 6 
const sum3 = addFourAge(...ages);
console.log(sum3); // using spread opeators


const familySmith = ['John', 'Jane', 'Mark'];
const familyMiller = ['Mary', 'Bob', 'Ann'];
const bigFamily = [...familySmith, 'Lily', ...familyMiller];
console.log(bigFamily); // using spread opeator 

const h = document.querySelector('h1');
const box = document.querySelectorAll('.box');
const all = [h, ...box]; // spread opearator used to add more elemnts into one

Array.from(all).forEach(cur => cur.style.color = 'purple'); // method to transform it into a array
// spread opearator takes a array and transforms into single values
///////////////////////////////////////////
/// Lecture: Rest parameters 

// rest parameters takes signle values and transforms it into a single array with multiple values
*/
// ES 5
/*
function isFullAge5 (){
    //console.log(arguments);//arguments is not really a array but it looks like it
    var argsARR = Array.prototype.slice.call(arguments);

    argsARR.forEach(function(cur){
        console.log((2016 - cur) >= 18);
    })
}
//isFullAge5(1990, 1999, 1965);
//isFullAge5(1990, 1999, 1965, 2016, 1987);

// ES 6
 
function isFullAge6(...years){
       years.forEach(cur => console.log((2016 - cur) >= 18));
}
isFullAge6(1990, 1999, 1965, 2016, 1987);
*/
// we use spread parameters when we need call a array and make it into single values

// ES 5
/*
function isFullAge5 (limit){
    //console.log(arguments);//arguments is not really a array but it looks like it
    var argsARR = Array.prototype.slice.call(arguments, 1);

    argsARR.forEach(function(cur){
        console.log((2016 - cur) >= limit);
    })
}
//isFullAge5(1990, 1999, 1965);
//isFullAge5(1990, 1999, 1965, 2016, 1987);

// ES 6
 
function isFullAge6(limit, ...years){
       years.forEach(cur => console.log((2016 - cur) >= limit));
}
isFullAge6(16, 1990, 1999, 1965, 2016, 1987);*/

///////////////////////////////////////////////
//// Lecture: Default parameters

// ES 5
/*
function SmithPerson (firstName, yearOfBirth, lastName, nationality){
    if (lastName === undefined){
        lastName = 'Smith';
    } else {
        lastName = lastName;
    }
       if (nationality === undefined){
        nationality = 'american';
    } else {
        nationality = nationality;
    }

    this.firstName = firstName;
    this.lastName = lastName;
    this.yearOfBirth = yearOfBirth;
    this.nationality = nationality;
}

var john = new SmithPerson('John', 1990);
console.log(john);

var emily = new SmithPerson('Emily', 1993, 'Diaz', 'Spanish')
console.log(emily);*/

// ES 6
/*
function SmithPerson(firstName, yearOfBirth,lastName = 'Smith', nationality = 'american') {
    this.firstName = firstName;
    this.lastName = lastName;
    this.yearOfBirth = yearOfBirth;
    this.nationality = nationality;
}
// We just add the default parameters inside the function constructor parameteres,so it dosent display undifined

var john = new SmithPerson('John', 1990);
console.log(john);

var emily = new SmithPerson('Emily', 1993, 'Diaz', 'Spanish')
console.log(emily);*/

////////////////////////////////////////////////////////////
/// Lectures: Maps
/*
const question = new Map();

question.set('question', 'What is the offical name of the latest mayor JavaScript version?');
question.set(1, 'ES 5');
question.set(2, 'ES 6');
question.set(3, 'ES 2015');
question.set(4, 'ES 7');
question.set('correct', 3);
question.set(true, 'Correct answer :)');// we cann set data
question.set(false, 'Wrong, please try againt');

console.log(question);

question.get('question'); // we cann get data
console.log(question.get('question'));*/
// console.log(question.size);

// if (question.has(4)) {
    //question.delete(4);  // deleting specific data
   // console.log('Answer 4 is here')
// }

// question.clear(); used to delete everything from the map

// Set,get,delete,clear are the most basic things to make create maps we also cann loop thru maps


// Looping thru maps
// for each loop
// question.forEach((value, key) => 
// console.log(`This is ${key}, and its set to ${value}`))
// for of loop
/* for (let [key, value] of question.entries()) {
console.log(`This is ${key}, and its set to ${value}`);
} */
/*
for (let [key, value] of question.entries()) {
    if (typeof(key) === 'number'){
        console.log(`Answer ${key}: ${value}`);
    }
} 

const ans = parseInt(prompt('Write the correct answer'));

console.log(question.get(ans === question.get('correct')));*/


////////////////////////////////////
// Lecture: Classes

// ES 5
/*
var Person5 = function(name, yearOfBirth, job){
    this.name = name;
    this.yearOfBirth = yearOfBirth;3
    this.job = job;
}

Person5.prototype.calculateAge = function() {
    var age = new Date().getFullYear() - this.yearOfBirth;
    console.log(age);
}

var john5 = new Person5 ('John', 1990, 'teacher');
*/
// ES 6
/*
class Person6 {
    constructor(name, yearOfBirth, job){
       this.name = name;
       this.yearOfBirth = yearOfBirth;
       this.job = job;
    }
    calculateAge (){
        var age = new Date().getFullYear() - this.yearOfBirth;
        console.log(age);
    }
    static greeting(){
        console.log('Hey there!');
    }
}

const john6 = new Person6('John', 1990, 'teacher');

console.log(john5);
console.log(john6);

Person6.greeting();*/

/////////////////////////////////////////////////////////////////////////
// Lecture : Classes and Subclasses
/*
var Person5 = function(name, yearOfBirth, job){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
} // Created the first class in es 5

Person5.prototype.calculateAge = function() {
    var age = new Date().getFullYear() - this.yearOfBirth;
    console.log(age);
} // made a prototype for method calculate age 

var john5 = new Person5 ('John', 1990, 'teacher');


var Athlete5 = function (name, yearOfBirth, job, olympicGames, medals)
{
     Person5.call(this, name, yearOfBirth, job);
     this.olympicGames = olympicGames;
     this.medals = medals;
} // made a subclass athlete for the person class,

Athlete5.prototype = Object.create(Person5.prototype);
// connnected them together with athlete prototype coping persons data into a new object
Athlete5.prototype.wonMedal = function (){
    this.medals++;
    console.log(this.medals);
} // Crated a prototype specificly for athlete subclass and it has to be under the object 

var johnAthlete5 = new Athlete5('John', 1990, 'swimmer', 3, 10);
console.log(johnAthlete5);// exapled a output

johnAthlete5.calculateAge();
johnAthlete5.wonMedal();//called the functions

*/
// ES 6
// Learning subclasses in es 6
/*
class Person6 {
    constructor(name, yearOfBirth, job){
       this.name = name;
       this.yearOfBirth = yearOfBirth;
       this.job = job;
    }
    calculateAge (){
        var age = new Date().getFullYear() - this.yearOfBirth;
        console.log(age);
    }
}

class Athlete6 extends Person6 {
    constructor(name, yearOfBirth, job, olympicGames, medals){
        super(name, yearOfBirth, job);
        this.olympicGames = olympicGames;
        this.medals = medals;
    }
    wonMedal(){
        this.medals++;
        console.log(this.medals);
    }
}

const johnAthlete6 = new Athlete6('John', 1990, 'swimmer', 3, 10);
console.log(johnAthlete6);

johnAthlete6.wonMedal();
johnAthlete6.calculateAge();*/


/*

Suppose that you're working in a small town administration, and you're in charge of two town elements:
1. Parks
2. Streets

It's a very small town, so right now there are only 3 parks and 4 streets. All parks and streets have a name and a build year.

At an end-of-year meeting, your boss wants a final report with the following:
1. Tree density of each park in the town (forumla: number of trees/park area)
2. Average age of each town's park (forumla: sum of all ages/number of parks)
3. The name of the park that has more than 1000 trees
4. Total and average length of the town's streets
5. Size classification of all streets: tiny/small/normal/big/huge. If the size is unknown, the default is normal

All the report data should be printed to the console.

HINT: Use some of the ES6 features: classes, subclasses, template strings, default parameters, maps, arrow functions, destructuring, etc.

*/

class Element {
    constructor(name, buildYear){
        this.name = name;
        this.buildYear = buildYear;
    }
}



class Park extends Element {
    constructor(name, buildYear, area, numTrees) {
        super(name, buildYear);
        this.area = area; //km2
        this.numTrees = numTrees;
    }
    
    treeDensity() {
        const density = this.numTrees / this.area;
        console.log(`${this.name} has a tree density of ${density} trees per square km.`);
    }
}


class Street extends Element {
    constructor(name, buildYear, length, size = 3){
    super(name, buildYear);
    this.length = length;
    this.size = size;
   }

   classifyStreet () {
       const classification = new Map();
       classification.set(1, 'tiny');
       classification.set(2, 'small');
       classification.set(3, 'normal');
       classification.set(4, 'big');
       classification.set(5, 'huge');
       console.log(`${this.name}, build in ${this.buildYear}, is a ${classification.get(this.size)} street`);
   }
}

const allParks = [new Park('Green', 1987, 0.2, 215),
                  new Park('National Park', 1894, 2.9, 3541),
                  new Park ('Oak Park', 1953, 0.4, 949)];

const allStreets = [new Street('Ocean Avenue', 1999, 1.1, 4),
                   new Street('Evergreen Street', 2008, 2.7, 2),
                   new Street('4th Street', 2015, 0.8),
                   new Street('Sunset Boulevard', 1982, 2.5, 5)];

function calc(arr) {
    // [3, 5, 6]
    const sum = arr.reduce((prev, cur, index) => prev + cur, 0)

    return [sum, sum / arr.length];
}

function reportParks(p) {
    console.log('-------------Parks Report---------------')

    // Density
         p.forEach(el => el.treeDensity());
    // Avrege age
    const ages = p.map(el => new Date().getFullYear() - el.buildYear);
    const [totalAge, avgAge] = calc(ages);
     console.log(`Our ${p.length} parks have an average of ${avgAge} years.`);
    // Wich park has more than 1000 tress
    const i = p.map(el => el.numTrees).findIndex(el => el >= 1000);
    console.log(`${p[i].name} has more than 1000 trees.`);
}


function reportStreets(s) {
  console.log('-----STREETS REPORT-----');
    
    //Total and average length of the town's streets
    const [totalLength, avgLength] = calc(s.map(el => el.length));
    console.log(`Our ${s.length} streets have a total length of ${totalLength} km, with an average of ${avgLength} km.`);
    
    // CLassify sizes
    s.forEach(el => el.classifyStreet());
}

reportParks(allParks);
reportStreets(allStreets);