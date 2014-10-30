$(document).ready(function() {
    $("#password-retreive").click(function(){
            $(".logging-in").toggleClass("is-masked");
            $(".forgotten").toggleClass("is-masked");
    });

    $("#revert-to-sign-in").click(function(){
            $(".logging-in").toggleClass("is-masked");
            $(".forgotten").toggleClass("is-masked");
    });

    $("#interest-submit").click(function(){
            $(".interest").toggleClass("is-masked");
            $(".alert").toggleClass("is-hidden");
            $(".alert").addClass("animated fadeIn");
            $(".interest").addClass("is-hidden");
    });
});