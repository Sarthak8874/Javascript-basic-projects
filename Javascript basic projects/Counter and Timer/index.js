const value = document.querySelector(".value");
const btns = document.querySelectorAll(".buttons>button")
let count=0;
for(let i=0;i<btns.length;i++){
    btns[i].addEventListener("click",function(){
    

     if(btns[i].className=="Increase"){
          count++;
         }
     if(btns[i].className=="Decrease"){
        count--;
          }
      if(btns[i].className=="Reset"){
       count=0;
       value.style.color="Black"
        }
        if(count>0){
            value.style.color="Green"
        }
        if(count<0){
            value.style.color="Red"
        }
       
        value.innerHTML=count;
    })
}