$(document).ready(function() {
    $(".mobileNav__link").click(function() {
	  $(".mobileNav__menu").toggleClass("mobileNav__menu-is-active");
	});

 	$(".widgets__subnav-page").click(function(){
    	$('.widgets__subnav-page .is-se').not(this).removeClass('checked');
    $(this).toggleClass('checked');
 })
});