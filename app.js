let gameSequence = [];
let userSequence = [];
let userColor;

let started = false;
let level = 0;
let h2 = document.querySelector("h2");
let btn = ["orange", "pink", "purple","green"];

document.addEventListener("keypress", function() {
    if (started == false) {
        console.log("Game Started");
        started = true;
        levelUp();
    }
});

function btnFlash(btnElement) {
    btnElement.classList.add("flash");
    setTimeout(function() {
        btnElement.classList.remove("flash");
    }, 250);
}

function levelUp() {
    userSequence=[];
    level++;
    h2.innerText = `Level ${level}`;
    
    let radindx = Math.floor(Math.random() * 4); 
    let radColor = btn[radindx];
 
    let radBtn = document.querySelector(`.${radColor}`);
    
    gameSequence.push(radColor);
    console.log(gameSequence);
    btnFlash(radBtn);
}
function checkAns(indx){
  
    if(gameSequence[indx]==userSequence[indx]){
      if(userSequence.length==gameSequence.length){
            setTimeout(levelUp,1000);
      }
        
    }
    else{
        h2.innerHTML=`Game Over!<b>your score is ${level} </b> <br>press any key to start again`;
        reset();
    }


}

function btnPress(){
    let btn=this;
    btnFlash(btn);
    userColor=btn.getAttribute("id");
    userSequence.push(userColor);
    console.log(userSequence);

    checkAns(userSequence.length-1);

};

let allBtns=document.querySelectorAll(".btn");
for(let btn of allBtns){
    btn.addEventListener("click",btnPress);
}

function reset(){
    started=false;
    level=0;
    gameSequence=[];
    userSequence=[];
}




