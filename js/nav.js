let panelOpen = false;
const nickChange = document.querySelector('#nickChange');
const scoreList = document.querySelector('#scoreList');
const restartGame = document.querySelector('#restartGame');


//btn
const navBtn=document.querySelector(".navBtn");
const btn=Array.from(document.querySelectorAll(".navBtn span"));

const buttonChange = gsap.timeline({paused:true})
buttonChange.to(btn[0], 0.5, {opacity: 0})
.addLabel("opacity")
.to(btn[1], 0.5, {opacity: 1},"opacity")
.to(btn[2], 0.5, {opacity: 1},"opacity")
.addLabel("color")
.to(btn,0.5,{backgroundColor: "black"}, "color")
.to(navBtn,0.5,{borderColor: "black"}, "color")

//nav
const navh1=document.querySelector(".navH1");

const head=document.querySelector("header");
const panel=document.querySelector(".nav");
const panelItems=Array.from(document.querySelectorAll(".nav_item"));

const eject = gsap.timeline({paused:true});
eject.to(panel,0.5,{backgroundColor: "#49548C"})
.set(head,{zIndex: 2})
.to(panel,0.7,{height: "100%"})
.to(panelItems,0.5,{y:0, opacity:1})


const open = ()=>{
    if(VAR.preventDefault==true) return;
    VAR.preventDefaultHelper=false;
    optionPrepare();
    VAR.scoreCounter.style.display="none";
    buttonChange.play()
    eject.play()
    navh1.innerHTML="Panel"
    panelOpen=true;
}
const close = ()=>{
    if(VAR.preventDefault==true) return;
    VAR.scoreCounter.style.display="block";
    buttonChange.reverse();
    eject.reverse()
    navh1.innerHTML="Score:"
    panelOpen=false;
    setTimeout(function(){
        VAR.preventDefaultHelper=true;
    },2000)
}

navBtn.addEventListener("click",()=>{
    if(panelOpen==false){
        open();
    }else{
        close()
    }
})


function optionPrepare(){
    nickChange.addEventListener("click", ()=>{
        close();
        setTimeout(()=>{
            nickName();
        },1000)
    })
    
    scoreList.addEventListener("click", ()=>{
        close();
        setTimeout(()=>{
            showScores()
        },1000)
    })
    restartGame.addEventListener("click", ()=>{
        reload();
    })
}

