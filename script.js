//! Step 1:- Creating a Html Element

//? Syntax:- let/const variablename = document.createElement("HtmlTag")

//!  Step 2:- Adding the content

//? Syntax:-  variablename.inneHTML/innerText = "Content"

//! Step 3:- Adding Attributes

//? Syntax:- variablename.setAttribute("Attribute Name","Attribute Value")

//! Step 4:- Appending Elements

//? Syntax:-  document.body/variablename1 .append("variablename")

//* Session Task

/*
//! Create Part

const heading = document.createElement("h1");
const heading1 = document.createElement("h1");
const header = document.createElement("header");
const navigation = document.createElement("nav");
const order = document.createElement("ul");
const list = document.createElement("li");
const list1 = document.createElement("li");
const list2 = document.createElement("li");
const main = document.createElement("main");
const section = document.createElement("section");

//! Content Part

heading.innerHTML = "<b> Create Elements Task </b>";
heading1.innerHTML = "Above Details Are Created Using Dom";
list.innerHTML = "John Doe";
list1.innerHTML = "Chennai";
list2.innerHTML = "15";

//! Attribute Part

header.classList.add("text-center", "bg-purple-500", "text-3xl");
heading.setAttribute("class", "head");
heading1.setAttribute("class", "head");
order.setAttribute(
  "style",
  "display:flex; justify-content:space-evenly; align-items:center; gap:20px; font-size:2rem"
);
list.setAttribute("style", "list-style:none;color:aqua");
list1.setAttribute("style", "list-style:none;color:aqua");
list2.setAttribute("style", "list-style:none;color:aqua");

//! Append Part
order.append(list, list1, list2);
navigation.appendChild(order);
header.appendChild(navigation);
section.appendChild(heading1);
main.appendChild(section);
document.body.append(heading, header, main);
*/


//! Creating Multiple Elements Dynamically
/*
function dynamic(tagname,content,attrname,attrvalue){
   const ele = document.createElement(tagname);
   ele.innerHTML= content;
   ele.setAttribute(attrname,attrvalue)
   return ele;
}

const heading = dynamic("h1","Create Elements Task","class","head");
const heading1 = dynamic("h1","Above Elements Created Dynamically Using Functions","class","head");
const header = dynamic("header","","class","header");
const navigation = dynamic("nav","","class","nav");
const order = dynamic("ul","","style","display:flex; justify-content:space-between; align-items:center; gap:20px; font-size:2rem");
const list = dynamic("li","John Doe","style","list-style:none;color:aqua");
const list1 = dynamic("li","Chennai","style","list-style:none;color:aqua");
const list2 = dynamic("li","15","style","list-style:none;color:aqua");
const main = dynamic("main",'','class','container');
const section =dynamic("section","","class","container")  
order.append(list, list1, list2);
navigation.appendChild(order);
header.appendChild(navigation);
section.appendChild(heading1);
main.appendChild(section);
document.body.append(heading, header, main);

*/