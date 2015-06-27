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
    $(".v-job__scan-expand").click(function(){
            $(".v-job__scan-body").addClass("scan-expanded");
            $(".v-job__scan-expand").addClass("is-hidden");
    });
    //Account Settings on mobile
    $(document).on('click', '*[data-mobilenav-settings]', function() {
        $(".mobileNav__menu").toggleClass("mobileNav__menu-is-active");
        $(".mobileNav__link").toggleClass("is-nav-open");
        $("main, .account").toggleClass("is-masked");
    });
    //Dismiss Toast
    $(document).on('click', '.toast h2', function() {
        $('.toast').addClass("is-toast-out");
        setTimeout(function() {
             $('.toast').removeClass("is-toast-out").addClass("is-masked");
        }, 2000);
    });
     // Invite Vendor
    $(document).on('click', '.account__facility-vendor-invite h2', function() {
        $(this).next('form').toggleClass('is-masked');
    });
    $(document).on('click', '.account__facility-vendor-invite-controls input', function() {
        $(this).parents('.account__facility-vendor-invite form').toggleClass('is-masked');
    });
    $(document).on('click', '.account__facility-vendor-invite-controls input:nth-child(2)', function() {
        $('.toast').toggleClass('is-masked is-toast-in');
        $('.toast div').addClass('is-success');
        setTimeout(function() {
             $('.toast').toggleClass("is-toast-in");
        }, 4000);
        setTimeout(function() {
             $('.toast').addClass("is-toast-out");
        }, 5000);
        setTimeout(function() {
             $('.toast').removeClass("is-toast-out").addClass("is-masked");
        }, 6000);
    });
    //Inviting Team Member
    $(document).on('click', '.account__team-auth-add-cta', function() {
        $(this).siblings('.account__team-auth-add').toggleClass("is-masked");
        $(this).parent().toggleClass("is-blank is-inviting");
        $(this).toggleClass("is-masked");
    });
    $(document).on('click', '.account__team-auth-add > div input:nth-child(2)', function() {
        $('.toast').toggleClass('is-masked is-toast-in');
        $('.toast div').addClass('is-success');
        setTimeout(function() {
             $('.toast').toggleClass("is-toast-in");
        }, 4000);
        setTimeout(function() {
             $('.toast').addClass("is-toast-out");
        }, 5000);
        setTimeout(function() {
             $('.toast').removeClass("is-toast-out").addClass("is-masked");
        }, 6000);
    });
    $(document).on('click', '.account__team-auth-add > div input', function() {
        $(this).parents('.account__team-auth-add').toggleClass('is-masked');
        $(this).parents('.account__team-auth-add').siblings('.account__team-auth-add-cta').toggleClass('is-masked');
        $(this).parents('.account__team-auth-member').toggleClass('is-blank is-inviting');
    });
    //Account Settings
    $(document).on('click', '*[data-account-tab-facilities]', function() {
        $("*[data-faciltiy-card]").parent('.account__aside, .account__showcase').removeClass("is-masked");
        $("*[data-personal-card]").parent('.account__half').addClass("is-masked");
        $("*[data-team-card], *[data-alerts-card]").parent('.account__full').addClass("is-masked");
        $("*[data-account-tab-facilities]").addClass("is-active");
        $("*[data-account-tab-personal], *[data-account-tab-team], *[data-account-tab-alerts]").removeClass("is-active");
    });
    $(document).on('click', '*[data-account-tab-team]', function() {
        $("*[data-team-card], *[data-alerts-card]").parent('.account__full').removeClass("is-masked");
        $("*[data-team-card]").removeClass("is-masked");
        $("*[data-alerts-card]").addClass("is-masked");
        $("*[data-personal-card]").parent('.account__half').addClass("is-masked");
        $("*[data-faciltiy-card]").parent('.account__aside, .account__showcase').addClass("is-masked");
        $("*[data-account-tab-team]").addClass("is-active");
        $("*[data-account-tab-personal], *[data-account-tab-facilities], *[data-account-tab-alerts]").removeClass("is-active");
    });
    $(document).on('click', '*[data-account-tab-alerts]', function() {
        $("*[data-team-card], *[data-alerts-card]").parent('.account__full').removeClass("is-masked");
        $("*[data-alerts-card]").removeClass("is-masked");
        $("*[data-team-card]").addClass("is-masked");
        $("*[data-personal-card]").parent('.account__half').addClass("is-masked");
        $("*[data-faciltiy-card]").parent('.account__aside, .account__showcase').addClass("is-masked");
        $("*[data-account-tab-alerts]").addClass("is-active");
        $("*[data-account-tab-personal], *[data-account-tab-facilities], *[data-account-tab-team]").removeClass("is-active");
    });
    $(document).on('click', '*[data-account-tab-personal]', function() {
        $("*[data-team-card], *[data-alerts-card]").parent('.account__full').addClass("is-masked");
        $("*[data-personal-card]").parent('.account__half').removeClass("is-masked");
        $("*[data-faciltiy-card]").parent('.account__aside, .account__showcase').addClass("is-masked");
        $("*[data-account-tab-personal]").addClass("is-active");
        $("*[data-account-tab-facilities], *[data-account-tab-team], *[data-account-tab-alerts]").removeClass("is-active");
    });
    //Deleting Team Member/Preferred Vednor
    $(document).on('click', '*[data-delete-teammate]:not(.is-disabled), [data-delete-vendor]:not(.is-disabled)', function() {
       $(this).toggleClass('is-masked');
       $(this).siblings('input, span').toggleClass('is-masked');
    });
    $(document).on('click', '*[data-delete-teammate-confirm], *[data-delete-vendor-confirm]', function() {
       $(this).parents('.account__team-auth-member, account__facility-vendor').remove();
    });
    $(document).on('click', '*[data-delete-teammate-cancel], *[data-delete-vendor-cancel]', function() {
        $(this).toggleClass('is-masked');
        $(this).prevAll('*[data-delete-teammate-confirm], *[data-delete-teammate], *[data-delete-vendor-confirm], *[data-delete-vendor], span').toggleClass('is-masked');
    });
    // Alert Overlay
    $(document).on('click', '.account__facility-vendor-remove', function() {
         $(".account").toggleClass("is-overlaid");
            $(".overlay__alert-wrapper").toggleClass("is-masked animated fadeIn");
            $(".overlay__alert").toggleClass("is-slid-down");
            $('html, body').animate({
                scrollTop: $(".overlay__alert-wrapper").offset().top
            }, 500);
    });
    $(document).on('click', '.overlay__dismiss, .overlay__alert-controls-encourage, .overlay__alert-controls-secondary', function() {
        $(this).parents('.overlay__alert-wrapper').toggleClass('is-masked animated fadeIn');
        $(".account").toggleClass("is-overlaid");
        $(".overlay__alert").toggleClass("is-slid-down");
    });
    // Assiging A preferred Vendor
    $(document).on('click', '.account__facility-vendor:not(.is-expanded)', function() {
        $(this).children('.account__facility-vendor-docs').toggleClass("is-masked");
        $(this).toggleClass("is-expanded");
    });
    $(document).on('click', '.account__facility-vendor-abstract i', function() {
        $(this).parent('.account__facility-vendor-abstract').next('.account__facility-vendor-docs').toggleClass('is-masked');
        $(this).parents('.account__facility-vendor').toggleClass('is-expanded');
    });
    $(document).on('click', '.account__facility-vendor-cta', function() {
        $(this).siblings('.account__facility-vendor-set').toggleClass("is-masked");
        $(this).parent('.account__facility-vendor').toggleClass("is-assigning");
        $(this).toggleClass("is-masked");
    });
    $(document).on('click', '.account__facility-vendor-set-cancel', function() {
        $(this).parents('.account__facility-vendor-set').toggleClass('is-masked');
        $(this).parents('.account__facility-vendor-set').prev('.account__facility-vendor-cta').toggleClass('is-masked');
        $(this).parents('.account__facility-vendor').toggleClass("is-assigning");
    });
    $(document).on('click', '.account__facility-vendor-set-save', function() {
        $(this).parents('.account__facility-vendor-set').toggleClass('is-masked');
        $(this).parents('.account__facility-vendor').toggleClass("is-assigning is-masked");
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
    //Tenants Enrolling in lease compliacnce
    $(".tenant__lease-enroll-agree-checkbox").change(function(){
        $(".tenant__lease-enroll-verify-approve").attr("disabled", false);
    });
    $(".tenant__lease-upload-file").change(function(){
        $(".tenant__lease-upload-filename").toggleClass("is-hidden");
        $(".tenant__lease-upload-button").attr("disabled", false);
    });
    $(".tenant__lease-enroll-verify-approve").click(function(){
        $(".tenant__lease-enroll-feedback").toggleClass("is-slid-down");
        $(".tenant__lease-enroll-offering").toggleClass("is-hidden");
        $(".tenant__lease-enroll-verify-approve").attr("disabled", true);
    });
    $(".tenant__lease-upload-button").click(function(){
        $(".tenant__lease-upload-feedback").toggleClass("is-slid-down");
        $(".tenant__lease-upload-offering").toggleClass("is-hidden");
        $(".tenant__lease-upload-button").attr("disabled", true);
    });
    // If Equipment List Has more 3 units
    $(".o-job__bid-equipment:gt(2), .o-job__quote-equipment:gt(2)").addClass("is-masked");
    $(".o-job__bid-equipment-truncated, .o-job__quote-equipment-truncated").click(function() {
        $(".o-job__bid-equipment, .o-job__quote-equipment").removeClass("is-masked");
        $(".o-job__bid-equipment:gt(2), .o-job__quote-equipment:gt(2)").addClass("animated fadeIn");
        $(".o-job__bid-equipment-truncated, .o-job__quote-equipment-truncated").addClass("is-masked");
    });
    // Job RFQ Tab Toggling
    $("*[data-tab-rfq-a]").click(function(){
            $("*[data-rfq-b], *[data-rfq-c]").addClass("is-masked");
            $("*[data-rfq-a]").removeClass("is-masked");
            $("*[data-tab-rfq-b], *[data-tab-rfq-c]").removeClass("is-active");
            $("*[data-tab-rfq-a]").addClass("is-active");
    });
    $("*[data-tab-rfq-b]").click(function(){
            $("*[data-rfq-a], *[data-rfq-c]").addClass("is-masked");
            $("*[data-rfq-b]").removeClass("is-masked");
            $("*[data-tab-rfq-a], *[data-tab-rfq-c]").removeClass("is-active");
            $("*[data-tab-rfq-b]").addClass("is-active");
    });
    // Job Proposal Commit & Approve
    $(".o-job__bid-verify-approve").click(function(){
        $(".o-job__bid-verify-decision, .o-job__bid-verify-approve").toggleClass("is-masked");
        $(".o-job__bid-verify-decision").toggleClass("animated fadeIn");
    });
    $(".o-job__bid-verify-cancel").click(function(){
        $(".o-job__bid-verify-decision, .o-job__bid-verify-approve").toggleClass("is-masked");
    });
    $(".o-job__bid-verify-confirm").click(function(){
        $(".o-job__bid-verify-decision").toggleClass("is-masked");
        $(".o-job__bid-body").addClass("is-proposal-approved");
    });
    // Toggle Job Status Timeline
    $(".v-job__status-timeline-button").click(function(){
            $(".v-job__status-timeline").toggleClass("is-collapsed");
    });
    // Edit Timeline: Scheduling
    $("#schedule-goods").click(function(){
            $(".v-job__status-edit, .v-job__status-edit-goods").removeClass("is-masked");
    });
    $("#schedule-labor").click(function(){
            $(".v-job__status-edit, .v-job__status-edit-labor").removeClass("is-masked");
    });
    $(".v-job__status-edit-dismiss").click(function(){
        $(this).closest(".v-job__status-edit").toggleClass("is-masked");
        $(".v-job__status-edit-goods, .v-job__status-edit-labor").addClass("is-masked");
    });
    //Edit Timeline: Add Files
    $(".v-job__status-event-info-upload").change(function(){
        $(this).next().removeClass("is-hidden");
    });
    // Add Technician Vendor Scheduling
    $(".v-job__schedule-add").click(function(){
            $(".v-job__schedule-option").first().toggleClass("is-collapsed");
            $(".v-job__schedule-add-tech").toggleClass("is-collapsed");
            $(".v-job__schedule-add, .v-job__schedule-save, .v-job__schedule-cancel").toggleClass("is-masked");
            $(".v-job__schedule-add-tech-input").attr("autofocus", true);
    });
     $(".v-job__schedule-save, .v-job__schedule-cancel").click(function(){
            $(".v-job__schedule-option").first().toggleClass("is-collapsed");
            $(".v-job__schedule-add-tech").toggleClass("is-collapsed");
            $(".v-job__schedule-add, .v-job__schedule-save, .v-job__schedule-cancel").toggleClass("is-masked");
            $(".v-job__schedule-add-tech-input").removeAttr("autofocus");
    });
    // Vendor Signup Confirm
    $(".vendor__signup-finalize-button").click(function(){
            $(".vendor__signup").toggleClass("is-masked");
            $(".vendor__registered").toggleClass("is-masked");
            $(".vendor__registered").toggleClass("animated fadeIn");
    });
    //Request Control Add Files
    $(".dashboard__request-control-upload").change(function(){
        $(this).next().removeClass("is-hidden");
    });
    //Request Control Add Equipment
    $(".dashboard__request-control-tag").click(function(){
        $(this).prev().toggleClass("is-masked");
        $(this).closest(".dashboard__request-control-tag").toggleClass("is-masked");
    });
    //Request Control: Input Submitted
    $(".dashboard__request-control-button-submit").click(function(){
        $(".dashboard__feedback").toggleClass("is-masked");
        $(".dashboard__feedback").toggleClass("animated fadeIn");
    });
    $(".dashboard__feedback-dismiss-trigger").click(function(){
        $(this).closest(".dashboard__request-control").addClass("is-slid-right");
        $(".dashboard__feedback").toggleClass("is-masked");
        $(".dashboard__feedback").toggleClass("animated fadeIn");
    }); 
    //Dismiss Request Control
    $(".dashboard__request-control-dismiss").click(function(){
        $(this).closest(".dashboard__request-control").toggleClass("is-slid-right");
    });
    // Dashboard Control Request
    $(".is-service").click(function(){
        $("#is-service").toggleClass("is-slid-right");
    });
    $(".is-repair").click(function(){
        $("#is-repair").toggleClass("is-slid-right");
    });
    $(".is-pm").click(function(){
        $("#is-pm").toggleClass("is-slid-right");
    });
    $(".is-replacement").click(function(){
        $("#is-replacement").toggleClass("is-slid-right");
    });
    $(".is-lease").click(function(){
        $("#is-lease").toggleClass("is-slid-right");
    });
    // Mobile Request Work Buckets
    $("#mobile-replacement").click(function(){
        $(".dashboard").toggleClass("is-overlaid");
        $(".is-mobile-replacement").toggleClass("is-masked");
        $('html, body').animate({
            scrollTop: $(".is-mobile-replacement").offset().top
        }, 500);
    });
    $("#mobile-repair").click(function(){
        $(".dashboard").toggleClass("is-overlaid");
        $(".is-mobile-repair").toggleClass("is-masked");
        $('html, body').animate({
            scrollTop: $(".is-mobile-repair").offset().top
        }, 500);
    });
    $("#mobile-service").click(function(){
        $(".dashboard").toggleClass("is-overlaid");
        $(".is-mobile-service").toggleClass("is-masked");
        $('html, body').animate({
            scrollTop: $(".is-mobile-service").offset().top
        }, 500);
    });
    $("#mobile-pm").click(function(){
        $(".dashboard").toggleClass("is-overlaid");
        $(".is-mobile-pm").toggleClass("is-masked");
        $('html, body').animate({
            scrollTop: $(".is-mobile-pm").offset().top
        }, 500);
    });
    $("#mobile-lease").click(function(){
        $(".dashboard").toggleClass("is-overlaid");
        $(".is-mobile-lease").toggleClass("is-masked");
        $('html, body').animate({
            scrollTop: $(".is-mobile-lease").offset().top
        }, 500);
    });
    // Mobile Request Work Task Completion Methods
    $(".overlay__mobile-request-button-cancel, .overlay__mobile-request-dismiss").click(function(){
        $(".dashboard").toggleClass("is-overlaid");
        $(this).closest(".overlay__mobile-request-wrapper").toggleClass("is-masked");
        $('html, body').animate({
            scrollTop: $(".mobileNav").offset().top
        }, 300);
    });
    $(".overlay__mobile-request-button-submit").click(function(){
        $(this).closest(".overlay__mobile-request-wrapper").toggleClass("is-masked");
        $("#mobile-request-feedback").toggleClass("is-masked");
        $('html, body').animate({
            scrollTop: $("#mobile-request-feedback").offset().top
        }, 500);
        $("#mobile-request-feedback").toggleClass("animated fadeIn");
    });
    $(".overlay__mobile-request-feedback-button").click(function(){
        $(".dashboard").toggleClass("is-overlaid");
        $(this).closest(".overlay__mobile-request-wrapper").toggleClass("is-masked");
        $("#mobile-request-feedback").toggleClass("animated fadeIn");
        $('html, body').animate({scrollTop: $(".mobileNav").offset().top}, 300);
    });
    // Mobile Request Work Equipment Add
    $(".overlay__mobile-request-tag").click(function(){
        $(this).prev().toggleClass("is-masked");
        $(this).closest(".overlay__mobile-request-tag").toggleClass("is-masked");
    });
    // Mobile Request Work File Upload
    $(".overlay__mobile-request-upload").change(function(){
        $(this).next().removeClass("is-hidden");
    });
    // RFQ Vendor Invite Deny
    $(".rfq__invite-deny").click(function(){
        $(".rfq__invite").toggleClass("is-masked");
        $(".rfq__dismiss").toggleClass("is-masked");
    });
    $(".rfq__dismiss-submit").click(function(){
        $(".rfq__dismiss-submit").toggleClass("is-masked");
        $(".rfq__dismiss-feedback").toggleClass("is-masked");
    });
    // RFQ Vendor Submit
    $(".v-job__schedule-button").click(function(){
        $(this).next(".job__schedule-time-updated").addClass("animated fadeIn");
    });
    // RFQ Vendor Submit
    $(".rfq__bid-upload-file").change(function(){
            $(".rfq__bid-upload-filename").text(this.value);
            $(".rfq__bid-upload-approved").removeClass("is-hidden");
    });
     // Vendor Queue Upload File
    $(".vendor__bid-upload-file, .vendor__info-upload-file, .vendor__invoice-upload-file").change(function(){
        //$(".vendor__bid-upload-filename, .vendor__info-upload-filename, .vendor__invoice-upload-filename").text(this.value);
        $(".vendor__bid-upload-approved, .vendor__info-upload-approved, .vendor__invoice-upload-approved").toggleClass("is-hidden");
        $(".vendor__bid-upload-filename, .vendor__info-upload-filename, .vendor__invoice-upload-filename").toggleClass("is-hidden");
        $(".vendor__bid-button, .vendor__info-button, .vendor__invoice-button").attr("disabled", false);
    });
    $(".vendor__bid-button, .vendor__info-button, .vendor__invoice-button").click(function() {
        $(".vendor__bid-history, .vendor__info-history, .vendor__invoice-history").toggleClass("is-masked");
        $(".vendor__bid-upload-approved, .vendor__info-upload-approved, .vendor__invoice-upload-approved").toggleClass("is-hidden");
        $(".vendor__bid-upload-filename, .vendor__info-upload-filename, .vendor__invoice-upload-filename").toggleClass("is-hidden");
        $(".vendor__bid-form, .vendor__info-form, .vendor__invoice-form").toggleClass("is-masked");
        $(".vendor__bid-submission, .vendor__info-submission, .vendor__invoice-submission").toggleClass("is-slid-down");
    });
    $(".vendor__bid-submission-button, .vendor__info-submission-button, .vendor__invoice-submission-button").click(function() {
        $(".vendor__bid-submission, .vendor__info-submission, .vendor__invoice-submission").toggleClass("is-slid-down");
        $(".vendor__bid-form, .vendor__info-form, .vendor__invoice-form").toggleClass("is-masked");
    });
    // Job Page Upload File
    $(".v-job__bid-upload-file, .v-job__info-upload-file, .v-job__invoice-upload-file").change(function(){
        $(".v-job__bid-upload-filename, .v-job__info-upload-filename, .v-job__invoice-upload-filename").text(this.value);
        $(".v-job__bid-upload-approved, .v-job__info-upload-approved, .v-job__invoice-upload-approved").toggleClass("is-hidden");
        $(".v-job__bid-upload-filename, .v-job__info-upload-filename, .v-job__invoice-upload-filename").toggleClass("is-hidden");
        $(".v-job__bid-button, .v-job__info-button, .v-job__invoice-button").attr("disabled", false);
    });
    $(".v-job__bid-button-submit, .v-job__info-button-submit, .v-job__invoice-button-submit").click(function() {
        $(".v-job__bid-upload-approved, .v-job__info-upload-approved, .v-job__invoice-upload-approved").toggleClass("is-hidden");
        $(".v-job__bid-upload-filename, .v-job__info-upload-filename, .v-job__invoice-upload-filename").toggleClass("is-hidden");
        $(".v-job__bid-form, .v-job__info-form, .v-job__invoice-form").toggleClass("is-masked");
        $(".v-job__bid-submission, .v-job__info-submission, .v-job__invoice-submission").toggleClass("is-slid-down");
    });
    $(".v-job__bid-submission-button, .v-job__info-submission-button, .v-job__invoice-submission-button").click(function() {
        $(".v-job__bid-submission, .v-job__info-submission, .v-job__invoice-submission").toggleClass("is-slid-down");
        $(".v-job__bid-form, .v-job__info-form, .v-job__invoice-form").toggleClass("is-masked");
    });
    // Vendor Queue Bid History
    $(".vendor__bid-history-cta-button, .vendor__bid-history-pending-dismiss, .vendor__info-history-cta-button, .vendor__info-history-pending-dismiss, .vendor__invoice-history-cta-button, .vendor__invoice-history-pending-dismiss").click(function(){
            $(".vendor__bid-history, .vendor__info-history, .vendor__invoice-history").toggleClass("is-rolled-up");
            $(".vendor__bid-history-cta, .vendor__info-history-cta, .vendor__invoice-history-cta").toggleClass("is-masked");
            $(".vendor__bid-history-pending, .vendor__info-history-pending, .vendor__invoice-history-pending").toggleClass("is-masked");
            $(".vendor__bid-history-pending-dismiss, .vendor__info-history-pending-dismiss, .vendor__invoice-history-pending-dismiss").toggleClass("is-masked");
            $(".vendor__bid-history-list, .vendor__info-history-list, .vendor__invoice-history-list").toggleClass("is-masked");
    });
    $(".vendor__bid-history-item-remove, .vendor__info-history-item-remove, .vendor__invoice-history-item-remove").click(function(){
            $(this).closest(".vendor__bid-history-item, .vendor__info-history-item, .vendor__invoice-history-item").toggleClass("is-masked");
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
    $( "#datepicker, #datepicker2" ).datepicker();
    // Jquery List Sorting
    $(".is-sortable").sortable({
        axis: 'y',
        helper: 'clone',
        placeholder: "test-placeholder",
        start: function() {
           $('.test-placeholder').stop().animate({
               height: 72
           }, 400);
        },
        over: function() {
           $('.test-placeholder').stop().animate({
               height: 72
           }, 400);
        },
        change: function() {
           $('.test-placeholder').stop().animate({
               height: 72
           }, 400);
        }
    });
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
    //Toggle Subnav for O-Jobs
    $(".facility__projects-subnav-active").click(function(){
            $(".facility__projects-completed").addClass("is-masked");
            $(".facility__projects-active").removeClass("is-masked");
            $(".facility__projects-subnav-completed").removeClass("is-active");
            $(".facility__projects-subnav-active").addClass("is-active");
    });
    $(".facility__projects-subnav-completed").click(function(){
            $(".facility__projects-active").addClass("is-masked");
            $(".facility__projects-completed").removeClass("is-masked");
            $(".facility__projects-subnav-active").removeClass("is-active");
            $(".facility__projects-subnav-completed").addClass("is-active");
    });
    //Toggle Subnav for Vendor Dash
    $(".vendor__index-subnav-active").click(function(){
            $(".vendor__index-completed").addClass("is-masked");
            $(".vendor__index-active").removeClass("is-masked");
            $(".vendor__index-subnav-completed").removeClass("is-active");
            $(".vendor__index-subnav-active").addClass("is-active");
    });
    $(".vendor__index-subnav-completed").click(function(){
            $(".vendor__index-active").addClass("is-masked");
            $(".vendor__index-completed").removeClass("is-masked");
            $(".vendor__index-subnav-active").removeClass("is-active");
            $(".vendor__index-subnav-completed").addClass("is-active");
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
    //For Job Page
    $(".v-job__aside-subnav-equipment").click(function(){
            $(".v-job__qa").toggleClass("is-masked");
            $(".v-job__aside-subnav-qa").toggleClass("is-active");
            $(".v-job__aside-subnav-equipment").toggleClass("is-active");
            $(".v-job__equipment").toggleClass("is-masked");
    });
     $(".v-job__aside-subnav-qa").click(function(){
            $(".v-job__qa").toggleClass("is-masked");
            $(".v-job__equipment").toggleClass("is-masked");
            $(".v-job__aside-subnav-qa").toggleClass("is-active");
            $(".v-job__aside-subnav-equipment").toggleClass("is-active");
    });
    //For Modal Overlays
    $(".overlay-scope").click(function(){
            $(".page__wrapper").toggleClass("is-overlaid");
            $(".overlay").toggleClass("is-masked");
            $('html, body').animate({
                scrollTop: $("#overlay").offset().top
            }, 500);
    });
    $(".rfq__zoom-doc, .o-job__bid-zoom-item, .o-job__quote-zoom-item").click(function(){
            $(".page__wrapper").toggleClass("is-overlaid");
            $(".overlay").toggleClass("is-masked");
            $('html, body').animate({
                scrollTop: $(".overlay").offset().top
            }, 500);
    });
     $(".overlay__dismiss").click(function(){
            $(".page__wrapper").toggleClass("is-overlaid");
            $(".overlay").toggleClass("is-masked");
    });
    $(".project__equipment-piece, .proposal__procure-goods-part, .v-job__equipment-unit, .o-job__event-list-unit, .o-job__bid-equipment").click(function(){
            $(".page__wrapper").toggleClass("is-overlaid");
            $(".overlay-equipment").toggleClass("is-masked");
            $('html, body').animate({
                scrollTop: $(".overlay-equipment").offset().top
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
    $(document).on('click', '.account__settings-label-edit', function() {
        $(this).parent('.account__settings-label').next('.account__settings-input').attr("disabled", false);
        $(this).parent('.account__settings-label').toggleClass('is-locked');
        $(this).toggleClass("is-masked");
        $(this).siblings().toggleClass('is-masked');
    });
    $(document).on('click', '.account__settings-label-cancel', function() {
        $(this).parent('.account__settings-label').next('.account__settings-input').attr("disabled", true);
        $(this).parent('.account__settings-label').toggleClass('is-locked');
        $(this).toggleClass("is-masked");
        $(this).siblings().toggleClass('is-masked');
    });
    $(document).on('click', '.account__settings-label-save', function() {
        $(this).parent('.account__settings-label').next('.account__settings-input').attr("disabled", true);
        $(this).parent('.account__settings-label').toggleClass('is-locked');
        $(this).toggleClass("is-masked");
        $(this).siblings().toggleClass('is-masked');
    });
    $('.account__settings-head-toolbar-lock').click(function() {
        $(this).parents('.account__settings-card').find('.account__settings-input').attr("disabled", true);
        $(this).parents('.account__settings-card').find('.account__settings-fieldset').toggleClass('is-locked');
        $('.account__settings-head-toolbar-lock').toggleClass("is-masked");
        $('.account__settings-head-toolbar-edit').toggleClass("is-masked");
        $('.account__settings-confirm').toggleClass("is-masked");
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
    $(".dashboard, .events, .page__wrapper, main, .page__poster, .page__wrapper-bleed").click(function(){
        $("article.siteNav__alerts-popover section").addClass("is-masked");
    });
    // Adding Profile Picture in Account Settings
    function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                $('.account__settings-upload-preview-img').attr('src', e.target.result);
            }

            reader.readAsDataURL(input.files[0]);
        }
    }

    $(".account__settings-upload-input").change(function(){
        readURL(this);
        $('.account__settings-upload-preview').addClass('is-uploaded');
    });
});







