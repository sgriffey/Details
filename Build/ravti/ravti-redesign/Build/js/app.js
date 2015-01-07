$(document).ready(function() {
    $(".mobileNav__link").click(function() {
      $(".mobileNav__menu").toggleClass("mobileNav__menu-is-active");
	  $(".mobileNav__link").toggleClass("is-nav-open");
	});
 	$(".proposal__terms-scan-expand").click(function(){
            $(".proposal__terms-scan-body").addClass("terms-scan-expanded");
            $(".proposal__terms-scan-expand").addClass("is-hidden");
    });
    $(".project__terms-scan-expand").click(function(){
            $(".project__terms-scan").addClass("terms-scan-expanded");
            $(".project__terms-scan-expand").addClass("is-hidden");
    });
    //Request Work Mobile
    $(".dashboard__mobile-request-card").click(function(){
        $(".dashboard").toggleClass("is-overlaid");
        $(".overlay__request-wrapper").toggleClass("is-masked");
        $('html, body').animate({
            scrollTop: $("#overlay-request").offset().top
        }, 500);
    });
    $(".overlay__request-form-button-cancel").click(function(){
        $(".dashboard").toggleClass("is-overlaid");
        $(".overlay__request-wrapper").toggleClass("is-masked");
        $('html, body').animate({
            scrollTop: $(".mobileNav").offset().top
        }, 300);
    });
    $(".overlay__request-form-button-submit").click(function(){
        $(".overlay__request-form").toggleClass("is-masked");
        $(".overlay__request-feedback").toggleClass("is-masked");
        $('html, body').animate({
                scrollTop: $("#overlay-request").offset().top
        }, 300);
        $(".overlay__request-feedback").toggleClass("animated zoomIn");
    });
    $(".overlay__request-feedback-dismiss-trigger").click(function(){
        $(".dashboard").toggleClass("is-overlaid");
        $(".overlay__request-form").toggleClass("is-masked");
        $(".overlay__request-feedback").toggleClass("is-masked");
        $(".overlay__request-wrapper").toggleClass("is-masked");
        $('html, body').animate({
            scrollTop: $(".mobileNav").offset().top
        }, 300);
    });
    //Request Work Order Dashboard Flow
    $(".dashboard__form-button-submit").click(function(){
        $(".dashboard__aside-request").toggleClass("is-masked");
        $(".dashboard__aside-feedback").toggleClass("is-masked");
        $(".dashboard__aside-feedback").toggleClass("animated fadeIn");
        $(".dashboard__aside-feedback-title, .dashboard__aside-feedback-copy, .dashboard__aside-feedback-dismiss-trigger").toggleClass("animated zoomIn");
    });
    $(".dashboard__aside-feedback-dismiss-trigger").click(function(){
        $(".dashboard__aside-feedback").toggleClass("is-masked");
        $(".dashboard__aside-feedback").toggleClass("animated fadeIn");
        $(".dashboard__aside-feedback-title, .dashboard__aside-feedback-copy, .dashboard__aside-feedback-dismiss-trigger").toggleClass("animated zoomIn");
        $(".dashboard__aside-request").toggleClass("is-masked");
    });
    //Toggle between facility tiles and map
    $(".dashboard__index-control-map").click(function(){
        $(".dashboard__index-grid-view").toggleClass("is-masked");
        $(".dashboard__index-map-view").toggleClass("is-masked");
        $(".dashboard__index-title-background, .dashboard__index-controls-background").toggleClass("is-background-overlaid");
        $(".dashboard__index-control-grid-icon").toggleClass("is-control-active");
        $(".dashboard__index-control-map-icon").toggleClass("is-control-active");
    });
    $(".dashboard__index-control-grid").click(function(){
        $(".dashboard__index-map-view").toggleClass("is-masked");
        $(".dashboard__index-grid-view").toggleClass("is-masked");
        $(".dashboard__index-title-background, .dashboard__index-controls-background").toggleClass("is-background-overlaid");
        $(".dashboard__index-control-grid-icon").toggleClass("is-control-active");
        $(".dashboard__index-control-map-icon").toggleClass("is-control-active");
    });
    //Account Settings Toggle
     $(".siteNav__account, .accountNav__settings").click(function() {
        $(".siteNav").toggleClass("is-inverted-dark");
        $(".siteNav__logo").toggleClass("is-inverted-border");
        $(".siteNav__account").toggleClass("is-masked");
        $(".siteNav__control").toggleClass("is-masked");
        $(".siteNav__page-title").toggleClass("is-masked");
        $(".accountNav__settings").toggleClass("is-masked");
        $(".accountNav__bucket").toggleClass("is-masked");
        $(".accountNav__bucket, .accountNav__settings").toggleClass("animated fadeIn");
        $(".dashboard, .events, .page__wrapper, .page__poster").toggleClass("is-masked");
        $(".account").toggleClass("is-masked");
        $(".account").toggleClass("animated bounceInUp");
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
    //Editing Forms From Disabled
    $('.account__details-personal-head-toolbar-edit').click(function() {
        $('.account__details-personal-input').attr("disabled", false);
        $('.account__details-personal-head-toolbar-edit').toggleClass("is-masked");
        $('.account__details-personal-head-toolbar-lock').toggleClass("is-masked");
        $('.account__details-personal-confirm').toggleClass("is-masked");
    });
    $('.account__details-personal-head-toolbar-lock').click(function() {
        $('.account__details-personal-input').attr("disabled", true);
        $('.account__details-personal-head-toolbar-edit').toggleClass("is-masked");
        $('.account__details-personal-head-toolbar-lock').toggleClass("is-masked");
        $('.account__details-personal-confirm').toggleClass("is-masked");
    });
    $('.account__details-personal-confirm-cancel, .account__details-personal-confirm-save').click(function() {
        $('.account__details-personal-input').attr("disabled", true);
        $('.account__details-personal-head-toolbar-edit').toggleClass("is-masked");
        $('.account__details-personal-head-toolbar-lock').toggleClass("is-masked");
        $('.account__details-personal-confirm').toggleClass("is-masked");
    });
    // Viewing siteNav Popovers
    $(".siteNav__alert-events").click(function(){
        $("article.siteNav__alerts-popover section").addClass("is-masked");
        $(".siteNav__events-popover").toggleClass("is-masked");
    });
    $(".siteNav__alert-proposals").click(function(){
        $("article.siteNav__alerts-popover section").addClass("is-masked");
        $(".siteNav__proposals-popover").toggleClass("is-masked");
    });
    $(".siteNav__alert-invoices").click(function(){
        $("article.siteNav__alerts-popover section").addClass("is-masked");
        $(".siteNav__invoices-popover").toggleClass("is-masked");
    });
    $(".dashboard, .events, .page__wrapper, main, .page__poster").click(function(){
        $("article.siteNav__alerts-popover section").addClass("is-masked");
    });
});