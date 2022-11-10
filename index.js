// getElementById
// getElementByClassName
// getElementByTagName
// querselector 
// querySelectorAll


// getElementById ////////////////////////////////////////////////////////??@@@@@@@@@@@
// const element = document.getElementById("main-heading");
// element.id = "main-heading-1"
// element.innerHTML = "hello pallavi"
// element.innerText = "hello sagar"
// element.style.backgroundColor = "#000"
// element.style.color = "#fff"
// console.log(element);
// console.dir(element);

// getElementByClassName//////////////////////////////////////////////////////////////
// classname return html HTMLAllCollection
// const element = document.getElementsByClassName("heading")
// element[0].style.color = "green"
// element[0].style.fontWeight = "bolder"
// console.log(element[0]);

// getElementByTagName/////////////////////////////////////////////////////////////////
// tagname return HTMLAllCollection

// const element = document.getElementsByTagName("h1");
// console.log(element);


// for (const ele of element) {
//     console.log(ele)
// }

// for (const ele in element) {
//     console.log(element[ele])
// }

// element.forEach(ele => {
//     console.log(ele)
// });




// for(let ele = 0; ele<element.length ;ele++){
//  console.log(element[ele]);
//  if(element[ele].id != "middle-heading"){
//     element[ele].style.background = "red"
//     element[ele].style.color = "green"
//  }
// }

// const list = document.getElementsByTagName("li");

// console.log(list);
// for (let li = 0; li < list.length; li++) {
//         if(list[li].innerHTML == "3items" || list[li].innerHTML == "2items"){
//             list[li].style.display = "none"
//         }
// }

// querselector 
/////////////////////////////////////////////////////////////////////////////////////////////////////
// class is denoted by (.)
// id is denoted by (#)
// element 
// using class @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// const element = document.querySelector(".heading");
// console.log(element);

// using ID @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// const element = document.querySelector("#main-heading")
// console.log(element)

// using element @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// const element = document.querySelector("p");
// console.dir(element.innerText = "nothing special")

// use querySelectorAll //////////////////////////////////////////////////////////////////
// it returns nodelist 
// we can use all type of loops in this 

// const element = document.querySelectorAll("p");

// type of object as array 
// itarate 
// length
//iterate using for loop /////////////////////////////////////////////////
// for (let ele = 0; ele < element.length; ele++) {
//     if(element[ele].innerText.includes("shailesh")){
//         element[ele].innerText = "hello pranali";
//         console.log("yes",ele);
//     }
// }

// using forEach 
// element.forEach(e => {
//     console.dir(e);
// });

// using For Of loop 
// for (let ele of element) {
//     console.log(ele);
// }

// using For In loop 

// for (let ele in element) {
//     if(element[ele].innerText.includes("shailesh")){
//         element[ele].innerText = "hello xyz"   
//     }
// }

// function collectdata(){
//     const data = document.getElementById("inputtodo")
//     console.log(data.value);
//     const element = document.querySelector("ul")
//     element.innerHTML += `<li>${data.value}</li>`
// }

// class list ///////////////////////////////////////////////////////////////////////////////////////
// const classlistelement = document.querySelector(".container");
// console.dir(classlistelement.classList)
// classlistelement.classList.remove("container")
// classlistelement.classList.remove("container-font")
// classlistelement.classList.add("bg-dark");


// function lightmode (){
//     const element = document.querySelector("body");
//     element.classList.remove("dark");
//     element.classList.add("light");

//     const lightmode = document.querySelector(".lightmode")
//     lightmode.classList.add("hide");
    
//     const darkmode = document.querySelector(".darkmode")
//     darkmode.classList.remove("hide");
// }

// function darkmode(){
//     const element = document.querySelector("body");
//     element.classList.remove("light");
//     element.classList.add("dark");

//     const lightmode = document.querySelector(".lightmode")
//     lightmode.classList.remove("hide");

//     const darkmode = document.querySelector(".darkmode")
//     darkmode.classList.add("hide");
// }

// DOM tree /////////////////////////////////////////////////////////////////////////@@@@@@@@@@@@@@@@@@@@
// return NodeList 

// const rootNode = document.getRootNode();        //document 
// const htmlElement = rootNode.childNodes[0];     //0th index par htmlelement
// console.dir(htmlElement);

// const headElement = htmlElement.childNodes[0];
// const bodyElement = htmlElement.childNodes[2];
// console.log(headElement);
// console.log(bodyElement);

// const elementOfBody = bodyElement.childNodes[1];
// const sibling = elementOfBody.nextSibling.nextSibling.nextSibling.nextSibling;
// console.log(sibling);

// function mousehover(){
//     const ul = document.querySelector("ul");
//     ul.classList.add("bg-red");
//     alert("you have hover a mouse on me")
// }

//  add addEventListener//////////////////////////////////////////////////////////////////

// const ul = document.querySelector("ul");
// console.dir(ul);
// ul.addEventListener("click",function(){
//     const ul = document.querySelector("ul");
//     ul.classList.add("bg-red");
//     alert("hello")
// })

// createElement ./////////////////////////////////////////////////////////////////////////////////
// its a method to add element in the dom 
// append

// const newtodoItem = document.createElement("li");
// newtodoItem.textContent = "new item added" ;
// const ul = document.querySelector("ul");
// ul.append(newtodoItem);

// prepend 

// const newtodoItem = document.createElement("li");
// newtodoItem.textContent = "new item added" ;
// const ul1 = document.querySelector("ul");
// ul1.prepend(newtodoItem);

// const newtodoItem = document.createElement("li");
// newtodoItem.textContent = "new item added" ;
// const ul2 = document.querySelector("ul");
// ul2.remove(newtodoItem);


// inserAdjecentHTML ./////////////////////////////////////////////////////////////////////////////////

// beforeend
// afterend
// beforebegin
// afterbegin

// const ul = document.querySelector("ul");
// ul.insertAdjacentHTML("beforeend","<li>pranita added</li>")


// const test=()=>{
//     alert("span clicked");
// }

// const getdata=(event)=>{
//     alert("hello");
// }


// async ///////////////////////////////////////////////////////////////////////////////

// setTimeout(()=>{
//     console.log("hello world");
// },1000)


// // console.log("hello world");
// console.log("async");

// API ----------------------------------Api Programming Interface
//  api in the form of URL 
// example htpps://www.google.com is the URL

// http Request 

// methods 4
// GET  -----------------for get the data from backend
// POST ---------------- sending the data into backend
// PUT ----------------- sending the updated data into backend
// PATCH ----------------- sending the updated data into backend
// DELETE ----------------- delete the data from backend

// const APIENDPOINT ="https://jsonplaceholder.typicode.com/posts";

// fetch(APIENDPOINT).then((response)=>{
//     return response.json()
// }).then((response_data)=>{
//     console.log(response_data);
// })
