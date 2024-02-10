let swiper;

function initializeSwiper(){
swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    breakpoints:{
      991: {
        slidesPerView: 2, // Number of slides to show at 991px and below
        spaceBetween: 10,
      },
      601: {
        slidesPerView: 1, // Number of slides to show at 601px and below
        spaceBetween: 10,
      },
    },
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

  });
}

initializeSwiper();

  // Reinitialize swiper when the window is resized
window.addEventListener('resize', () => {
  swiper.destroy(true, true);
  initializeSwiper();
});
