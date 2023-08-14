//2:::
function makeGreen(){
    document.body.style.backgroundColor = "green";
}

//3::::
const btnBlue = document.getElementById("btn-blue");
btnBlue.onclick = buttonBlue

function buttonBlue(){
    document.body.style.backgroundColor = "blue";
}
//4::::
const btnBlack = document.getElementById("btn-black");
btnBlack.onclick = function buttonBlack(){
    document.body.style.backgroundColor = "black";
}

// addeventlistener:::  1

const btnPurple = document.getElementById("btn-purple");
btnPurple.addEventListener('click',makePurple );
function makePurple(){
    document.body.style.backgroundColor = "purple";
}

// 2:::
const btnPink = document.getElementById("btn-pink");
btnPink.addEventListener('click',function makePurple(){
    document.body.style.backgroundColor = "pink";
} );

// 3:::

document.getElementById("btn-grey").addEventListener('click', function makeGrey(){
    document.body.style.backgroundColor = "grey";
})

//button press and paragraph change-->

//document.getElementById("btn-one").addEventListener('click', function(){
    //const p = document.getElementById("para");
   // p.innerText = "I am trying to do something";

//})

// button press and input likhle and para change::::
document.getElementById("btn-one").addEventListener('click', function(){
   
    const input1 = document.getElementById("input-one");
    const inputText = input1.value;

    const p1 = document.getElementById("para");
    p1.innerText = inputText;
    input1.value = " ";
})

//  button press and and textarea writting para add  :::

document.getElementById("btn-fishy").addEventListener('click',function(){

    const textArea = document.getElementById("text-area");
    const area = textArea.value;

    const div1 = document.getElementById("fishy-div");

    const p = document.createElement('p');
    p.innerText = area;

    div1.appendChild(p);

    textArea.value = " ";


})


