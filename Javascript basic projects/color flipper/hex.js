let btn = document.querySelector('#btn');
let btn2 = document.querySelector('#btn2');
let container = document.querySelector('.container');
let color = document.querySelector('.color');

btn.addEventListener('click',function (){
   const x=Math.floor(256*Math.random());
   const y=Math.floor(256*Math.random());
   const z=Math.floor(256*Math.random());
  container.style.backgroundColor = `rgb(${x},${y},${z})`;
   color.innerHTML= `rgb(${x},${y},${z})`;
})
    
btn2.addEventListener('click',function(){
  color.innerHTML= '#f1f5f8';
  container.style.backgroundColor = 'white';
})
