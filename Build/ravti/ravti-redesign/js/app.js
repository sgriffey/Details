$(document).ready(function() {
    $(".mobileNav__link").click(function() {
	  $(".mobileNav__menu").toggleClass("mobileNav__menu-is-active");
	});

 	$(".proposal__terms-scan-expand").click(function(){
            $(".proposal__terms-scan").addClass("terms-scan-expanded");
            $(".proposal__terms-scan-expand").addClass("is-hidden");
    });
});