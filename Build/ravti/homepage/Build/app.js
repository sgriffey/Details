$(document).ready(function() {
    $("#password-retreive").click(function(){
            $(".logging-in").toggleClass("not-displayed");
            $(".forgotten").toggleClass("not-displayed");
    });

    $("#revert-to-sign-in").click(function(){
            $(".logging-in").toggleClass("not-displayed");
            $(".forgotten").toggleClass("not-displayed");
    });

    $("#interest-submit").click(function(){
            $(".interest").toggleClass("is-masked");
            $(".alert").toggleClass("is-hidden");
            $(".alert").addClass("animated fadeIn");
            $(".interest").addClass("is-hidden");
    });

    $(".capture__form-button").click(function(){
            $(".capture__form-info").toggleClass("is-masked");
            $(".capture__form-field-feedback").toggleClass("not-displayed is-hidden");
            $(".feedback").addClass("alert-success animated fadeIn");
            $(".capture__form-info").addClass("is-hidden");
    });

    $(".login__form-button").click(function(){
            $(".login__form-field-feedback").toggleClass("not-displayed is-hidden");
            $(".feedback").addClass("alert-warning animated fadeIn");
    });
});