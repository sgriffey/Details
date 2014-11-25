$(document).ready(function() {
    $(".mobileNav__link").click(function() {
      $(".mobileNav__menu").toggleClass("mobileNav__menu-is-active");
	  $(".mobileNav__link").toggleClass("is-nav-open");
	});

 	$(".proposal__terms-scan-expand").click(function(){
            $(".proposal__terms-scan").addClass("terms-scan-expanded");
            $(".proposal__terms-scan-expand").addClass("is-hidden");
    });

    $(".project__terms-scan-expand").click(function(){
            $(".project__terms-scan").addClass("terms-scan-expanded");
            $(".project__terms-scan-expand").addClass("is-hidden");
    });
});