// console.log("hello");

// types of variable in JS 

// string =="hello "
// number = 1234567
// Boolean  = true and false 

// var = globle variable  
// let = we can use it as instant variable work as local variable
// const is constant --- we cant change its value 

// var name = "shailesh";
// var age ="23" ;
// console.log( `my name is ${name} and my age is ${age}`);

// name = "manoj"; //var ki value redefine kr skte hai
// console.log(name);

// const name ="shailesh";
// const age = 23;
// console.log(name,age);

// name="manoj";
// console.log(name);

// let name= "shailesh";    // introduce in ES6
// console.log(name);

// const myinfo = {        //key:values
//             name:"shailesh",
//             age:23,
//             city:"nagpur",
//             proffession:"software engineer"
//         }  

// console.log(myinfo.name);
// console.log(myinfo.age);
// console.log(myinfo.city);
// console.log(myinfo.proffession);

// operators  



// arithmatic operators   -------------   +-*/%
// const num1=20,num2=20
// console.log(1+2);
// console.log(num1+num2);
// console.log(num1-num2);
// console.log(num1/num2);
// console.log(num1*num2);
// console.log(num1%num2);

// logical operators      ------------  && || !
// && ----  when both conditions are true it will return true otherwise false 
// || ----  when both conditions are false it will return false otherwise true
// !------- inverse the operations 
// const num1=20, num2=20;
// const value= false;
// console.log(num1<=num2  && num1>=num2);
// console.log(num1<=num2  || num1>num2);
// console.log(!value);



// conditional operators  ------------- < > == <= >=
//  const num1=20,num2=20
//  console.log(num1>num2);   
//  console.log(num1<num2);
//  console.log(num1>=num2); 
//  console.log(num1<=num2);   
//  console.log(num1===num2);   

// ternary operators 
// let number=20 ; 
// // const name= "shail";
// // //    condition   ? if true execute this   : if false execute this 
//     number==21  ? 
//       console.log(true) : 
//       console.log(false);
    

// let name="shailesh";
// // kya name string hai  ?  yes print karo   : no print karo 
// (typeof name)=="string" ? console.log("yes")  : console.log("no");

// if-else 

// const name="520"
// if(typeof name == "string"){
//     console.log("it is string")
// }
// else{
//     console.log("this is not string")

// }

// for loop 

//loops iterations of work krne ke liye use krte hai 
let n=10;
for(let i=1 ; i<=n; i++){
   if(i<10){
      console.log(i+1);
   }
   else if(i==10){
      // i=1;
      console.log((i+1)-n);
   }
}

// 2 3 4 5 6 7 8 9 10 1