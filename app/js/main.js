$(function () {
   // Слайдер

   $(".slider__inner").slick({
      infinite: true,
      arrows: false,
      dots: true,
      autoplay: true,
      autoplaySpeed: 3000,
      fade: true,
      draggable: true,
   });

   // Плавний скрол

   $("#menu").on("click", "a", function (e) {
      e.preventDefault();
      var id = $(this).attr("href"),
         target = $(id),
         header = $("#menu"), // Замініть на відповідний селектор
         headerHeight = header.outerHeight(),
         offset = 10; // Замініть це на бажану величину в пікселях

      if (target.length) {
         var top = target.offset().top - headerHeight - offset;
         $("body, html").animate({ scrollTop: top }, 1500);
      }
   });

   // footer slider nav

   $(".footer-nav__title").on("click", function () {
      $(this).toggleClass("footer-nav__list--active");
      $(this).next().slideToggle();
   });
});

// Функція для прокрутки сторінки наверх
function scrollToTop() {
   // Прокрутити сторінку до верху з плавністю
   window.scrollTo({
      top: 0,
      behavior: "smooth",
   });
}

// Функція для прокрутки сторінки наверх
function scrollToTop() {
   // Прокрутити сторінку до верху з плавністю
   window.scrollTo({
      top: 0,
      behavior: "smooth",
   });
}

// Отримати елемент кнопки
var scrollToTopBtn = document.getElementById("scrollToTopBtn");

// Додати обробник подій для події прокрутки
window.addEventListener("scroll", function () {
   // Визначити, чи користувач почав скролити сторінку
   if (
      document.body.scrollTop > 93 ||
      document.documentElement.scrollTop > 93
   ) {
      scrollToTopBtn.style.display = "flex";
   } else {
      scrollToTopBtn.style.display = "none";
   }
});

// wow animation
wow = new WOW({
   boxClass: "wow",
   animateClass: "animate__animated",
   offset: 25,
   mobile: true,
   live: true,
});
wow.init();
