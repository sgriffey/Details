$(document).ready(function() {
    $("#password-retreive").click(function(){
            $(".logging-in").toggleClass("is-masked");
            $(".forgotten").toggleClass("is-masked");
    });

    $("#revert-to-sign-in").click(function(){
            $(".logging-in").toggleClass("is-masked");
            $(".forgotten").toggleClass("is-masked");
    });
});