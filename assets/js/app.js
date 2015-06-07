window.REMODAL_GLOBALS = {
  NAMESPACE: 'modal',
  DEFAULTS: {
    hashTracking: false
  }
};

$(document).ready(function() {
  var sizes = ['small', 'smallmax', 'medium', 'almost', 'large'];
  $.each(sizes, function(s) {
    if (!$('#debug').length) {
      $('body').append('<div id="debug" style="display:none;"></div>');
    }
    $('body #debug').append('<div id="debugsize" class="debugsize ' + sizes[s] + '">' + sizes[s] + '</div>');
  });
  start();
  widthG = $(window).width();
  $(window).resize(function() {
    if ($(window).width() != widthG) {
      $('#content #masonry-container >.item').css({
        'opacity': 0
      });
      start();
      widthG = $(window).width();
      resizeG = true;
    }
    resizeG = false;
  });

  $(document).mouseup(function(e) {
    var container = $(".search-box input");

    if (!container.is(e.target) && container.has(e.target).length === 0) {
      container.animate({
        'width': 0,
        'opacity': 0,
      });
    }
  });


  //if home
  if ($('.home').length) {
    var mySwiper = new Swiper('.swiper-container', {
      speed: 1500,
      //  autoplay: 15000,
      direction: 'horizontal',
      pagination: '.swiper-pagination',
      paginationClickable: true,

      loop: true,
      nextButton: '.swiper-button-next',
      prevButton: '.swiper-button-prev',
    });
    if ($('#calendar').length) {
      var d = new Date();
      var n = d.getMonth();
      var y = d.getFullYear();
      $('#calendar').html('');
      calendar(n, y);
      calendarEvents();
    }
    $('.downarrow').click(function(event) {
      if ($(document).scrollTop() <= 200) {
        event.preventDefault();
        $('html, body').stop().animate({
          scrollTop: '+=500'
        }, 1500, 'easeOutBack');
      } else {
        event.preventDefault();
        $('html, body').stop().animate({
          scrollTop: '0'
        }, 2500, 'easeOutBack');

      }
    });

  }
  //if verEscuchar
  if($('.section-ver-escuchar').length){
    $('#content-inside .in-frame').addClass('online');

  }

  //if agenda
  if ($('.agenda').length) {

  }


  if ($('#calendar').length) {
    if ($('#calendar').length) {

      var d = new Date();
      var n = d.getMonth();
      var y = d.getFullYear();
      $('#calendar').html('');
      calendar(n, y);
      calendarEvents();
      $(".calendar-month").fitText(0.5);
    }
  }


  //if agenda in
  if ($('.agenda-in').length) {
    // var swiper = new Swiper('.swiper-container', {
    //   speed: 1500,
    //   autoplay: 4000,
    //   pagination: '.swiper-pagination',
    //   slidesPerView: '2',
    //   paginationClickable: true,
    //   spaceBetween: 5
    // });
    if ($('#calendar').length) {

      var d = new Date();
      var n = d.getMonth();
      var y = d.getFullYear();
      $('#calendar').html('');
      calendar(n, y);
      calendarEvents();
    }
  }


  //if map
  if ($('#map_canvas').length) {

    var currSize = sizeOrder(sizeDetector());
    if (currSize >= 4) {
      initializeGmap(17);
    } else {
      initializeGmap(17);
      center = cckposs;
      map.setCenter(center);

    }

    $(window).resize(function() {
      if ($(window).width() != widthG) {
        var currSize = sizeOrder(sizeDetector());
        if (currSize >= 4) {
          initializeGmap(17);
        } else {
          initializeGmap(17);
          center = cckposs;
          map.setCenter(center);
        }
        widthG = $(window).width();
      }
    });
  }

  //if plano to zoom
  if ($('.plano').length) {
    var planoimg = $('.plano').find('img').attr('src');
    $('.plano').zoom({
      url: planoimg
    });
    //accordion menus for mobile
    $('.plano-sidebar').find('.acc-trigger').click(function() {
      $(this).next().slideToggle('fast');
    });
    $('.plano-sidebar-details').find('.acc-trigger').click(function() {
      $(this).next().slideToggle('fast');
    });
    self = this;
    this.currSize = sizeOrder(sizeDetector());
    $(window).resize(function() {
      if (sizeOrder(sizeDetector()) != self.currsize) {
        setTimeout(function() {
          if (self.currSize >= 3) {
            $('.acc-content').css({
              'display': 'block'
            });
            console.log('block');
          } else {
            $('.acc-content').css({
              'display': 'none'
            });
          }
        }, 1000);
        self.currSize = sizeOrder(sizeDetector());
      }
    });
  }


  //if VER/ESCUCHAR
  if ($('.recent-posts-grid').length) {
    var veSwipper = new Swiper('.swiper-container', {

      direction: 'horizontal',
      pagination: '.swiper-pagination',
      paginationClickable: true,

      loop: true,
      nextButton: '.page-nav-next',
      prevButton: '.page-nav-prev',
    });
    var refreshIntervalId;
    fadeInItems($('.recent-posts-grid li'));
    delegateOnlineClicks();
    if ($('.recent-posts-grid li').length <= 3) {
      $('#infinite-loader').remove();
    }
  }
  if ($('.overlay').length) {
    var timerId;
    $(".overlay").hover(function() {
        self = this;
        if (!timerId) {
          timerId = window.setTimeout(function() {
            timerId = null;
            $(self).slideUp('fast');
            console.log(self);
          }, 1000);
        }
      },
      function() {
        if (timerId) {
          window.clearTimeout(timerId);
          timerId = null;
        } else {
          //oposite
        }
      });


  }

  //if ver/escuchar-in
  if ($('.relacionados-grid').length) {
    if ($('.relacionados-grid li').length <= 3) {
      $('#infinite-loader').remove();
    }
  }
  if (!$('.hidden-menu').length) {
    $('body').append('<div class="hidden-menu" style="display:none;" ></div>');
    $('.hidden-menu').html($('section#site-navigation ').clone());
    $('.hidden-menu').append($('section#header ').clone());
    $('.search-box').unbind('click');
    $('.search-box').click(function(e) {
      e.preventDefault();
      $(this).find('input').animate({
        'width': "120px",
        'opacity': 1,
      }, 300);
    });
  }

  $(document).scroll(function() {
    if ($(document).scrollTop() >= 200) {
      $('.hidden-menu').fadeIn();
      $('.downarrow').html('<i class="fa fa-arrow-circle-o-up"></i>');
    }
    if ($(document).scrollTop() <= 200) {
      $('.hidden-menu').fadeOut();
      $('.downarrow').html('<i class="fa fa-arrow-circle-o-down"></i>');
    }
  });

  //mobile menu
  $('.menu-toggle').click(function() {
    $('.modal-container').html('');
    if (!$(".modal-container #primary-menu").length) {
      $(".modal-container ").html($('#primary-menu ').first().clone());
    }
    $('.modal-container >#primary-menu >li a').css({
      'margin-left': '-1000px',
    }).parent().append('<span class="fa fa-caret-down"></span>');
    setTimeout(function() {
      slideToMenuItems();
    }, 0);
    $('.modal-container >#primary-menu >li > a').click(function(e) {
      e.preventDefault();
      $('.modal-container').find('.dropdown').not($(this).next()).slideUp();
      if ($(this).next().css('display').toLowerCase() == 'block') {
        $(this).next().slideUp('fast');
      } else {
        $(this).next().slideDown('fast');
      }
    });
  });
});

