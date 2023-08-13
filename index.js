//   ID::

const listContainer = document.getElementById("list-ul");
//console.log(listContainer);
listContainer.style.backgroundColor = "tomato";
listContainer.style.color = "white";
// Class:::

const list = document.getElementsByClassName("item-1")[0];
//console.log(list);
list.style.color = "black";

// TagName:::

const heading = document.getElementsByTagName("h1");

heading.innerText = "hi";

// QuerySelector:::

const name1 = document.querySelector("#heading-two");
name1.innerText = "Queryselector";
name1.style.color = "red";
//console.log(name1);

//Queryselectorall:::

const names1 = document.querySelectorAll(".girl")[0];
names1.innerText = "jannat";
names1.style.color = "red";
//console.log(names);

const names = document.querySelectorAll(".girl")
for(const nam of names){
    nam.style.color = "tomato";
}

// getting text::
const div = document.querySelector("#my-div");
const text1 = div.innerText;
//console.log(text1);

//getting HTML:::
const html = document.getElementById("my-div");
//console.log(html);






