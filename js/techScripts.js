$(document).ready(function(){
  $("nav").css("position", "fixed");
  $("nav").css("top", "0");
  $("nav").css("background-color", "#FFA400");

  $(window).scroll(function(){
    if ($(document).scrollTop() > 100){

    }
  });


  $("#backToTop").on("click", function () {
    $("body").animate({ scrollTop: 0 }, "slow");
  });

  $(window).scroll(function(){
    check_if_in_view();
    if ($(document).scrollTop() > 500){
      $("nav").removeClass("hide");
      $("nav").css("position", "fixed");
      $("nav").css("background-color", "#FFA400");
    } else{
      $("nav").addClass("hide");
    }
  });


});

const $animation_elements = $('.animation-elements');
const $window = $(window);

function check_if_in_view() {
  const window_height = $window.height();
  const window_top_position = $window.scrollTop();
  const window_bottom_position = (window_top_position + window_height);

  $.each($animation_elements, function () {
    const $element = $(this);
    const element_height = $element.outerHeight();
    const element_top_position = $element.offset().top;
    const element_bottom_position = (element_top_position + element_height);

    //check to see if this current container is within viewport
    if ((element_top_position <= window_bottom_position) || (element_bottom_position <= window_bottom_position)) {
      $element.addClass('in-view');
    } else {
      $element.removeClass('in-view');
    }
  });
}
