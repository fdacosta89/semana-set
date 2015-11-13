/*var mouseY = 0;

document.addEventListener('mousemove',function(e) {
    mouseY = e.clientY || e.pageY;
    if (mouseY < 100) {
        $("#menu-nav").show('clip');
    }
},false);

$(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
        $("#menu-nav").hide('clip');
    }
    else
        $("#menu-nav").show('clip');
});

$("#menu-nav").mouseout(function() {
    if ($(window).scrollTop() > 100)
        $("#menu-nav").hide('clip');
})*/
/*
$(window).scroll(function(event) {
    if (($(".navbar").offset().top > 100 )) {
        $("#menu-nav").hide('clip');
    } else {
        $("#menu-nav").show('clip');
    }
});

var mouseY = 0;

document.addEventListener('mousemove', function(e) {
  mouseY = e.clientY || e.pageY;
  if(mouseY < 100) {
     $('nav').show("drop");
  }
}, false);

$(window).scroll(function() {
  var sc = ($(this).scrollTop() > 100) ? $('nav').hide("drop") : $('nav').show("drop");
});

$('nav').mouseout(function() {
  if($(window).scrollTop() > 100) {
     $('nav').hide("drop");
  }
});
*/

$(function() {

    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});