function slideToMenuItems() {
  var lis = $('.modal-container >#primary-menu >li a');
  var delay = 0;
  lis.each(function() {
    var $li = $(this);
    $li.queue('fade', function(next) {
      $li.delay(delay).animate({
        'margin-left': 0
      }, 500, $.bez([0.42, 0, 0.58, 1]), function() {
        next();
      });
    });
    $li.dequeue('fade');
    delay += 20;
  });
}

function mazoncck() {
  $('#masonry-container').imagesLoaded(function() {
    if (!$('.grid-sizer').length) {
      var columnWidth = 275;
      if (sizeDetector('medium')) {
        columnWidth = 160;
      } else if (sizeDetector('almost')) {
        columnWidth = 10;
      } else if (sizeDetector('large')) {
        columnWidth = 275;

      }
      percentPos=  false;
      gut= 0;

    }else{
      columnWidth = '.grid-sizer';
      percentPos=  true;
      gut='.grid-gutter';

    }
    var $container = $('#masonry-container');
    $container.masonry({
      columnWidth: columnWidth,
      itemSelector: '.item',
      transitionDuration: 200,
      percentPosition: percentPos,
      gutter:gut,
    });
    fadeInItems($('#masonry-container >.item'));
  });
}

function sizeDetector(size) {
  var rn;
  $('.debugsize').each(function() {
    //console.log(  $(this).attr('class'));
    if ($(this).css('display').toLowerCase() == 'block') {
      var sizee = $(this).attr('class').split(' ').pop();
      if (size) {
        if (size == sizee) {
          rn = true;
        } else {
          rn = false;
        }
      } else {
        rn = sizee;
      }
    }
  });
  return rn;
}

