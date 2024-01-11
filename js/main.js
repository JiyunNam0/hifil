$(document).ready (function () {

   // 원페이지 스크롤
   let html = $("html");
   let page = 1;
   let lastPage = $('.container').length;

   $('html').animate({scrollTop:0});
   
   $(window).on('wheel', function(e) {

      if (html.is(":animated")) return;

      if (e.originalEvent.deltaY > 0){
         if (page == lastPage) return;
         page++;

      }else if (e.originalEvent.deltaY < 0) {
         if(page == 1) return;
            page--;
      }
      
      let posTop = (page-1) * $(window).height();

      html.animate({scrollTop : posTop}, {duration: 800, easing: 'swing'});
      
   });

   
   new Swiper('.history_swiper', {
      slidesPerView: 1,
      navigation: {
         nextEl: '.swiper-button-next',
         prevEl: '.swiper-button-prev',
      },

   breakpoints: {
      800: {
         slidesPerView: 3,
         spaceBetween: 0,
      },
      3000: {
         slidesPerView: 4,
         spaceBetween: 30,
      },
   },
   })

   // 지도 툴팁
   $('.nation').hover(
      function() {
         $(this).find('dl').css('display', 'block');
      },
      function() {
         $(this).find('dl').css('display', 'none');
      }
   );

   // 파트너쉽 자세히 보기
   $('.partner_more_btn').on('click', function() {

      scrollPosition = $(window).scrollTop();

      $('.wrap').addClass('modal-open');
      $('.partner_modal').css('display', 'block');
   });

   $('.close_btn').on('click', () => {
      $('.wrap').removeClass('modal-open');
      $('.partner_modal').css('display', 'none');

      $(window).scrollTop(scrollPosition);
   })

});

