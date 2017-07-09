$(document).ready(function() {

  slide_box('.slider_box');
  tours_hider('.slider_box')

});

/* Functions */
function tours_hider (blocks) {
  $(blocks).find('.slide').each(function() {
    var sl = this;
    carusel ($(sl).find('.tours'), 2, 290, '.1', $(sl).find('.more a'), '.wr', 2500, '', 'left');
  });
}

function carusel (block, in_window, width, left, right, wrap, time, points, napr) {
  var th = 0;
  var max = $(block).find('.tour').length - in_window;
  var hover = false;

  setTimeout(function() {
    auto();
  }, time);

  $(block).hover(function() {
    hover = true;
  }, function() {
    hover = false;
  });

  $(block).find(left).click(function() {
    to(th - 1);
    return false;
  });
  $(right).click(function() {
    to(th + 1);
    return false;
  });

  function auto() {
    if (!hover) {
      to(th + 1);
    }
    setTimeout(function() {
      auto();
    }, time);
  }

  if (points) {
    $(block).find(points + ' a').click(function() {
      n = $(this).prevAll().length
      to(n);
      return false;
    });
  };

  function to (num) {
    if (num < 0)   { num = max };
    if (num > max) { num = 0 };
    if (napr == 'top') {
      $(block).find(wrap).animate({
        'margin-top': num * -1 * width
      }, 500, function() {
        th = num;
      });
    }
    if (napr == 'left') {
      $(block).find(wrap).animate({
        'margin-left': num * -1 * width
      }, 500, function() {
        th = num;
      });
    }
    if (points) {
      $(block).find(points + ' a').removeClass('active').addClass('passive');
      $(block).find(points + ' a:eq(' + num + ')').removeClass('passive').addClass('active');
    }
  }
}


function slide_box (block) {
  $(block).find('.black ul li a').click(function() {
    var c = $(this).parent().prevAll().length;
    $(block).find('.w').animate({'margin-left': -1 * 646 * c}, 400);
    return false;
  });
}