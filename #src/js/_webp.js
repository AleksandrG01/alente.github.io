function testWebP(callback) {
   var webP = new Image();
   webP.onload = webP.onerror = function () {
      callback(webP.height == 2);
   };
   webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {
   if (support == true) {
      document.querySelector('body').classList.add('webp');
   } else {
      document.querySelector('body').classList.add('no-webp');
   }
});

$(document).ready(function () {

   $('.menu__icon, .menu__body_plaseholder').click(function () {
      $('.menu__icon, .menu__body, .menu__body_plaseholder').toggleClass('active');
      $('body').toggleClass('lock');
   });
   $('.header__sity-container').click(function () {
      event.preventDefault();
      $('.header__sity-list').toggleClass('active');
   });

   $(window).resize(function () { 
      /* сюда функционал */ 
      var width = $('body').innerWidth();
      if (width < 767) {
         $( "#tab1" ).attr( 'checked', false )
     }
   
   });
  


   var dp = $('#date').datepicker({
      minDate: new Date(),
      dateFormat: "dd.MM"
   }).data('datepicker');

   dp.selectDate(new Date());



   var ti = $('#time').datepicker({
      dateFormat: ' ',
      timepicker: true,
      classes: 'only-timepicker'
   }).data('datepicker');
   ti.selectDate(new Date());


});


$(".menu__link").click(function () {
   $('.menu__icon, .menu__body, .menu__body_plaseholder').removeClass('active');
   $('body').removeClass('lock');
   $("html, body").animate({
      scrollTop: $($(this).attr("href")).offset().top + "px"
   }, {
      duration: 750,
      easing: "swing"
   });
   return false;
});


