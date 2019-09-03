// const list = document.querySelectorAll('a');

// list.forEach(link => {
//   link.addEventListener('click', disableLink);
// })

// function disableLink(e){
//   const elems = document.querySelector('.active');
//   if(elems !== null){
//    elems.classList.remove("active");
//   }
//  e.target.className = "active";
// }

/* SCROLL EFFECT
-----------------------------------------------------*/
window.onload = function () {
  scrollSpy('#menu');
}