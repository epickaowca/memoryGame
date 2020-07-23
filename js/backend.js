
    const firebaseConfig = {
        apiKey: "AIzaSyBgqrnCF_AdsmKRf1OaRkPpRzJ6CNKk484",
        authDomain: "memorygame-1b04d.firebaseapp.com",
        databaseURL: "https://memorygame-1b04d.firebaseio.com",
        projectId: "memorygame-1b04d",
        storageBucket: "memorygame-1b04d.appspot.com",
        messagingSenderId: "906613185279",
        appId: "1:906613185279:web:a5f29417fb95ceb1464aca",
        measurementId: "G-QY2K755QJ5"
    };
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
    
    const database = firebase.database();
    const ref = database.ref("/scores")
    

    function writeData(){
        ref.push({
            name: VAR.nickHandler,
            score: VAR.score
        });
    }

    const readData = ()=>{
        ref.on("value", gotData, errData);
    }

    const gotData = (data)=>{
        let scoreResult=Object.values(data.val()).sort((a,b)=>b.score-a.score);
        let top10Results=scoreResult.slice(0,10);
        let i = 1;
        const arr = [];
        top10Results.forEach(e=>{
            const div=document.createElement("div");
            const arrHelper = [];
            for(let y=1; y<=6; y++){
                if(y>2){
                    const li=document.createElement('li');
                    arrHelper.push(li);
                }else{
                    const ul=document.createElement('ul');
                    arrHelper.push(ul)
                }
            }
            const input = document.createElement("input");
            input.type="text";
            input.readOnly=true;
            input.value=e.name;
            arrHelper[2].innerHTML='name:';
            arrHelper[3].append(input);
            arrHelper[4].innerHTML='score:';
            arrHelper[5].innerHTML=e.score;

            arrHelper[0].append(arrHelper[2],arrHelper[3]);
            arrHelper[1].append(arrHelper[4], arrHelper[5]);
            
            div.append(arrHelper[0], arrHelper[1]);
            arr.push(div);
            i++
        })
        const resDiv=Array.from(document.querySelectorAll(".scoreResult_wyniki div"));
        resDiv.forEach(e=>e.remove());
        arr.forEach(e=>{
            VAR.results.appendChild(e);
        })
    }

    const errData = (err)=>{
        console.log("ERROR!")
        console.log(err)
    }


