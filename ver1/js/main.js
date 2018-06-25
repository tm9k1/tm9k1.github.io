
$(document).ready(function () {
    $('.projects').hide(0);
    $('.contacts').hide(0);
    $('.about-section').hide(0);
    initializeSocialLinks();
})

function initializeSocialLinks() {
    $('.fa-facebook').click(function () {
        window.open("https://www.facebook.com/likeskabhukha", "facebook");
    });
    $('.fa-twitter').click(function () {
        window.open("https://twitter.com/brute4s99", "twitter");
    });
    $('.fa-linkedin').click(function () {
        window.open("https://www.linkedin.com/in/brute4s99/", "linkedin");
    });
    $('.fa-medium').click(function () {
        window.open("https://medium.com/@brute4s99", "medium");
    });
    $('.fa-github').click(function () {
        window.open("https://github.com/brute4s99", "github");
    });

    $('.fa-envelope').click(function () {
        location.href = "mailto:1.piyush.agg@gmail.com";
    });
    $('.fa-google-plus').click(function () {
        window.open("https://plus.google.com/+piyushaggarwal002", "Google Plus");
    });

}
