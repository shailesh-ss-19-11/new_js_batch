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

const URL = "https://jsonplaceholder.typicode.com/posts"
fetch(URL).then((response)=> response.json()).
then((data)=> {
    data.forEach(element => {
        // console.log(element)
        var title = element.title 
        var description = element.body 
        var id = element.userId 
    });
})



