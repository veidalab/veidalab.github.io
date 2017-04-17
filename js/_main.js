// Initialise FlexSlider for Carousels
$(document).ready(function () {
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
$(document).ready(function () {
    // Menu button click
    $('#js-menu-trigger,#js-menu-screen').on('click touchstart', function (e) {
        // $('#js-body').toggleClass('no-scroll');
        $('#js-menu, #js-menu-screen').toggleClass('is-visible');
        $('#js-menu-trigger').toggleClass('slide close');
        // $('#masthead, #page-wrapper').toggleClass('slide');
        e.preventDefault();
    });
});

// FitVids
$(document).ready(function () {
    // Target your .container, .wrapper, .post, etc.
    $('#main').fitVids();
});

$(document).ready(function () {

    // Setup the form to watch for the submit event
    $('#myForm').submit(function (e) {
        e.preventDefault();
        e.stopPropagation();
        console.log(this.action);

//        Grab the elements from the form to make up
//        an object containing name, email and message
        var data = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            message: document.getElementById('message').value
        };

        if (document.getElementById('subscribecheck').checked) {
            $('#subscribe_email').val(data.email);
            $('#subscribeForm').submit();
        }

        $.ajax({
            type: "POST",
            url: this.action,
            data: JSON.stringify(data),
            success: function (data) {
                //window.location.href = "/thanks/";
                $('#msg-response').html("Message sent!").addClass('success').fadeIn('fast');
                ga('send', 'pageview', '/goals/contact-us');
            },
            dataType: "json",
            contentType: "application/json",
            error: function (xhr, ajaxOptions, thrownError) {
                var errorMessage = 'Error! Email not sent!';
                if (thrownError == 'Bad Request') {
                    errorMessage = xhr.responseJSON['Message'].split(': ')[1];
                }
                $('#msg-response').html(errorMessage).addClass('error').fadeIn('fast');
            }
        });
    });

    // Setup the form to watch for the submit event
    $('#subscribeForm').submit(function (e) {
        e.preventDefault();
        e.stopPropagation();
        console.log(this.action);

//        Grab the elements from the form to make up
//        an object containing name, email and message
        var data = {
            email: document.getElementById('subscribe_email').value
        };

        $.ajax({
            type: "POST",
            url: this.action,
            data: JSON.stringify(data),
            success: function (data) {
                //window.location.href = "/thanks/";
                $('#subscribe_response').html("Message sent!").addClass('success').fadeIn('fast');
                ga('send', 'pageview', '/goals/subscribe');
            },
            dataType: "json",
            contentType: "application/json",
            error: function (xhr, ajaxOptions, thrownError) {
                var errorMessage = 'Error! Email not sent!';
                if (thrownError == 'Bad Request') {
                    errorMessage = xhr.responseJSON['Message'].split(': ')[1];
                }
                $('#subscribe_response').html(errorMessage).addClass('error').fadeIn('fast');
            }
        });
    });
});

// Table of Contents title. Change text to localize
$('#markdown-toc').prepend('<li><h6>{{ site.data.messages.locales[site.locale].overview }}</h6></li>');

particlesJS("particles-js", {
    "particles": {
        "number": {"value": 100, "density": {"enable": true, "value_area": 800}},
        "color": {"value": "#FFFFFF"},
        "shape": {
            "type": "circle",
            "stroke": {"width": 0, "color": "#FFFFFF"},
            "polygon": {"nb_sides": 5},
            "image": {"src": "img/github.svg", "width": 100, "height": 100}
        },
        "opacity": {
            "value": 0.5,
            "random": false,
            "anim": {"enable": false, "speed": 1, "opacity_min": 0.1, "sync": false}
        },
        "size": {"value": 3, "random": true, "anim": {"enable": false, "speed": 40, "size_min": 0.1, "sync": false}},
        "line_linked": {
            "enable": true,
            "distance": 157.82952832645452,
            "color": "#FFFFFF",
            "opacity": 0.25252724532232723,
            "width": 0.7891476416322727
        },
        "move": {
            "enable": true,
            "speed": 6,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {"enable": false, "rotateX": 600, "rotateY": 1200}
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {"enable": true, "mode": "repulse"},
            "onclick": {"enable": true, "mode": "push"},
            "resize": true
        },
        "modes": {
            "grab": {"distance": 400, "line_linked": {"opacity": 1}},
            "bubble": {"distance": 400, "size": 40, "duration": 2, "opacity": 8, "speed": 3},
            "repulse": {"distance": 200, "duration": 0.4},
            "push": {"particles_nb": 4},
            "remove": {"particles_nb": 2}
        }
    },
    "retina_detect": true
});
