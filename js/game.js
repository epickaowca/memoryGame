window.onload=nickName;
const VAR={
    i: 1,
    nums: randNums(),
    cards:Array.from(document.querySelectorAll(".container_box_card")),
    box: Array.from(document.querySelectorAll(".container_box")),
    which: 1,
    preventDefault: false,
    preventDefaultHelper: false,
    score: 0,
    scoreAdd: 1400,
    nickInput: document.querySelector(".nick"),
    boxContainer: document.querySelector(".container"),
    header: document.querySelector("header"),
    nickHandler: "",
    scoreDisplayer: document.querySelector(".score"),
    results: document.querySelector(".scoreResult_wyniki"),
    relustsContainer: document.querySelector(".scoreResult"),
    leftCards: 12,
    closingCredits: document.querySelector(".closingCredits"),
    scoreCounter: document.querySelector(".score"),
}

const mask = gsap.timeline({paused:true});
mask.set(".mask", {display: "block"})
.to(".mask", 0.5, {opacity: 1});

function randNums(){
    const arr=[];
    for(let i=0; i<12; i++){
        let temp = Math.floor(Math.random()*12);
        if(arr.indexOf(temp) == -1){
            arr.push(temp);
        }else{
            i--
        }
    }
    return arr;
}

for(let i=0; i<12; i++){
    VAR.cards[VAR.nums[i]].style.background=`url(../img/img${VAR.i}.png)`;
    VAR.i++;
    if(VAR.i==7)VAR.i=1;
}

let card1;

VAR.box.forEach(e=>{
    e.addEventListener("click", function(){ 
        if(VAR.which==false) return;
        if(VAR.preventDefault==true) return;
        
 
        if(VAR.which==1){
            //first card
            VAR.score+=VAR.scoreAdd;
            VAR.scoreDisplayer.innerHTML=VAR.score;
            card1=e.children[0]
            e.style.transform = "rotateY(180deg)";
            VAR.which=2;
        }else if(VAR.which==2){
            //second card
            if(e.children[0]==card1) return;
            
            VAR.score+=VAR.scoreAdd;
            VAR.scoreDisplayer.innerHTML=VAR.score;
            e.style.transform = "rotateY(180deg)";
            VAR.which=false;
            if(e.children[0].style.backgroundImage==card1.style.backgroundImage){
                //if same cards
                VAR.score+=VAR.scoreAdd;
                VAR.scoreDisplayer.innerHTML=VAR.score;
                setTimeout(function(){
                    VAR.which=1;
                },200)
                e.style.visibility="hidden";
                card1.parentElement.style.visibility="hidden";
                VAR.leftCards-=2;
                //end game
                if(VAR.leftCards==0){
                    writeData();
                    setTimeout(function(){
                        VAR.closingCredits.style.display="block";
                        mask.play();
                    },1000)
                }
                
            }else{
                //if not same cards
                VAR.score-=VAR.scoreAdd;
                VAR.score-=VAR.scoreAdd;
                VAR.score-=VAR.scoreAdd;
                VAR.scoreDisplayer.innerHTML=VAR.score;
                setTimeout(function(){
                    e.style.transform=""
                    card1.parentElement.style.transform=""
                    VAR.which=1;
                },600)
            }
        }
        
     });
})


function nickName(e){
        if(e=="e"){
            //after submit
            VAR.nickHandler=VAR.nickInput.children[1].value;
            if(VAR.nickHandler==""){
                alert("fill you'r name")
            }
            // else if(VAR.nickHandler.length>){    
            // }
            else{
                VAR.nickInput.style.display="none"
                mask.reverse();
                VAR.preventDefault=false;
            }
        }else{
            if(VAR.preventDefaultHelper==true) return;
            VAR.preventDefault=true;
            VAR.nickInput.style.display="block";
            mask.play();
        }
    }
    
    
function showScores(){
        if(VAR.preventDefaultHelper==true) return;
        VAR.preventDefault=true;
        readData();
        VAR.relustsContainer.style.display="block";
        mask.play();
    }
    
function closeScores(){
        VAR.relustsContainer.style.display="none";
        mask.reverse();
        VAR.preventDefault=false;
    }
    
    
function reload(){
        if(VAR.preventDefaultHelper==true) return;
    location.reload();
}




//backend


