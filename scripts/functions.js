//  alert('Hello, World!')

// adding the class .small to the #header-wrapper and the .fluid-header

$(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll >= 10) {
        $("#header-wrapper").addClass("small");
    } else {
        $("#header-wrapper").removeClass("small");
    }
});


$(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll >= 10) {
        $(".fluid-header").addClass("small");
    } else {
        $(".fluid-header").removeClass("small");
    }
});


// adding the class .on to the toggle of the mobile menu

$("#cptoggle").click(function() {
  $(this).toggleClass("on");
  $("#cpmenu").slideToggle();
});
