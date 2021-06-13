new Swiper('.carousel__slider-1', {
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
   },
   slidesPerView: 3,
   spaceBetween: 15,
   loop: true,
   breakpoints: {
      992: {
         slidesPerView: 3
      },
      768: {
         slidesPerView: 2
      },
      300: {
         slidesPerView: 1
      }
   }
});

new Swiper('.carousel__slider-2', {
   pagination: {
      el: '.swiper-pagination',
      clickable: true
   },
   slidesPerView: 1,
   width: 1062,
   initialSlide: 2,
   loop: true,
});

new Swiper('.test', {
   grabCursor: true,
   loop: true,
   nested: true,
   spaceBetween: 10,
   width: 400,
   slidesPerView: 3,
});