function sizeOrder(size) {
  var sizz = ['small', 'smallmax', 'medium', 'almost', 'large'];
  return sizz.indexOf(size);
}

function sliderHeight() {
  var currSize = sizeOrder(sizeDetector());
  if (currSize !== 0) {
    $('#hero').removeClass();
    $('#hero').addClass('vh_height' + (currSize + 1) * 17);
    //  $('#hero').addClass('vh_height81');

  } else {
    $('#hero').removeClass();
    $('#hero').addClass('vh_height' + (currSize + 1) * 30);
  }
}

function start() {
  if ($('#masonry-container').length) {
    setTimeout(function() {
      mazoncck();
      console.log('bla');
    }, 0);
  }
  if ($('#hero .swiper-container').length) {
    sliderHeight();
  }



}

//fadeIn pogressive
function fadeInItems(lis) {
  var delay = 0;
  lis.each(function() {
    var $li = $(this);
    $li.queue('fade', function(next) {
      $li.delay(delay).animate({
        'opacity': 1
      }, 500, next);
    });
    $li.dequeue('fade');
    delay += 500;
  });
}

function delegateOnlineClicks() {
  $('.infiniteScrollButton').click(function() {
    appendEl(500, 3);
    $(this).unbind('click');


  });
}

function appendEl(interval, limit) {

  numm = 0;

  intervalId = setInterval(function() {


    $item = $('.recent-posts-grid-bottom li ').eq(getRandomInt(0, 3)).clone().css({
      'display': 'none'
    });


    if ($('.recent-posts-grid').last().hasClass('recent-posts-grid-top') || $('.recent-posts-grid').last().hasClass('recent-posts-grid-top-alt')) {
      if ($('.recent-posts-grid').last().hasClass('recent-posts-grid-top-alt')) {

        if ($('.recent-posts-grid').last().find('li').length < 2) {
          $('.recent-posts-grid').last().find('ul').append('<li><ul></ul></li>');
          $('.recent-posts-grid').last().find('ul li ul').append($item);
          $(window).scroll();
        } else {
          $('.recent-posts-grid').last().find('ul').append($item);
          $(window).scroll();
          $('.inner-content').append('<div class="recent-posts-grid recent-posts-grid-bottom"><ul></ul></div>');

        }
      } else {
        if ($('.recent-posts-grid').last().find('li').length < 4) {
          //insert
          $('.recent-posts-grid').last().find('ul li ul').append($item);
          $(window).scroll();
        } else {
          $('.inner-content').append('<div class="recent-posts-grid recent-posts-grid-bottom"><ul></ul></div>');
          //insert
          $('.recent-posts-grid').last().find('ul').append($item);
          $(window).scroll();
        }
      }
    } else {
      if ($('.recent-posts-grid').last().find('li').length < 3) {
        $('.recent-posts-grid').last().find('ul').append($item);
        $(window).scroll();
      } else {
        if ($('.recent-posts-grid:nth-last-child(2)').hasClass('recent-posts-grid-top')) {
          $('.inner-content').append('<div class="recent-posts-grid recent-posts-grid-top-alt"><ul></ul></div>');

        } else {
          $('.inner-content').append('<div class="recent-posts-grid recent-posts-grid-top"><ul></ul></div>');
          $('.recent-posts-grid').last().find('ul').append($item);
          $('.recent-posts-grid').last().find('ul').append('<li><ul></ul></li>');
        }
      }
    }
    $('.recent-posts-grid li').imagesLoaded(function() {
      $('.recent-posts-grid li').css({
        'display': 'block'
      });
    });
    numm++;
    if (numm > 2) {
      clearInterval(intervalId);
      delegateOnlineClicks();

    }
  }, interval);


}


