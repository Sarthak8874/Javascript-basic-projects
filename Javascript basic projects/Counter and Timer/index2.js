const value = document.querySelector(".value");
const start = document.querySelector(".display .buttons .Start");
const Pause = document.querySelector(".display .buttons .Pause");
const Reset = document.querySelector(".display .buttons .Reset");
let count = 0;
   start.addEventListener('click', function(){
    const timerstart = setInterval(increase,1000)
    function increase(){
     count++;
     value.innerHTML=count;
    }

    start.style.display="none";
    Pause.style.display="inline";
    Reset.style.display="inline";
    
    Reset.addEventListener('click', function(){
       clearInterval(timerstart);
       count =0;
       value.innerHTML=count;
       start.style.display="inline";
       Pause.style.display="none";
       Reset.style.display="none";
       start.innerHTML="Start"
        
     })
     Pause.addEventListener("click",function(){
        clearInterval(timerstart);
        start.style.display="inline";
        Pause.style.display="none";
        start.innerHTML="Resume"
     })
})
