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
    $(".project__terms-scan-expand").click(function(){
            $(".project__terms-scan").addClass("terms-scan-expanded");
            $(".project__terms-scan-expand").addClass("is-hidden");
    });
    $("#equip").click(function(){
            $(".project__terms-scan").toggleClass("is-masked");
            $(".project__terms-view").toggleClass("is-masked");
            $("#details").toggleClass("is-active");
            $("#equip").toggleClass("is-active");
            $(".project__equipment").toggleClass("is-masked");
            $(".project__equipment").removeClass("is-hidden");
    });
    $("#details").click(function(){
            $(".project__equipment").toggleClass("is-masked");
            $(".project__terms-scan").toggleClass("is-masked");
            $(".project__terms-view").toggleClass("is-masked");
            $("#details").toggleClass("is-active");
            $("#equip").toggleClass("is-active");
    });
    $(".overlay-scope").click(function(){
            $(".page__wrapper").toggleClass("is-overlaid");
            $(".overlay").toggleClass("is-masked");
            $('html, body').animate({
                scrollTop: $("#overlay").offset().top
            }, 500);
    });
     $(".overlay__dismiss").click(function(){
            $(".page__wrapper").toggleClass("is-overlaid");
            $(".overlay").toggleClass("is-masked");
    });
     $(".project__equipment-piece, .proposal__procure-goods-part").click(function(){
            $(".page__wrapper").toggleClass("is-overlaid");
            $(".overlay-equipment").toggleClass("is-masked");
            $('html, body').animate({
                scrollTop: $("#overlay-equipment").offset().top
            }, 500);
    });
     $(".overlay-equipment-dismiss").click(function(){
            $(".page__wrapper").toggleClass("is-overlaid");
            $(".overlay-equipment").toggleClass("is-masked");
    });
});