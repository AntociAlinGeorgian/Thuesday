$(document).ready(function(){

  //preloader
  $(window).on('load', function(){
    $('.loading').fadeOut(500);
  });

  //navbar
  $(document).scroll(function(){
    if($(document).scrollTop() > 50){
      $('.navbar').addClass('fixed');
    }else{
      $('.navbar').removeClass('fixed');
    }

    //scrollspy
    $('.sections').each(function(){
        var section = this;
        var topSection = this.getBoundingClientRect().top;
        var wh = window.innerHeight;
        if (topSection - 51 <= wh/2 && (Math.abs(topSection - 51)) <= wh/2){
          $('.navbar a.nav-item-' + this.id).addClass('active');
        }else{
          $('.navbar a.nav-item-' + this.id).removeClass('active');
        }
      });
  });


  ///////////// WORK SECTION //////////////
  //popup
  $('.modal-image').magnificPopup({
    type: 'inline',
    midClick: true
  });

  //isotope
  var $grid = $('.work-content').isotope({
    itemSelector: '.work-item',
    stagger: 30
  });

  $('.filter-work').on('click', '.button', function() {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({
      filter: filterValue
    });
  });

  $('.buttons').each(function(i, buttonGroup) {
    var $buttonGroup = $(buttonGroup);
    $buttonGroup.on('click', 'a', function() {
      $buttonGroup.find('.checked').removeClass('checked');
      $(this).addClass('checked');
    });
  });

  //masonry
  $('.work-content').isotope({
      itemSelector: '.work-preview img',
      masonry: {
        columnWidth: 0
      }
    });

  ////////// END ///////////

  //count
  var triggered = false;
  $(document).scroll(function() {
    var factsProps = $('#our-facts')[0].getBoundingClientRect();
    var factsHeight = factsProps.height;
    var factsY = factsProps.top;

    if (factsY <= window.innerHeight - factsHeight && triggered === false) {
      console.log(triggered);
      $('.count').countTo({
        speed: 3000,
        refreshInterval: 90
      });
      triggered = true;
    }
  });

  //smooth scroll
  $("#navbar a").click(function(e) {
    e.preventDefault();
    var offsetTop = $( $(this).attr('href') )[0].offsetTop;
    $('html, body').animate({
        scrollTop: offsetTop - 51
    }, 1000);
  });

  $(".header-section .header-cont a").click(function(e) {
    e.preventDefault();
    var offsetTop = $( $(this).attr('href') )[0].offsetTop;
    $('html, body').animate({
        scrollTop: offsetTop - 51
    }, 1000);
  });

  //owl carousel
  $('.owl-carousel').owlCarousel({
        items: 1,
        margin: 0,
        dots: true,
        loop: true,
        autoplay: true
     });

});
