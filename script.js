

// const larguraDaTela = window.innerWidth

// if (larguraDaTela < 800) {
//   var swiper3 = new Swiper(".mySwiper3", {
//       slidesPerView: 1,
//       spaceBetween: 10,
//       loop: true,
//       grabCursor: true,
//       pagination: {
//         el: ".swiper-pagination",
//         clickable: true,
//       },
//       navigation: {
//         nextEl: ".swiper-button-next",
//         prevEl: ".swiper-button-prev",
//       },
//     });
// } else {
//   var swiper3 = new Swiper(".mySwiper3", {
//       slidesPerView: 1,
//       spaceBetween: 10,
//       loop: true,
//       grabCursor: true,
//       pagination: {
//         el: ".swiper-pagination",
//         clickable: true,
//       },
//       navigation: {
//         nextEl: ".swiper-button-next",
//         prevEl: ".swiper-button-prev",
//       },
//     });
// }

const larguraDaTela = window.innerWidth

if (larguraDaTela < 800) {
    var swiper = new Swiper(".mySwiper", {
        cssMode: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        pagination: {
          el: ".swiper-pagination",
        },
        mousewheel: true,
        keyboard: true,
      });    
} else {
    var swiper = new Swiper(".mySwiper", {
        cssMode: true,
        spaceBetween: 60,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        pagination: {
          el: ".swiper-pagination",
        },
        mousewheel: true,
        keyboard: true,
      });    
}


