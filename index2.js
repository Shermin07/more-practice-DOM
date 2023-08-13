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



