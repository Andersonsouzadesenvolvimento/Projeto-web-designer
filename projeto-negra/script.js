/* ----- hero slider */

var swiper = new Swiper('.heroSwiper',{
  slidesPreView:1,
  loop:true,
  speed:2000,
  autoplay:{
    delay:5000,
  },
  navigation:{
    nextE1:'.swiper-button-next',
    prevE1:'.swiper-button-prev'
  }
})
/*---Show menu----*/
let bar=document.querySelector(".bars");
let menu=document.querySelector(".menu");
bar.addEventListener("click",() =>{
  menu.classList.toggle('show_menu');
})