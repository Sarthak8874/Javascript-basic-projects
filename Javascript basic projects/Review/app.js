const reviews = [
    {
      id: 1,
      name: "susan smith",
      job: "web developer",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
      text:
        "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
      id: 2,
      name: "anna johnson",
      job: "web designer",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
      text:
        "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
    },
    {
      id: 3,
      name: "peter jones",
      job: "intern",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
      text:
        "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
    },
    {
      id: 4,
      name: "bill anderson",
      job: "the boss",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
      text:
        "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
    },
  ];
//   select items
const image = document.querySelector(".review .article .img-container img");
const author = document.querySelector(".review .article .author");
const job = document.querySelector(".review .article .job");
const text = document.querySelector(".review .article .info");

const prevBtn = document.querySelector(".review .article .button-container .prev");
const nextBtn = document.querySelector(".review .article .button-container .next");

let currentitem=0;

window.addEventListener('DOMContentLoaded', function (){
   showreview(currentitem);
})
function showreview(currentitem){
    image.src = reviews[currentitem].img
    author.innerHTML = reviews[currentitem].name
    job.innerHTML = reviews[currentitem].job
    text.innerHTML = reviews[currentitem].text
}

nextBtn.addEventListener("click", function (){
   if(currentitem<reviews.length-1) {
     currentitem++;
   }
   else{
     currentitem = 0;
   }
   
    showreview(currentitem);
   
})
prevBtn.addEventListener("click", function (){
    if(currentitem>0) {
      currentitem--;
    }
    else{
      currentitem = 3;
    }
    
     showreview(currentitem);
    
 })