function calendarEvents() {
  $('.calendar-prev').click(function(e) {
    e.preventDefault();
    $('#calendar').html('');

    var curr = parseInt($(this).attr('data-currentmonth'));
    var currY = parseInt($(this).attr('data-currentyear'));
    if (curr === 0) {
      curr = 12;
      currY--;

    }
    calendar(curr - 1, currY);
    calendarEvents();

  });
  $('.calendar-next').click(function(e) {
    e.preventDefault();
    $('#calendar').html('');

    var curr = parseInt($(this).attr('data-currentmonth'));
    var currY = parseInt($(this).attr('data-currentyear'));
    if (curr == 11) {
      curr = -1;
      currY++;
    }
    calendar(curr + 1, currY);
    calendarEvents();
  });

}



function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function initializeGmap(zoomx) {
  var latlng = new google.maps.LatLng(-34.6041528, -58.3746608);
  var settings = {
    zoom: zoomx,
    //scrollwheel: false,
    center: latlng,
    mapTypeControl: true,
    mapTypeControlOptions: {
      style: google.maps.MapTypeControlStyle.DROPDOWN_MENU
    },
    navigationControl: true,
    navigationControlOptions: {
      style: google.maps.NavigationControlStyle.SMALL
    },
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };

  window.map = new google.maps.Map(document.getElementById("map_canvas"), settings);


  var cck = new google.maps.MarkerImage('assets/img/mapa/cck.png',
    new google.maps.Size(133, 128),
    new google.maps.Point(0, 0),
    new google.maps.Point(0, 0)
  );

  var cckPos = new google.maps.LatLng(-34.6015993, -58.3704000);
  var cckMarker = new google.maps.Marker({
    position: cckPos,
    map: map,
    icon: cck,
    title: "Centro Cultural Kirchner",
    zIndex: 4
  });
  window.cckposs = cckPos;

  var lineac = new google.maps.MarkerImage('assets/img/mapa/lineac.png',
    new google.maps.Size(152, 41),
    new google.maps.Point(0, 0),
    new google.maps.Point(0, 0)
  );
  var lineacPos = new google.maps.LatLng(-34.6012993, -58.3812000);
  var lineacMarker = new google.maps.Marker({
    position: lineacPos,
    map: map,
    icon: lineac,
    title: "Subte Linea C - Estación Esmeralda",
    zIndex: 5
  });

  var lineab = new google.maps.MarkerImage('assets/img/mapa/lineab.png',
    new google.maps.Size(205, 41),
    new google.maps.Point(0, 0),
    new google.maps.Point(0, 0)
  );
  var lineabPos = new google.maps.LatLng(-34.602400, -58.3740000);
  var lineabMarker = new google.maps.Marker({
    position: lineabPos,
    map: map,
    icon: lineab,
    title: "Subte Linea B - Estación Leandro N. Alem",
    zIndex: 6
  });

  var lineaa = new google.maps.MarkerImage('assets/img/mapa/lineaa.png',
    new google.maps.Size(171, 41),
    new google.maps.Point(0, 0),
    new google.maps.Point(0, 0)
  );
  var lineaaPos = new google.maps.LatLng(-34.608500, -58.3713000);
  var lineaaMarker = new google.maps.Marker({
    position: lineaaPos,
    map: map,
    icon: lineaa,
    title: "Subte Linea A - Estación Plaza de Mayo",
    zIndex: 7
  });

  var linead = new google.maps.MarkerImage('assets/img/mapa/linead.png',
    new google.maps.Size(171, 41),
    new google.maps.Point(0, 0),
    new google.maps.Point(0, 0)
  );
  var lineadPos = new google.maps.LatLng(-34.607200, -58.3765000);
  var lineadMarker = new google.maps.Marker({
    position: lineadPos,
    map: map,
    icon: linead,
    title: "Subte Linea D - Estación Catedral",
    zIndex: 8
  });

  var lineae = new google.maps.MarkerImage('assets/img/mapa/lineae.png',
    new google.maps.Size(171, 41),
    new google.maps.Point(0, 0),
    new google.maps.Point(0, 0)
  );
  var lineaePos = new google.maps.LatLng(-34.608500, -58.3763000);
  var lineaeMarker = new google.maps.Marker({
    position: lineaePos,
    map: map,
    icon: lineae,
    title: "Subte Linea E - Estación Bolivar",
    zIndex: 9
  });

}
