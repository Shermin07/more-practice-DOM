// 1:::
const output1 = document.getElementsByClassName("grand-parents");
//console.log(output1);

// or:: getting immediate children::

const parent = document.querySelector(".grand-parents");
const children = parent.children;
//console.log(children);

// getting far far children:::
const parent1 = document.querySelector(".grand-parents");
const children1 = document.querySelectorAll(".child-3");
//console.log(children1);


// getting parents from children:::::
const children3 = document.querySelector(".child-2");
const parent3 = children3.parentElement.parentElement;
//console.log(parent3);

// getting jump parent:::

const children4 = document.querySelector(".child-6");
const parent4 = children4.closest(".grand-parents");
console.log(parent4);







´l