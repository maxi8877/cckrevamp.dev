window.REMODAL_GLOBALS = {
  NAMESPACE: 'modal',
  DEFAULTS: {
    hashTracking: false
  }
};
window.onload = function () {

}
$(document).ready(function() {
  var element = $('#slider-video');
  element.muted = true;

  var sizes = ['small', 'smallmax', 'medium', 'almost', 'large'];
  $.each(sizes, function(s) {
    if (!$('#debug').length) {
      $('body').append('<div id="debug" style="display:none;"></div>');
    }
    $('body #debug').append('<div id="debugsize" class="debugsize ' + sizes[s] + '">' + sizes[s] + '</div>');
  });

  //init
  start();
  stickySidebarOptions();

  //on resize
  widthG = $(window).width();
  $(window).resize(function() {
    if ($(window).width() != widthG) {
      $('#content #masonry-container >.item').css({
        'opacity': 0
      });
      start();
      stickySidebarOptions();
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


  //Sidebar Sticking
  $('.sticky-sidebar').fixTo('.inner-content', {
    //  className : 'my-class-name',
    //  zIndex: 10,
    //  mind: '#header',
    top: 100
  });



  //if home
  if ($('.home').length) {
    var mySwiper = new Swiper('.swiper-container', {
      speed: 1500,
      autoplay: 6000,
      direction: 'horizontal',
      pagination: '.swiper-pagination',
      paginationClickable: true,
      loop: true,
      nextButton: '.swiper-button-next',
      prevButton: '.swiper-button-prev',
    });

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



  //create Calendar
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

  //option fotos 1
  // if ($('.fotos-container').length) {
  //   $('.fotos-container article').hoverdir({
  //     speed: 300, // Times in ms
  //     easing: 'ease',
  //     hoverDelay: 500, // Times in ms
  //     inverse: false,
  //     hoverElem: 'div'
  //   });
  // }
  //
  // $('.fotos-container article').hoverdir({
  //   speed: 300, // Times in ms
  //   easing: 'ease',
  //   hoverDelay: 500, // Times in ms
  //   inverse: false,
  //   hoverElem: 'div'
  // });


  //option fotos 2
  if ($('.fotos-container-2').length) {
    $('.fotos-container-2 article').each(function(index, item) {
      $('.fotos-container-2 article').eq(index).imagesLoaded(function() {
        $('.fotos-container-2 article').eq(index).css({
          'opacity': 1
        });
      });
    });
    setTimeout(function() {
      fadeOutItems($('.fotos-container-2 article a div'));
    }, 4000);
    setTimeout(function() {
      $('.fotos-container-2 article a div').css({
        'transition': 'all 0.5s ease-out'
      })
    }, 10000);
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
  if ($('.section-ver-escuchar').length) {
    $('#content-inside >.in-frame').addClass('online');

    if ($('.swiper-container').length) {
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
    //  delegateOnlineClicks();
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
  }

  //if ver/escuchar-in
  // if ($('.relacionados-grid').length) {
  //   if ($('.relacionados-grid li').length <= 3) {
  //     $('#infinite-loader').remove();
  //   }
  // }



  // stycky Navigation
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
  //on scroll
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
    });
      $('.modal-container >#primary-menu >li>ul').parent().append('<span class="fa fa-caret-down"></span>');
    setTimeout(function() {
      slideToMenuItems();
    }, 0);
    $('.modal-container >#primary-menu >li > a').click(function(e) {
      console.log(this);
      if($(this).parent().children(".dropdown").length){
        e.preventDefault();

        $('.modal-container').find('.dropdown').not($(this).next()).slideUp();
        if ($(this).next().css('display').toLowerCase() == 'block') {
          $(this).next().slideUp('fast');
        } else {
          $(this).next().slideDown('fast');
        }
      }
    });
  });
});


//mobile menu items animation
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

//Masonry
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
      percentPos = false;
      gut = 0;
    } else {
      columnWidth = '.grid-sizer';
      percentPos = true;
      gut = '.grid-gutter';
    }
    var $container = $('#masonry-container');
    $container.masonry({
      columnWidth: columnWidth,
      itemSelector: '.item',
      transitionDuration: 200,
      percentPosition: percentPos,
      gutter: gut,
    });
    fadeInItems($('#masonry-container >.item'));
  });
}

