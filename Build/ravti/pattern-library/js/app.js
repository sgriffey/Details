$(document).ready(function() {
     $(".mobileNav__link").click(function() {
	  $(".mobileNav__menu").toggleClass("mobileNav__menu-is-active");
	  return false;
	});
});