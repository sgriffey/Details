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
    $(".rfq__scan-expand").click(function(){
            $(".rfq__scan-body").addClass("scan-expanded");
            $(".rfq__scan-expand").addClass("is-hidden");
    });
    // RFQ Vendor Submit
    $(".rfq__bid-upload-file").change(function(){
            $(".rfq__bid-upload-filename").text(this.value);
            $(".rfq__bid-upload-approved").removeClass("is-hidden");
    });
    // Onboard Interaction steps
    $(".onboard-dashboard__button-submit").click(function(){
            $(".is-form-beacon").toggleClass("is-masked");
            $(".onboard-dashboard__request, .onboard-dashboard__form").toggleClass("is-slid-out");
            $(".onboard-dashboard__facility").addClass("is-slid-down");
            $(".is-tile-beacon").toggleClass("is-masked");
    });
    // Onboard Notifications Overlay
    $(".onboard-facility__button-finish").click(function(){
            $(".page__wrapper, .page__wrapper-bleed").toggleClass("is-overlaid");
            $(".overlay__onboard-wrapper").toggleClass("is-masked");
            $('html, body').animate({
                scrollTop: $("#overlay-onboard").offset().top
            }, 500);
    });
    $(".overlay__confirm-form-button-neutral").click(function(){
            $(".page__wrapper").toggleClass("is-overlaid");
            $(".overlay__confirm-wrapper").toggleClass("is-masked");
    });
    // PM Inspections Full List Overlay
    $(".facility__pm-equipment-full-view").click(function(){
            $(".page__wrapper, .page__wrapper-bleed").toggleClass("is-overlaid");
            $(".overlay__inspections-wrapper").toggleClass("is-masked");
            $('html, body').animate({
                scrollTop: $(".overlay__inspections-wrapper").offset().top
            }, 500);
    });
    $(".overlay__inspections-dismiss").click(function(){
            $(".page__wrapper").toggleClass("is-overlaid");
            $(".overlay__inspections-wrapper").toggleClass("is-masked");
    });
    //Repair Equipment Overlay
    $(".repair__unit").click(function(){
            $(".page__wrapper").toggleClass("is-overlaid");
            $(".overlay-equipment").toggleClass("is-masked");
            $('html, body').animate({
                scrollTop: $("#overlay-equipment").offset().top
            }, 500);
    });
    // HVAC Suite Lease Display Lease + Form Details
    $(".facility__suite-upload-lease-input").change(function(){
        $(".facility__suite-lease-body, .facility__suite-upload-lease-form, .facility__suite-upload-lease-view, .facility__suite-lease-head-toolbar").toggleClass("is-masked");
    });
    // HVAC Suite Lease Form Toggle Details
    $('.facility__suite-lease-head-toolbar-edit').click(function() {
        $('.facility__suite-lease-form-input').attr("disabled", false);
        $('.facility__suite-lease-head-toolbar-edit').toggleClass("is-masked");
        $('.facility__suite-lease-head-toolbar-lock').toggleClass("is-masked");
        $('.facility__suite-lease-form-confirm').toggleClass("is-masked");
    });
    $('.facility__suite-lease-head-toolbar-lock').click(function() {
        $('.facility__suite-lease-form-input').attr("disabled", true);
       $('.facility__suite-lease-head-toolbar-edit').toggleClass("is-masked");
        $('.facility__suite-lease-head-toolbar-lock').toggleClass("is-masked");
        $('.facility__suite-lease-form-confirm').toggleClass("is-masked");
    });
    $('.facility__suite-lease-form-confirm-cancel, .facility__suite-lease-form-confirm-save').click(function() {
        $('.facility__suite-lease-form-input').attr("disabled", true);
        $('.facility__suite-lease-head-toolbar-edit').toggleClass("is-masked");
        $('.facility__suite-lease-head-toolbar-lock').toggleClass("is-masked");
        $('.facility__suite-lease-form-confirm').toggleClass("is-masked");
    });
    // Facility Equipment Interaction
    $(".facility__equipment-card").click(function(){
        $(".facility__unit,.facility__equipment-cards,.facility__equipment-map").toggleClass("is-masked");
        $('html, body').animate({
            scrollTop: $(".facility__overview").offset().top
        }, 500);
    });
    $(".facility__unit-navigation-button").click(function(){
        $(".facility__unit,.facility__equipment-cards,.facility__equipment-map").toggleClass("is-masked");
    });
    // Jquery Datepick
    $( "#datepicker" ).datepicker();
    // Adding History Item
    $(".facility__unit-history-add-event").click(function(){
        $(".facility__unit-history-add-info").removeClass("is-masked");
        $(".facility__unit-history-add-event").addClass("is-emphasized-post-click");
        $(".facility__unit-history-add-event").removeClass("is-emphasized-on-hover");
    });
    $(".facility__unit-history-add-info-cancel").click(function(){
        $(".facility__unit-history-add-info").toggleClass("is-masked");
        $(".facility__unit-history-add-event").toggleClass("is-emphasized-post-click");
        $(".facility__unit-history-add-event").toggleClass("is-emphasized-on-hover");
    });
    // Request Work Mobile
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
    //Toggle Subnav for PM
    $(".facility__pm-subnav-equipment").click(function(){
            $(".facility__pm-tenant-body").addClass("is-masked");
            $(".facility__pm-equipment").removeClass("is-masked");
            $(".facility__pm-subnav-tenants").removeClass("is-active");
            $(".facility__pm-subnav-equipment").addClass("is-active");
    });
    $(".facility__pm-subnav-tenants").click(function(){
            $(".facility__pm-equipment").addClass("is-masked");
            $(".facility__pm-tenant-body").removeClass("is-masked");
            $(".facility__pm-subnav-equipment").removeClass("is-active");
            $(".facility__pm-subnav-tenants").addClass("is-active");
    });
    //Toggle Subnav for RFQ
    $(".rfq__aside-subnav-equipment").click(function(){
            $(".rfq__qa").addClass("is-masked");
            $(".rfq__equipment").removeClass("is-masked");
            $(".rfq__aside-subnav-qa").removeClass("is-active");
            $(".rfq__aside-subnav-equipment").addClass("is-active");
    });
    $(".rfq__aside-subnav-qa").click(function(){
            $(".rfq__equipment").addClass("is-masked");
            $(".rfq__qa").removeClass("is-masked");
            $(".rfq__aside-subnav-equipment").removeClass("is-active");
            $(".rfq__aside-subnav-qa").addClass("is-active");
    });
    //Toggle Subnav for Facility: Unit Piece
    $(".facility__unit-subnav-gallery").click(function(){
            $(".facility__unit-history").addClass("is-masked");
            $(".facility__unit-request").addClass("is-masked");
            $(".facility__unit-gallery").removeClass("is-masked");
            $(".facility__unit-subnav-request").removeClass("is-active");
            $(".facility__unit-subnav-history").removeClass("is-active");
            $(".facility__unit-subnav-gallery").addClass("is-active");
    });
    $(".facility__unit-subnav-request").click(function(){
            $(".facility__unit-history").addClass("is-masked");
            $(".facility__unit-gallery").addClass("is-masked");
            $(".facility__unit-request").removeClass("is-masked");
            $(".facility__unit-subnav-history").removeClass("is-active");
            $(".facility__unit-subnav-gallery").removeClass("is-active");
            $(".facility__unit-subnav-request").addClass("is-active");
    });
    $(".facility__unit-subnav-history").click(function(){
            $(".facility__unit-request").addClass("is-masked");
            $(".facility__unit-gallery").addClass("is-masked");
            $(".facility__unit-history").removeClass("is-masked");
            $(".facility__unit-subnav-request").removeClass("is-active");
            $(".facility__unit-subnav-gallery").removeClass("is-active");
            $(".facility__unit-subnav-history").addClass("is-active");
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
        $(".dashboard, .events, .page__wrapper, .page__poster, .page__wrapper-bleed").toggleClass("is-masked");
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
    $(".rfq__zoom-doc").click(function(){
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
    $(".facility__suite-unit-card").click(function(){
            $(".page__wrapper, .page__wrapper-bleed").toggleClass("is-overlaid");
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
    $(".dashboard, .events, .page__wrapper, main, .page__poster, page__wrapper-bleed").click(function(){
        $("article.siteNav__alerts-popover section").addClass("is-masked");
    });
});










