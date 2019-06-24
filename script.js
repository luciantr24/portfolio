// nav bar 
var open = document.getElementById('hamburger');
var changeIcon = true;

open.addEventListener("click", function(){

    var overlay = document.querySelector('.overlay');
    var nav = document.querySelector('nav');
    var icon = document.querySelector('.menu-toggle i');

    overlay.classList.toggle("menu-open");
    nav.classList.toggle("menu-open");

    if (changeIcon) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-times");

        changeIcon = false;
    }
    else {
        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");
        changeIcon = true;
    }
});
//up button
// ===== Scroll to Top ==== 
 //Smooth Scroll down
 $('#scrollDown').click(function(){
    $('html, body').animate({
        scrollTop:$('#sectionAbout').offset().top
    }, 1000);
    return false;
});

//Smooth Scroll Top
$('#scrolltop').click(function(){
    $('html, body').animate({
        scrollTop:0
    }, 1500);
    return false;
});

$(window).scroll(function(){
    if($(window).scrollTop() > $('#homepageHeaderSection').height)
    {
        $('#scrolltop').fadeIn('slow');
    }
});
$(window).scroll(function(){
    if($(window).scrollTop() < $('#homepageHeaderSection').height)
    {
        $('#scrolltop').fadeOut('fast');
    }
});