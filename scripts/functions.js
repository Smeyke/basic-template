//  alert('Hello, World!')

window.onscroll = function() {
  var el = document.getElementsById('header-wrapper')[0];
  var className = 'small';
  if (el.classList) {
    if (window.scrollY > 10)
      el.classList.add(className);
    else
      el.classList.remove(className);
  }
};


$("#cptoggle").click(function() {
  $(this).toggleClass("on");
  $("#cpmenu").slideToggle();
});
