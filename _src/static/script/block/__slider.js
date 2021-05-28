new Swiper('.carousel__slider', {
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
   },
   pagination: {
      el: '.swiper-pagination',
      clickable: true
   },
   slidesPerView: 1,
   spaceBetween: 30,
   loop: true,
});