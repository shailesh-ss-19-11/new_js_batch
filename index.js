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
