// Initialise FlexSlider for Carousels
$(document).ready(function() {
    $('.flexslider').flexslider({
        animation: "fade",
        controlNav: false,
        directionNav: true,
        slideshowSpeed: 5000,
        animationSpeed: 600,
        touch: true
    });
});

// Off Canvas Sliding
$(document).ready(function(){
  // Menu button click
  $('#js-menu-trigger,#js-menu-screen').on('click touchstart', function(e){
    // $('#js-body').toggleClass('no-scroll');
    $('#js-menu, #js-menu-screen').toggleClass('is-visible');
    $('#js-menu-trigger').toggleClass('slide close');
    // $('#masthead, #page-wrapper').toggleClass('slide');
    e.preventDefault();
  });
});

// FitVids
$(document).ready(function(){
	// Target your .container, .wrapper, .post, etc.
	$("#main").fitVids();
});

// Table of Contents title. Change text to localize
$("#markdown-toc").prepend('<li><h6>{{ site.data.messages.locales[site.locale].overview }}</h6></li>');


