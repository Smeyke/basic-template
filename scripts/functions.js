//  alert('Hello, World!')

$(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll >= 10) {
        $("#header-wrapper").addClass("small");
    } else {
        $("#header-wrapper").removeClass("small");
    }
});




$("#cptoggle").click(function() {
  $(this).toggleClass("on");
  $("#cpmenu").slideToggle();
});
