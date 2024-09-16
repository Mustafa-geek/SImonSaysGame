let userSeq = [];
let gameSeq = [];
let btns = ["pink","orange","yellow","green"];

let started = false;
let level = 0 ;
let h3 = document.querySelector('h3');

document.addEventListener("keypress",function(){
    if(started == false){   
        console.log("a button from keyboard was pressed");
        started = true;

        levelUp();
    }
});

function levelUp(){
    userSeq = [];         //this step is added at the last
    level++;
    h3.innerText = `Level ${level}`;

    //generating random color
    let ranIdx = Math.floor(Math.random() * 3); //4 colors ,indexing starts from 0
    let ranColor = btns[ranIdx];   //color at that index is stored 
    let ranBtn = document.querySelector(`.${ranColor}`);     //selecting the button which color we got .....here see how we are using .${rancolor}

    //pushing that color to gameSeq array
    gameSeq.push(ranColor);         //pushing ranColor not ranBtn cuz while comparing both the arrays later,it will create trouble
    console.log(gameSeq);
    btnFlash(ranBtn);
}

function btnFlash(ranBtn){
    ranBtn.classList.add('flash');
    setTimeout(function(){
        ranBtn.classList.remove('flash');
    },250);
}

                 //user pressing button


let allbtns = document.querySelectorAll('.button');
for(i of allbtns){
    i.addEventListener("click",btnPress)
}

function btnPress(){
    let btn = this;
    btnFlash(btn);   // jab user press karta button jab bhi btn flash hona bolke ye dalre 

    let userColor =  btn.getAttribute('id');     //this is important twist---watch out(we are not directly pushing button in array but instead we are taking its id and pushing it )
    userSeq.push(userColor);    //pushing button pressed by user in userSeq array

    check(userSeq.length-1);
}

                     //checking both arrays 

function check(idx){
    if(userSeq[idx] == gameSeq[idx]){  
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp,1500);
        }       
       
    }
    else{
        h3.innerHTML = `Game over! <br> Your score was ${level}  <br> press any key to start`;
        reset();
    }
}

function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}

