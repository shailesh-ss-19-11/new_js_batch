// console.log("hello world");
// data type  
// String   ----->"my name is shailesh"
// Number   -----> 123456
// Boolean  -----> true/ false
// undefined-----> no value
// NaN      -----> not a number
// null     -----> nothing /empty

// typeof variables
// const -----> only define once can't change value  
// let   -----> local variable ----perticular scope
// var   -----> globle variables ---- no scope


// const name = "shailesh";
// console.log(name);
// const age = 23;
// console.log(age);

// var name ="shailesh"
// console.log(name);

// name = "anil"
// console.log(name);


// operators 
// special Symbol which is use for perform operations 

// type of operators 
// arithmatic  --------------> (+ - / * %)
// assignment operators------> = += -=    a+=3-----> a=a+3
// logical operators   ------> && || !
// conditional operators --- >relational operators ------> (< > <= >= == === !=)
// inc/dec operators   ------> ++ -- 
// ternary operator    ------> statement ? true : false 

// let a=10, b=20;

// arithmatic operators
// console.log(a+b);
// console.log(a-b);
// console.log(a*b);
// console.log(a/b);
// console.log(a%b);

// assignment operators 
// console.log(a+=2)
// console.log(a-=20)
// console.log(a=300)

// logical operators 
// let a=10, b=20;
// && ----------- >  both expression true hai to true otherwise false
    // if(true && true)----------> true
    // if(true && false)----------> false
    // if(false && true)----------> false
    // if(false && false)----------> false

    // console.log(a < b && a == b ) //false
    // console.log(a < b && a == b ) //false
    // console.log(a == b && a != b ) //false
    // console.log(a < b && a != b ) //true

// || ----------- >  both expression false hai to false otherwise true
    // if(true || true)----------> true
    // if(true || false)----------> true
    // if(false || true)----------> true
    // if(false || false)----------> false

    // console.log(a < b || a == b ) //true
    // console.log(a == b || a != b ) //true
    // console.log(a < b || a != b ) //true
    // console.log(a > b || a == b ) //false


// !  ----------- >  inverse karega true- false
    // if(true)----------> false
    // if(false)----------> true

    // console.log(!true)
    // console.log(!false)

    // let a=10, b=20;


// conditional and relational operators 

// console.log(a<b);   //true
// console.log(a>b);   //false
// console.log(a!=b);   //true
// console.log(a==b);   //false
// console.log(a===b);  //false ----equality and data type check krega
// console.log(a<=b);   //true
// console.log(a>=b);   //false

// ternary operator 
// let a=10, b="10";    //number
// console.log(a===b)
// ternary operator    ------> statement ? true : false 

// a<b || a>=b ? console.log("ha greater hai") : console.log("ha less hai") 

// const name = "shailesh"     //define initialize and declare

// string ////////////////////////////////////////////////////////////////////////////////////////////
// collection of chars of data string is class

// const first_name ="shailesh"
// const mid_name = "manoj"
// const last_name ="Gokhale"
// let fullname =""
// let len_of_name = name.length
// console.log(len_of_name);

// let nickname = name.slice(0,5)
// console.log(nickname);

// const splitted_name = name.split("l")
// console.log(splitted_name[0]);           // it will return array 
// console.log(splitted_name[1]);           // it will return array 


// concatination  of string  /////////////////////////////////////////////////////////////////
// fullname = first_name.concat(last_name)
// console.log(fullname);

// fullname = first_name+" "+mid_name+" "+last_name
// console.log(fullname);
// console.log(String.prototype)

// capital or small 
// const name = "shailesh"
// console.log(name.toUpperCase())
// console.log(name.toLowerCase())

// let name = "shailesh"
// console.log(name.length);
// for(let i=0;i<name.length;i++)
// {
//     if(name[i]=="s"){
//         console.log(i);
//     }
// }

// Array ///////////////////////////////////////////////////////////////////////////////////////////////
// array is collection of similar type of data  ------>  array is the collection of mixture of data

// let fruits = ["mango","apple","grapes","watermelon","lemon"];
// console.log(fruits)
// console.log(Array.isArray(fruits))  

// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits.slice(-1));

// fruits.unshift("custoredApple");
// console.log(fruits)

// fruits.push("strawberry");
// console.log(fruits)

// popped_element= fruits.pop();
// console.log(popped_element);
// console.log(fruits)

// shifted_element = fruits.shift();
// console.log(shifted_element)

// for(let i=0 ; i< fruits.length ;i++){
//     // console.log(fruits[i])
//     if(fruits[i]=="apple"){
//         console.log(`${fruits[i]} color is red and position of ${fruits[i]} in array is ${i}`);
//         console.log(fruits[i]+" "+ "color is red and position of apple in array is "+""+ i );
//     }
// }


// clone array //////////////////////////////////////////////////////////////////
// let arr1 = ["item1","item2"];

// pahla tarika 
// let arr2 = arr1.slice(0).concat("item3","item4",["arritem1","arritem2"]);

// dusra tarika 
// let arr2 = ["item"].concat(arr1).concat("item4");

// tisra tarika (recommended), ES6
// let arr2 = [...arr1,"item3","item4","item5",1,2,3,4,5,6]

