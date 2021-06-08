const btn = document.querySelector('.nav-icon');
const nav = document.querySelector('.nav');
const btnClose = document.querySelector('.btn-close');

btn.addEventListener('click', (evt) =>{
   evt.preventDefault();
   nav.classList.add('nav--open');
   btn.classList.add('nav-icon--none');
   btnClose.classList.add('btn-close--visual');
})


btnClose.addEventListener('click', (evt) => {
   evt.preventDefault();
   nav.classList.remove('nav--open');
   btn.classList.remove('nav-icon--none');
   btnClose.classList.remove('btn-close--visual');
})