//  alert('Hello, World!')

$("#cptoggle").click(function() {
  $(this).toggleClass("on");
  $("#cpmenu").slideToggle();
});
