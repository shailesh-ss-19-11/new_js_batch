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
// console.log(element);

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
//     console.log(element[ele]);
// }

// function collectdata(){
//     const data = document.getElementById("inputtodo")
//     console.log(data.value);
//     const element = document.querySelector("ul")
//     element.innerHTML += `<li>${data.value}</li>`
// }