//Detector Sizes
function sizeDetector(size) {
  var rn;
  $('.debugsize').each(function() {
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
// Order sizes
function sizeOrder(size) {
  var sizz = ['small', 'smallmax', 'medium', 'almost', 'large'];
  return sizz.indexOf(size);
}

// slider Height to VH
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

//Init
function start() {
  if ($('#masonry-container').length) {
    setTimeout(function() {
      mazoncck();
    }, 0);
  }
  if ($('#hero .swiper-container').length) {
    sliderHeight();
  }


  //marquee
  if ($('.marquee').length) {
    setTimeout(function(){
      $('.marquee-container').css({'opacity':1});
    },2000);
    $('.marquee').marquee().mouseover(function () {
            $(this).trigger('stop');
        }).mouseout(function () {
            $(this).trigger('start');
        });
  }

}

//fadeIn pogressive
function fadeInItems(lis) {
  var delay = 0;
  lis.each(function() {
    var $li = $(this);
    $li.queue('fade', function(next) {
      $li.delay(delay).animate({
        'opacity': 1,
      }, 500, next);
    });
    $li.dequeue('fade');
    delay += 500;
  });
}

//Fade out progressive
function fadeOutItems(lis) {
  var delay = 0;
  lis.each(function() {
    if ($(this).css('opacity') == 1) {
      var $li = $(this);
      $li.queue('fade', function(next) {
        $li.delay(delay).animate({
          'opacity': 0,
          'bottom': '20px',
        }, 500, next);
      });
      $li.dequeue('fade');
      delay += 500;
    }
  });


}

// function fadeInFotos(lis) {
//   var delay = 0;
//   lis.each(function() {
//     var $li = $(this);
//     $li.queue('fade', function(next) {
//       $li.delay(delay).animate({
//         'opacity': 1,
//         'bottom': 0,
//       }, 500, next);
//     });
//     $li.dequeue('fade');
//     delay += 500;
//   });
// }

//
// function delegateOnlineClicks() {
//   $('.infiniteScrollButton').click(function() {
//     appendEl(500, 3);
//     $(this).unbind('click');
//
//
//   });
// }

//Delegate Calendar Events
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


//RAndom
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//Map
function initializeGmap() {
  var latlng = new google.maps.LatLng(-34.604004, -58.369465);
  var settings = {
    zoom: 16,
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
    new google.maps.Point(71, 118)
  );

  var cckPos = new google.maps.LatLng(-34.604004, -58.369465);
  var cckMarker = new google.maps.Marker({
    position: cckPos,
    map: map,
    icon: cck,
    title: "Centro Cultural Kirchner",
    zIndex: 10
  });
  window.cckposs = cckPos;

  var lineac = new google.maps.MarkerImage('assets/img/mapa/lineac.png',
    new google.maps.Size(152, 41),
    new google.maps.Point(0, 0),
    new google.maps.Point(141, 30)
  );
  var lineacPos = new google.maps.LatLng(-34.601830, -58.378281);
  var lineacMarker = new google.maps.Marker({
    position: lineacPos,
    map: map,
    icon: lineac,
    title: "Subte Linea C - EstaciÃ³n Esmeralda",
    zIndex: 5
  });

  var lineab = new google.maps.MarkerImage('assets/img/mapa/lineab.png',
    new google.maps.Size(205, 41),
    new google.maps.Point(0, 0),
    new google.maps.Point(193, 30)
  );
  var lineabPos = new google.maps.LatLng(-34.602960, -58.369849);
  var lineabMarker = new google.maps.Marker({
    position: lineabPos,
    map: map,
    icon: lineab,
    title: "Subte Linea B - EstaciÃ³n Leandro N. Alem",
    zIndex: 6
  });

  var lineaa = new google.maps.MarkerImage('assets/img/mapa/lineaa.png',
    new google.maps.Size(171, 41),
    new google.maps.Point(0, 0),
    new google.maps.Point(13, 30)
  );
  var lineaaPos = new google.maps.LatLng(-34.608745, -58.371007);
  var lineaaMarker = new google.maps.Marker({
    position: lineaaPos,
    map: map,
    icon: lineaa,
    title: "Subte Linea A - EstaciÃ³n Plaza de Mayo",
    zIndex: 7
  });

  var linead = new google.maps.MarkerImage('assets/img/mapa/linead.png',
    new google.maps.Size(171, 41),
    new google.maps.Point(0, 0),
    new google.maps.Point(129, 31)
  );
  var lineadPos = new google.maps.LatLng(-34.607950, -58.373829);
  var lineadMarker = new google.maps.Marker({
    position: lineadPos,
    map: map,
    icon: linead,
    title: "Subte Linea D - EstaciÃ³n Catedral",
    zIndex: 8
  });

  var lineae = new google.maps.MarkerImage('assets/img/mapa/lineae.png',
    new google.maps.Size(171, 41),
    new google.maps.Point(0, 0),
    new google.maps.Point(131, 32)
  );
  var lineaePos = new google.maps.LatLng(-34.609160, -58.373625);
  var lineaeMarker = new google.maps.Marker({
    position: lineaePos,
    map: map,
    icon: lineae,
    title: "Subte Linea E - EstaciÃ³n Bolivar",
    zIndex: 9
  });

}

function stickySidebarOptions() {
  var currSize = sizeOrder(sizeDetector());
  if (currSize > 2) {
    $('#secondary').addClass('sticky-sidebar');
  } else {
    $('#secondary').removeClass('sticky-sidebar');

  }

}



//Section Fotos Popup
// Define data for the popup
// var data = [{
//     entrada: "Titulo", // Key "entrada" means that Magnific Popup will look for an element with class "mfp-entrada" in markup and will replace its inner HTML with the value.
//
//     fecha: 'El 1 de Julio ', // Key "fecha" means that Magnific Popup will look for an element with class "mfp-fecha"
//
//     bajada: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes',
//
//     imagen_img: 'http://lorempixel.com/800/600/abstract', // Prefix "_img" is special. With it Magnific Popup finds an  element "imagen" and replaces it completely with image tag.
//
//     categoria: 'artes visuales'
//   }, {
//     entrada: "Titulo",
//
//     fecha: 'El 1 de Julio ',
//
//     bajada: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes',
//
//     imagen_img: 'http://lorempixel.com/800/600/abstract/2',
//
//     categoria: 'Muestras permanentes'
//   },
//
// ];

// // initalize popup
// $('.fotos-container a,.fotos-container-2 a').magnificPopup({
//   key: 'fotos-popup',
//   items: getJsonProvisoria(),
//   type: 'inline',
//   mainClass: 'mfp-fade',
//   inline: {
//     // Define markup. Class names should match key names.
//     markup: '<div class="white-popup"><div class="mfp-close"></div>' +
//       '<div class="mfp-imagen"></div>' +
//       '<header>' +
//       '<div  class="mfp-categoria"></div>' +
//       '<div class="mfp-fecha"></div>' +
//       '</header>' +
//       '<div class="mfp-entrada"></div>' +
//       '<div class="mfp-bajada"></div>' +
//       '</div>'
//   },
//   gallery: {
//     enabled: true
//   },
//   callbacks: {
//     markupParse: function(template, values, item) {
//       // optionally apply your own logic - modify "template" element based on data in "values"
//        console.log('Parsing:',  values);
//       setTimeout(function() {
//
//         var cat = item.data.categoria.replace(/\s+/g, '').toLowerCase();;
//         $('.mfp-categoria').removeClass(function(index, css) {
//           return (css.match(/(^|\s)tag-\S+/g) || []).join(' ');
//         });
//         $('.mfp-categoria').addClass('tag-' + cat);
//
//       }, 0);
//     }
//   }
// });



//Popup Galerias

if ($('.gallery-grid').length) {

  $('.gallery-grid').each(function() { // the containers for all your galleries
    $(this).magnificPopup({
      delegate: 'a', // the selector for gallery item
      type: 'image',
      gallery: {
        enabled: true,
        tPrev: 'Anterior (Flecha Izquierda)', // Alt text on left arrow
        tNext: 'Siguiente (Flecha Derecha)', // Alt text on right arrow
        tCounter: '%curr% de %total%',
      },
      image: {
        markup: '<div class="mfp-figure gallery-popup">' +
          '<div class="mfp-close"></div>' +
          '<div class="mfp-img"></div>' +
          '<div class="mfp-bottom-bar">' +
          '<div class="mfp-title"></div>' +
          '<div class="mfp-counter"></div>' +
          '</div>' +
          '</div>', // Popup HTML markup. `.mfp-img` div will be replaced with img tag, `.mfp-close` by close button
        cursor: 'mfp-zoom-out-cur', // Class that adds zoom cursor, will be added to body. Set to null to disable zoom out cursor.
        titleSrc: 'title', // Attribute of the target element that contains caption for the slide.
        // Or the function that should return the title. For example:
        // titleSrc: function(item) {
        //   return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
        // }
        verticalFit: true, // Fits image in area vertically
        tError: '<a href="%url%">La imagen</a> no pudo ser cargada.'
      },
    });
  });
}


//Request al Servidor
//Reemplazar por la funcion real con método Post. estoy usando "async: false", asi que no se debería
//usar en produccion ya que esta deprecada.
//esta funcion es llamada desde la inicialización del plugin Magnifix Popup (actualmente linea 650)
// los items del objeto devuelto se deben reemplazar por los valores correctos en el SErver de minplan
// que actualmente desconozco. categoria,bajada,etc
// o mapear el  objeto que devuleve a las propiedades actuales.
// si se cambian los valores del objeto tambien deben ser reemplazados en la opcion markup, por ejemplo ,si
// se cambia bajada por subtitulo quedaria <div class="mfp-subtitulo"></div> en la opcion markup


function getJsonProvisoria() {
 var result="";
    $.ajax({
      url:"http://cckrevamp.dev/api.php/hello",
      async: false,
      success:function(data) {
         result = data;
      }
   });
   return  JSON.parse(result);
}