// console.log(arr2);
// console.log(arr1==arr3);

// function /////////////////////////////////////////////////////////////////////
// 1st way of define function 
// function call_my_name(){
//     console.log("hello shailesh")
// }
// call_my_name();


// 2st way of define function(expressive function)
// const call_my_name = function(){
//     console.log("hello shailesh");
// }
// call_my_name();


// 3rd way of define function(arrow function) (ES6 ,recommend)
// const call_my_name = () =>{
//     console.log("hello shailesh");
// }
// call_my_name();

// function with parameters ///////////////////////////////////////////////////////////
// function call_my_name(name,age){
//     console.log(`my name is ${name} and age is ${age}`);
// }
// call_my_name("pranali",20)

// const call_my_name = function(name,age){
//     console.log(`my name is ${name} and age is ${age}`);
// }
// call_my_name("pranali",20)

// const call_my_name = (name,age) =>{
//     console.log(`my name is ${name} and age is ${age}`);
// }
// call_my_name("pranali",20)

// with single parameter 
// const call_my_name = name => name
// console.log(call_my_name("pranali"));

// function return ////////////////////////////////////////////////////////////////////
// function is18(age){       //as a variable 
//     // console.log()
//     return age>=18
// }
// console.log(is18(10))

// const is18 = function(age){
//     return age>=18
// }
// console.log(is18(10))

// const is18 =(age) =>{
//     return age>18
// }
// console.log(is18(20))

// const is18 = age => age>18
// console.log(is18(20))

// conditional statements //////////////////////////////////////////////////////////////
// if 
// if-else 
// if-else-if 
// switch
// let i=10

// if(i==20){
//     console.log("will execute")
// }

// if(i<10){
//     console.log("yes,it is true");
// }
// else{
//     console.log("no,it is false");

// }

// age<20 ===movie ticket 100
// 21<age<30 ===movie ticket 200
// 31<age<45 ===movie ticket 300
// 46<age<65 ===movie ticket 100
// let age = 45
// if(age<20){
//     console.log("movie ticket 100");
// }
// else if(21<age>30) {
//     console.log("movie ticket 200");
// }
// else if(31<age<45){
//     console.log("movie ticket 300");
// }
// else if(46<age>65){
//     console.log("movie ticket 300");
// }
// else {
//     console.log("you are not to buy");
// }

// let number = 1;
// switch (number) {
//     case 1:
//         console.log("one")
//         break;
//     case 2:
//         console.log("two")
//         break;
//     case 3:
//         console.log("three")
//         break;
//     default:
//         console.log("you have wrong choice")
//         break;
// } 

// for(let i=0 ; i<10 ; i++){
//     console.log("shailesh")
// }

// let i=0;
// while(i<10){
//     console.log("shailesh")
//     i++;
// }

// let i=0
// do{
//     console.log("shailesh")
//     i++
// }while(i<10)


// let fruits = ["mango","apple","grapes","watermelon","lemon"];

// for(let i=0 ; i<fruits.length ;i++){
//         console.log(fruits[i])
//     }
    
// for in loop /////////////////////////////////////////////////////////////////
// for(let i in fruits ){
//     console.log(fruits[i])
// }
    
// for of loop /////////////////////////////////////////////////////////////////
// for(let fruit of fruits ){
//     console.log(fruit)
// }

// fruits.forEach(function(fruit){
//     console.log(fruit)
// })

// fruits.forEach((fruit)=>console.log(fruit));

// function as parameter  ////////////////////////////////////////////////////////////////////
// function calleveryone(){
//     console.log("sonali","pranita","prachi","rutika")
// }

// function printmyname(evryone){
//     evryone();
// }

// printmyname(calleveryone);
// 2nd way //////////////////////////////////////////////////

// let treename = function(){
//     console.log("oak tree");
// }

// function tree(tree_name){
//     tree_name()
// }
// tree(treename)

// Anonymous function ////////////////////////////////////////////////////////////////////////

// function tree(tree_name){
//     tree_name();
// }
// tree(function(){
//     console.log("oak tree")
// })

// function tree(tree_name){
//     tree_name();
// }
// tree(()=>{console.log("oak tree")})



// forEach method /////////////////////////////////////////////////////////////////////////
// let fruits = ["mango","apple","grapes","watermelon","lemon"];

// fruits.forEach((item)=>{
//     if(item =="apple"){
//         console.log(item);
//     }
// })

// const arr_of_number = [1,2,3,4,5,6,7,8,9,0]
// arr_of_number.forEach((num)=>{
//     if(num%2==0){
//         console.log(num)
//     }
// })

// map method /////////////////////////////////////////////////////////////////////////

// const numbers = [1,2,3,4,5,6,7,8,9]

// numbers.map((n)=>{
//     console.log(n*n)
// })

// const square = function(number){
//     console.log(number*number)
// }

// function square(number){
//     console.log(number*number);
// }

// numbers.map(square);































// const URL = "https://jsonplaceholder.typicode.com/posts"
// fetch(URL).then((response)=> response.json()).
// then((data)=> {
//     data.forEach(element => {
//         // console.log(element)
//         var title = element.title 
//         var description = element.body 
//         var id = element.userId 
//     });
// })


