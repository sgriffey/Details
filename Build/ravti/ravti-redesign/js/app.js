$(document).ready(function() {
    $(".mobileNav__link").click(function() {
      $(".mobileNav__menu").toggleClass("mobileNav__menu-is-active");
	  $(".mobileNav__link").toggleClass("is-nav-open");
	});
     $("#mo, #account-settings").click(function() {
      $(".siteNav__account").toggleClass("is-masked");
      $(".siteNav__buckets").toggleClass("is-masked");
      $(".accountNav__settings").toggleClass("is-masked");
      $(".accountNav__bucket").toggleClass("is-masked");
      $("#dash-toggle").toggleClass("is-masked");
      $("#settings").toggleClass("is-masked");
    });
 	$(".proposal__terms-scan-expand").click(function(){
            $(".proposal__terms-scan-body").addClass("terms-scan-expanded");
            $(".proposal__terms-scan-expand").addClass("is-hidden");
    });
    $(".project__terms-scan-expand").click(function(){
            $(".project__terms-scan-body").addClass("terms-scan-expanded");
            $(".project__terms-scan-expand").addClass("is-hidden");
    });
    //For Timeline Page
    $(".project__details-subnav-terms").click(function(){
            $(".project__equipment").addClass("is-masked");
            $(".project__qa").addClass("is-masked");
            $(".project__terms-scan").removeClass("is-masked");
            $(".project__terms-view").removeClass("is-masked");
            $(".project__details-subnav-qa").removeClass("is-active");
            $(".project__details-subnav-equipment").removeClass("is-active");
            $(".project__details-subnav-terms").addClass("is-active");
    });
    $(".project__details-subnav-equipment").click(function(){
            $(".project__terms-scan").addClass("is-masked");
            $(".project__terms-view").addClass("is-masked");
            $(".project__qa").addClass("is-masked");
            $(".project__equipment").removeClass("is-masked");
            $(".project__details-subnav-terms").removeClass("is-active");
            $(".project__details-subnav-qa").removeClass("is-active");
            $(".project__details-subnav-equipment").addClass("is-active");
    });
    $(".project__details-subnav-qa").click(function(){
            $(".project__terms-scan").addClass("is-masked");
            $(".project__terms-view").addClass("is-masked");
            $(".project__equipment").addClass("is-masked");
            $(".project__qa").removeClass("is-masked");
            $(".project__details-subnav-terms").removeClass("is-active");
            $(".project__details-subnav-equipment").removeClass("is-active");
            $(".project__details-subnav-qa").addClass("is-active");
    });
    //For Proposal Page
    $(".proposal__procure-subnav-qa").click(function(){
            $(".proposal__procure-goods").toggleClass("is-masked");
            $(".proposal__procure-subnav-equipment").toggleClass("is-active");
            $(".proposal__procure-subnav-qa").toggleClass("is-active");
            $(".proposal__procure-services").toggleClass("is-masked");
            $(".proposal__procure-services").removeClass("is-hidden");
    });
     $(".proposal__procure-subnav-equipment").click(function(){
            $(".proposal__procure-services").toggleClass("is-masked");
            $(".proposal__procure-goods").toggleClass("is-masked");
            $(".proposal__procure-subnav-qa").toggleClass("is-active");
            $(".proposal__procure-subnav-equipment").toggleClass("is-active");
    });
    //For Modal Overlays
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
    //Confirmation Overlay
    $(".proposal__form-button-encourage").click(function(){
            $(".page__wrapper").toggleClass("is-overlaid");
            $(".overlay__confirm-wrapper").toggleClass("is-masked");
            $('html, body').animate({
                scrollTop: $("#overlay-confirm").offset().top
            }, 500);
    });
    $(".overlay__confirm-form-button-neutral").click(function(){
            $(".page__wrapper").toggleClass("is-overlaid");
            $(".overlay__confirm-wrapper").toggleClass("is-masked");
    });
    //Adding Comments to Proposal
    $('.proposal__procure-services-qa-post-btn').click(function() {
        var toAdd = $("textarea[name=response]").val();
        $('.proposal__procure-services-qa-comment').before("<div>"+"<figure>"+"<img>"+"</figure>"+"<em>"+"<h3>"+"</h3>"+"<p>"+toAdd+"</p>"+"</em>"+"</div>");
        $('.proposal__procure-services-qa div').not('.proposal__procure-services-qa-comment').addClass('proposal__procure-services-qa-response');
        $('.proposal__procure-services-qa-response figure').addClass('proposal__procure-services-qa-user');
        $('.proposal__procure-services-qa-response em').addClass('proposal__procure-services-qa-text');
        $('.proposal__procure-services-qa-text h3').addClass('proposal__procure-services-qa-username');
        $('.proposal__procure-services-qa-username').text("Monique");
        $('.proposal__procure-services-qa-text p').addClass('proposal__procure-services-qa-answer');
        $('.proposal__procure-services-qa-user img').attr({src: "http://cdn.getforge.com/detailsmakethedesign.com/1417678820/ravti/ravti-redesign/assets/users_gibson.png"});
    });
    //Adding Comments to Project
    $('.project__qa-chat-post-btn').click(function() {
        var toAdd = $("textarea[name=response]").val();
        $('.project__qa-chat-comment').before("<div>"+"<figure>"+"<img>"+"</figure>"+"<em>"+"<h3>"+"</h3>"+"<p>"+toAdd+"</p>"+"</em>"+"</div>");
        $('.project__qa-chat div').not('.project__qa-chat-comment').addClass('project__qa-chat-response');
        $('.project__qa-chat-response figure').addClass('project__qa-chat-user');
        $('.project__qa-chat-response em').addClass('project__qa-chat-text');
        $('.project__qa-chat-text h3').addClass('project__qa-chat-username');
        $('.project__qa-chat-username').text("Monique");
        $('.project__qa-chat-text p').addClass('project__qa-chat-answer');
        $('.project__qa-chat-user img').attr({src: "http://cdn.getforge.com/detailsmakethedesign.com/1417678820/ravti/ravti-redesign/assets/users_gibson.png"});
    });
});