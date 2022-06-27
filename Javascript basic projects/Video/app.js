const btn= document.querySelector(".switchbtns");
const swibtn= document.querySelectorAll(".switchbtns>span");
var video = document.querySelector(".video-container");

btn.addEventListener("click",function(){
    for(let i=0;i<swibtn.length;i++){
   swibtn[i].classList.toggle("switch");
   if(swibtn[i].classList=="play switch"){
    video.play();
    }


else if(swibtn[i].classList=="pause switch"){
 video.pause()
  }




   }
})