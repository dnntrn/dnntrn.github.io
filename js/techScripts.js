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


});
