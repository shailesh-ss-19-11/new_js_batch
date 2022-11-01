// document ek object hai html ka jisme hamko pura html milta hai
// console.log(document);
console.dir(document);

const hello = document.getElementById("hello")
// console.log(hello);
// console.dir(hello);
hello.style.backgroundColor = "red";

function hide(){
    hello.style.display ="none";
}


function show(){
    hello.style.display ="";
}