const colors = ['green','red','rgba(133,122,200)','#f15025','#233142','#ff9a3c','#f76b8a','#00204a','#ffe9e3'];
let btn = document.querySelector('#btn');
let btn2 = document.querySelector('#btn2');
let container = document.querySelector('.container');
let color = document.querySelector('.color');
let i = -1
btn.addEventListener('click',function (){
            i=i+1;
       if(i>colors.length-1){
                i=0;
              }
})
    
btn.addEventListener('click',function (){
container.style.backgroundColor = colors[i];
 color.innerHTML=colors[i];
})
btn2.addEventListener('click',function(){
    color.innerHTML= '#f1f5f8';
    container.style.backgroundColor = 'white';
})


