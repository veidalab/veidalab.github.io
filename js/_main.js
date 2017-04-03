// Initialise FlexSlider for Carousels
$(document).ready(function() {
    $('.flexslider').flexslider({
        animation: 'fade',
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
	$('#main').fitVids();
});

$(document).ready(function(){

    // Setup the form to watch for the submit event
    $('#myForm').submit(function(e){
        e.preventDefault();
        e.stopPropagation();
        console.log(this.action);

        // Grab the elements from the form to make up
        // an object containing name, email and message
        var data = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            message: document.getElementById('message').value
        };

        $.ajax({
            type: "POST",
            url: this.action,
            data: data,
            success: function(data) {
                window.location.href = "/thanks/";
            },
            dataType: "json",
            error: function (xhr, ajaxOptions, thrownError) {
                var errorMessage = 'Error! Email not sent!';
                if (thrownError == 'Bad Request') {
                    errorMessage = xhr.responseJSON['Message'].split(': ')[1];
                }
                $('#response').html(errorMessage).addClass('error').fadeIn('fast');
            }
        });
    });
});

// Table of Contents title. Change text to localize
$('#markdown-toc').prepend('<li><h6>{{ site.data.messages.locales[site.locale].overview }}</h6></li>');


