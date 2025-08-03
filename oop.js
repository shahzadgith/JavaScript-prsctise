// // // // // // // // // let x= 23;
// // // // // // // // // let y = 22;
// // // // // // // // // y = x+y
// // // // // // // // // console.log(y);
// // // // // // // // console.log("my name is shahzad");
// // // // // // // let name;
// // // // // // // console.log(name);

// // // // // // // let 1num='ali';
// // // // // // // console.log(1num);
// // // // // // // as result we get the error
// // // // // // let num1 = 'ali';
// // // // // // console.log(num1);
// // // // // // let intrestRate=12;
// // // // // // // intrestRate=1;
// // // // // // console.log(intrestRate);
// // // // // var intrestRate=12;
// // // // // intrestRate=1;
// // // // // console.log(intrestRate);

// // // // // There are two type of value => permitive and Refrence type

// // // // // type of permitive value:-

// // // // // String=>  'shahzas'
// // // // // Number=> 30 
// // // // // Boolean=> True/False
// // // // // undefined=> if not give any value to the variable(let firstName;)
// // // // // null=> if we select the one color and in future we chane it and not mention the other than we put the as null for timelly


// // // // JavaScrpt is the daynamic language
// // // // in js we can change during the runtime value 
// // // // let x= 'shahzas';
// // // // console.log(typeof(x));
// // // // let x = 39;
// // // // console.log(typeof(x));
// // // // let y= 'shahzas';
// // // // console.log(typeof(y));

// // // // What is object ??

// // // // Objects are the fundamental data structure in JavaScript used to store collections of data and more complex entities. They are one of JavaScript's primitive data types and form the building blocks for the language's object-oriented capabilities.

// // let person={
// //     name:'shahzad',
// //     age:30,
// //     address:'phool Nagar',
// //     education:'Computer Science'
// // }
// // // console.log('This is my detail', person);

// // // // change the name 

// // // person.name='Raza'
// // // console.log('Please change my name', person.name);
// // // console.log('Education of shahzad Raza is ', person.education);
// // // console.log('i am living in', person.address);

// // // // We can also change the name by the other methode 


// // // person['age'] = 20;
// // // console.log('my currently age is ' , person.age);

// // // What is array ..?

// // // An array in JavaScript is an ordered, indexed collection of values that can hold any data type (numbers, strings, objects, even other arrays). Arrays are mutable (modifiable) and zero-indexed (first element at index 0).

// // Example:--

// let selectedFruit = ['apple', 'grapes', 'mango'];
// // selectedFruit=[2].karala
// // selectedFruit.push('karala') it used one more item at the last
// // selectedFruit.shift();'it is used for the remove of one element from the started'
// // console.log(selectedFruit);

// // Add one more array to each other  :"concat":
// let selectinstrument=['knife','bottle','chain']
// // console.log(selectedFruit.concat(selectedFruit));

// // Slice of array
// // console.log(selectinstrument.slice(0,1));

// // Splice of array 
// // console.log(selectedFruit.splice( 1, 'shahzad,raza'));

// // For include=> it is used to chechk that item is present in object 
// console.log(selectedFruit.includes('apple'));
// console.log(selectedFruit.indexOf('mango'));

// // in array we can add one or more permitive value type ....--

{/* < Functionin javaScript///>  */}

// Functions are reusable blocks of code that perform a specific task. They are fundamental in JavaScript and support multiple paradigms (procedural, object-oriented, functional).

// if we went block of code use many time than we use the function 

// function store(price) {
//     console.log("this " +   price  +   "for the salt");
//     console.log("this " + price   + "for the sand");
//     console.log("this " + price   + "for the milk");
// }
// store(120)
// store(190)
// function sum(a,b) {
//     console.log(a+b);
    
// }
// sum(9,9)
// sum("helwy2`lo my", "darliwuywgwng")
// return key in function is used for give the back value 
function sum(a,b) {
    // console.log(a+b);
    return a+b
}
result1 = sum(7,81)
result2 = sum(17,8)
result3 = sum(72,8)
result4 = sum(71,8)
console.log("The sum of the number is" , result1);
console.log("The sum of the number is" , result2);
console.log("The sum of the number is" , result3);
console.log("The sum of the number is" , result4);

function sum(a,b, c=12) {
    // console.log(a+b);
    return a+b+c
}
result1 = sum(7,81)
result2 = sum(17,8)
result3 = sum(72,8)
result4 = sum(71,8)
console.log("The sum of the number is" , result1);
console.log("The sum of the number is" , result2);
console.log("The sum of the number is" , result3);
console.log("The sum of the number is" , result4);