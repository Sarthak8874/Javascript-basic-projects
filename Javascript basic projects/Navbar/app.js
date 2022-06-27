const menubarbtn = document.querySelector("#bars");
const menucrossbtn = document.querySelector("#xmark");
const menubar = document.querySelector(".menubar");

menubarbtn.addEventListener("click", function (){
   menubarbtn.style.display="none"
   menucrossbtn.style.display="initial"
   menubar.style.display="block"
})

menucrossbtn.addEventListener("click", function (){
    menucrossbtn.style.display="none"
    menubarbtn.style.display="initial"
    menubar.style.display="none"
 })