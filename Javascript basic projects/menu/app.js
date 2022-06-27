const menu = [
    {
      id: 1,
      title: "buttermilk pancakes",
      category: "breakfast",
      price: 15.99,
      img: "./images/item-1.jpeg",
      desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
      id: 2,
      title: "diner double",
      category: "lunch",
      price: 13.99,
      img: "./images/item-2.jpeg",
      desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    },
    {
      id: 3,
      title: "godzilla milkshake",
      category: "shakes",
      price: 6.99,
      img: "./images/item-3.jpeg",
      desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },
    {
      id: 4,
      title: "country delight",
      category: "breakfast",
      price: 20.99,
      img: "./images/item-4.jpeg",
      desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
    },
    {
      id: 5,
      title: "egg attack",
      category: "lunch",
      price: 22.99,
      img: "./images/item-5.jpeg",
      desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
    },
    {
      id: 6,
      title: "oreo dream",
      category: "shakes",
      price: 18.99,
      img: "./images/item-6.jpeg",
      desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    },
    {
      id: 7,
      title: "bacon overflow",
      category: "breakfast",
      price: 8.99,
      img: "./images/item-7.jpeg",
      desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
    },
    {
      id: 8,
      title: "american classic",
      category: "lunch",
      price: 12.99,
      img: "./images/item-8.jpeg",
      desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
    },
    {
      id: 9,
      title: "quarantine buddy",
      category: "shakes",
      price: 16.99,
      img: "./images/item-9.jpeg",
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    {
      id: 10,
      title: "bison steak",
      category: "dinner",
      price: 22.99,
      img: "./images/item-10.jpeg",
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
  ];
  const menuitem = document.querySelector(".menu .menuitems");
  const categorybtns =document.querySelector(".menu  .button-container")
   function displayBtns(){
    const categories =menu.reduce(function(values,item){
        if(!values.includes(item.category)){
            values.push(item.category);
        }
        return values
       },['all'])
       let displaybtn = categories.map(function(btn){
        return `<button id="btn"class="${btn}">${btn}</button>`
       }).join(" ");
      categorybtns.innerHTML=displaybtn;
      const menubtns = document.querySelectorAll(".menu .button-container>button")
      for(let i=0;i<menubtns.length;i++){
        menubtns[i].addEventListener('click',function(e){
          const category = e.currentTarget.className;
          const menucategory = menu.filter(function(menuitems){
             if(menuitems.category==category){
              return menuitem;
             }
             else  if(category=="all"){
                return menuitem;
               }
          });
           displaymenuitem(menucategory);
          
        })
      }
      
   }
   
  function displaymenuitem (menuitems){
    let displaymenu = menuitems.map(function(items){
        return `<div class="single-item">
        <div class="img-container">
             <img src="${items.img}" alt="">
         </div>
         <div class="item-info">
            <header>
              <h4 class="item-name">${items.title}</h4>
              <h4 class="price">$${items.price}</h4>
            </header>
              <p class="item-text">${items.desc}</p>
    
        </div>
    </div>`
       })
       displaymenu = displaymenu.join(" ");
        menuitem.innerHTML=displaymenu;
  }

  window.addEventListener("DOMContentLoaded",function(){ 
       displayBtns();
       displaymenuitem(menu);
})


