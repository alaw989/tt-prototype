$(document).ready(function(){

  $('.scroll').fadeIn(5000);

  $('.lb-slides').slick({
    cssEase: 'ease-in-out',
    mobileFirst: true,
    horizontalSwiping: false,
    fade: true,
    speed: 600,
    infinite: false,
    verticalSwiping: true,
    arrows: false
  }).on('afterChange', function(E, slick, cur) {

    if (cur === slick.$slides.length - 1) {

      $('.slick-current').addClass('last-slide');
      $('.scroll').fadeOut(1000);

    } else {

      $('.scroll').fadeIn(1000);
    }
  }).bind('mousewheel', function(e) {

    if(e.originalEvent.wheelDelta / 120 > 0) {

      $(this).slick('slickPrev');

    } else {

      $(this).slick('slickNext');
    }
  });

  $('.card-cont').slick({
    arrows: true,
    infinite: true,
    speed: 300,
    prevArrow: $('.arrowLeft'),
    nextArrow: $('.arrowRight'),
    mobileFirst: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [{
      breakpoint: 720,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      }
    },
    {
      breakpoint: 1320,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      }
    }
  ]
}).on('init', function (event, slick, direction) {

  // check to see if there are one or less slides
  if (!($('.slider .slick-slide').length > 1)) {

    // remove arrows
    $('.slider__arrow').hide();
  }
});
});

particlesJS("starfield", {
  "particles": {
    "number": {
      "value": 1000,
      "density": {
        "enable": true,
        "value_area": 789.1476416322727
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.48927153781200905,
      "random": false,
      "anim": {
        "enable": true,
        "speed": 0.2,
        "opacity_min": 0,
        "sync": false
      }
    },
    "size": {
      "value": 1,
      "random": true,
      "anim": {
        "enable": true,
        "speed": 2,
        "size_min": 0,
        "sync": false
      }
    },
    "line_linked": {
      "enable": false,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 0.01,
      "direction": "none",
      "random": true,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "bubble"
      },
      "onclick": {
        "enable": false,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 83.91608391608392,
        "size": 1,
        "duration": 3,
        "opacity": 1,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});
