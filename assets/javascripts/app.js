var svg_animation = (function() {
  'use strict';

  function init() {
    odair_the_fucking_pug_animation();
  }

  function odair_the_fucking_pug_animation() {

    var tmax_opts = {
      delay: 0.7,
      repeat: -1,
      repeatDelay: 1.5,
      yoyo: true
    };

    var tmax_tl = new TimelineMax(tmax_opts),
        shapes = $('svg > g polygon, svg > g polyline'),
        stagger = 0.00475,
        duration = 1.5;

    var staggerFrom = {
      scale: 0,
      opacity: 0,
      transformOrigin: 'top right',
    };

    var staggerTo = {
      opacity: 1,
      scale: 1,
      ease: Elastic.easeOut.config(2,1)
    };

    tmax_tl.staggerFromTo(shapes, duration, staggerFrom, staggerTo, stagger, 0);

    $('svg').on('mouseover', function() {
      tmax_tl.pause();
    });

    $('svg').on('mouseout', function() {
      tmax_tl.play();
    });
  }

  return {
    init: init
  };

}());

$(document).ready(function() {
  svg_animation.init();
});
