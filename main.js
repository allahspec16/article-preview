"use strict";
const share = document.querySelector('#share');
const link = document.querySelector('#share-btn');
const unshare = document.querySelector('#icon-share');


let bool = 0
share.addEventListener('click', function () {
  link.style.display = 'flex';

  bool = !bool
     
  if (bool == 0) {
     link.style.display = 'flex';
    //  link.style.position = 'absolute';
    //  link.style.right = '30rem';
    //  link.style.top = '30rem';
    //  link.style.padding = '1rem','4rem'
  }else {
     link.style.display = 'none'
  }
})

unshare.addEventListener('click', function () {
  link.style.display = 'none';
  share.style.display = 'flex';
})

// function media(){
//   var viewportWidth = window.innerWidth || document.documentElement.clientWidth;

//   if (viewportWidth >= 765){
//     bool = 0
// share.addEventListener('click', function () {
//   link.style.display = 'flex';

//   bool = !bool
     
//   if (bool == 0) {
//      link.style.display = 'flex';
//      link.style.position = 'absolute';
//      link.style.right = '30rem';
//      link.style.top = '30rem';
//      link.style.padding = '1rem','4rem';
//   }else {
//      link.style.display = 'none'
//   }
// })

//   }
// }
// media();