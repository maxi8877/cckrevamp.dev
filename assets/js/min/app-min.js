function slideToMenuItems(){var e=$(".modal-container >#primary-menu >li a"),n=0;e.each(function(){var e=$(this);e.queue("fade",function(a){e.delay(n).animate({"margin-left":0},500,$.bez([.42,0,.58,1]),function(){a()})}),e.dequeue("fade"),n+=20})}function mazoncck(){$("#masonry-container").imagesLoaded(function(){if($(".grid-sizer").length)e=".grid-sizer",percentPos=!0,gut=".grid-gutter";else{var e=275;sizeDetector("medium")?e=160:sizeDetector("almost")?e=10:sizeDetector("large")&&(e=275),percentPos=!1,gut=0}var n=$("#masonry-container");n.masonry({columnWidth:e,itemSelector:".item",transitionDuration:200,percentPosition:percentPos,gutter:gut}),fadeInItems($("#masonry-container >.item"))})}function sizeDetector(e){var n;return $(".debugsize").each(function(){if("block"==$(this).css("display").toLowerCase()){var a=$(this).attr("class").split(" ").pop();n=e?e==a?!0:!1:a}}),n}function sizeOrder(e){var n=["small","smallmax","medium","almost","large"];return n.indexOf(e)}function sliderHeight(){var e=sizeOrder(sizeDetector());0!==e?($("#hero").removeClass(),$("#hero").addClass("vh_height"+17*(e+1))):($("#hero").removeClass(),$("#hero").addClass("vh_height"+30*(e+1)))}function start(){$("#masonry-container").length&&setTimeout(function(){mazoncck()},0),$("#hero .swiper-container").length&&sliderHeight()}function fadeInItems(e){var n=0;e.each(function(){var e=$(this);e.queue("fade",function(a){e.delay(n).animate({opacity:1},500,a)}),e.dequeue("fade"),n+=500})}function fadeOutItems(e){var n=0;e.each(function(){if(1==$(this).css("opacity")){var e=$(this);e.queue("fade",function(a){e.delay(n).animate({opacity:0,bottom:"20px"},500,a)}),e.dequeue("fade"),n+=500}})}function calendarEvents(){$(".calendar-prev").click(function(e){e.preventDefault(),$("#calendar").html("");var n=parseInt($(this).attr("data-currentmonth")),a=parseInt($(this).attr("data-currentyear"));0===n&&(n=12,a--),calendar(n-1,a),calendarEvents()}),$(".calendar-next").click(function(e){e.preventDefault(),$("#calendar").html("");var n=parseInt($(this).attr("data-currentmonth")),a=parseInt($(this).attr("data-currentyear"));11==n&&(n=-1,a++),calendar(n+1,a),calendarEvents()})}function getRandomInt(e,n){return Math.floor(Math.random()*(n-e+1))+e}function initializeGmap(){var e=new google.maps.LatLng(-34.604004,-58.369465),n={zoom:16,center:e,mapTypeControl:!0,mapTypeControlOptions:{style:google.maps.MapTypeControlStyle.DROPDOWN_MENU},navigationControl:!0,navigationControlOptions:{style:google.maps.NavigationControlStyle.SMALL},mapTypeId:google.maps.MapTypeId.ROADMAP};window.map=new google.maps.Map(document.getElementById("map_canvas"),n);var a=new google.maps.MarkerImage("assets/img/mapa/cck.png",new google.maps.Size(133,128),new google.maps.Point(0,0),new google.maps.Point(71,118)),t=new google.maps.LatLng(-34.604004,-58.369465),i=new google.maps.Marker({position:t,map:map,icon:a,title:"Centro Cultural Kirchner",zIndex:10});window.cckposs=t;var o=new google.maps.MarkerImage("assets/img/mapa/lineac.png",new google.maps.Size(152,41),new google.maps.Point(0,0),new google.maps.Point(141,30)),r=new google.maps.LatLng(-34.60183,-58.378281),s=new google.maps.Marker({position:r,map:map,icon:o,title:"Subte Linea C - EstaciÃ³n Esmeralda",zIndex:5}),l=new google.maps.MarkerImage("assets/img/mapa/lineab.png",new google.maps.Size(205,41),new google.maps.Point(0,0),new google.maps.Point(193,30)),c=new google.maps.LatLng(-34.60296,-58.369849),d=new google.maps.Marker({position:c,map:map,icon:l,title:"Subte Linea B - EstaciÃ³n Leandro N. Alem",zIndex:6}),p=new google.maps.MarkerImage("assets/img/mapa/lineaa.png",new google.maps.Size(171,41),new google.maps.Point(0,0),new google.maps.Point(13,30)),m=new google.maps.LatLng(-34.608745,-58.371007),g=new google.maps.Marker({position:m,map:map,icon:p,title:"Subte Linea A - EstaciÃ³n Plaza de Mayo",zIndex:7}),u=new google.maps.MarkerImage("assets/img/mapa/linead.png",new google.maps.Size(171,41),new google.maps.Point(0,0),new google.maps.Point(129,31)),f=new google.maps.LatLng(-34.60795,-58.373829),h=new google.maps.Marker({position:f,map:map,icon:u,title:"Subte Linea D - EstaciÃ³n Catedral",zIndex:8}),w=new google.maps.MarkerImage("assets/img/mapa/lineae.png",new google.maps.Size(171,41),new google.maps.Point(0,0),new google.maps.Point(131,32)),v=new google.maps.LatLng(-34.60916,-58.373625),y=new google.maps.Marker({position:v,map:map,icon:w,title:"Subte Linea E - EstaciÃ³n Bolivar",zIndex:9})}function stickySidebarOptions(){var e=sizeOrder(sizeDetector());e>2?$("#secondary").addClass("sticky-sidebar"):$("#secondary").removeClass("sticky-sidebar")}function getJsonProvisoria(){var e="";return $.ajax({url:"http://cckrevamp.dev/api.php/hello",async:!1,success:function(n){e=n}}),JSON.parse(e)}window.REMODAL_GLOBALS={NAMESPACE:"modal",DEFAULTS:{hashTracking:!1}},$(document).ready(function(){var e=["small","smallmax","medium","almost","large"];if($.each(e,function(n){$("#debug").length||$("body").append('<div id="debug" style="display:none;"></div>'),$("body #debug").append('<div id="debugsize" class="debugsize '+e[n]+'">'+e[n]+"</div>")}),start(),stickySidebarOptions(),widthG=$(window).width(),$(window).resize(function(){$(window).width()!=widthG&&($("#content #masonry-container >.item").css({opacity:0}),start(),stickySidebarOptions(),widthG=$(window).width(),resizeG=!0),resizeG=!1}),$(document).mouseup(function(e){var n=$(".search-box input");n.is(e.target)||0!==n.has(e.target).length||n.animate({width:0,opacity:0})}),$(".sticky-sidebar").fixTo(".inner-content",{top:100}),$(".home").length){var n=new Swiper(".swiper-container",{speed:1500,autoplay:6e3,direction:"horizontal",pagination:".swiper-pagination",paginationClickable:!0,loop:!0,nextButton:".swiper-button-next",prevButton:".swiper-button-prev"});$(".downarrow").click(function(e){$(document).scrollTop()<=200?(e.preventDefault(),$("html, body").stop().animate({scrollTop:"+=500"},1500,"easeOutBack")):(e.preventDefault(),$("html, body").stop().animate({scrollTop:"0"},2500,"easeOutBack"))})}if($("#calendar").length&&$("#calendar").length){var a=new Date,t=a.getMonth(),i=a.getFullYear();$("#calendar").html(""),calendar(t,i),calendarEvents(),$(".calendar-month").fitText(.5)}if($(".fotos-container-2").length&&($(".fotos-container-2 article").each(function(e,n){$(".fotos-container-2 article").eq(e).imagesLoaded(function(){$(".fotos-container-2 article").eq(e).css({opacity:1})})}),setTimeout(function(){fadeOutItems($(".fotos-container-2 article a div"))},4e3),setTimeout(function(){$(".fotos-container-2 article a div").css({transition:"all 0.5s ease-out"})},1e4)),$("#map_canvas").length){var o=sizeOrder(sizeDetector());o>=4?initializeGmap(17):(initializeGmap(17),center=cckposs,map.setCenter(center)),$(window).resize(function(){if($(window).width()!=widthG){var e=sizeOrder(sizeDetector());e>=4?initializeGmap(17):(initializeGmap(17),center=cckposs,map.setCenter(center)),widthG=$(window).width()}})}if($(".plano").length){var r=$(".plano").find("img").attr("src");$(".plano").zoom({url:r}),$(".plano-sidebar").find(".acc-trigger").click(function(){$(this).next().slideToggle("fast")}),$(".plano-sidebar-details").find(".acc-trigger").click(function(){$(this).next().slideToggle("fast")}),self=this,this.currSize=sizeOrder(sizeDetector()),$(window).resize(function(){sizeOrder(sizeDetector())!=self.currsize&&(setTimeout(function(){self.currSize>=3?$(".acc-content").css({display:"block"}):$(".acc-content").css({display:"none"})},1e3),self.currSize=sizeOrder(sizeDetector()))})}if($(".section-ver-escuchar").length){if($("#content-inside >.in-frame").addClass("online"),$(".swiper-container").length){var s=new Swiper(".swiper-container",{direction:"horizontal",pagination:".swiper-pagination",paginationClickable:!0,loop:!0,nextButton:".page-nav-next",prevButton:".page-nav-prev"}),l;fadeInItems($(".recent-posts-grid li")),$(".recent-posts-grid li").length<=3&&$("#infinite-loader").remove()}if($(".overlay").length){var c;$(".overlay").hover(function(){self=this,c||(c=window.setTimeout(function(){c=null,$(self).slideUp("fast")},1e3))},function(){c&&(window.clearTimeout(c),c=null)})}}$(".hidden-menu").length||($("body").append('<div class="hidden-menu" style="display:none;" ></div>'),$(".hidden-menu").html($("section#site-navigation ").clone()),$(".hidden-menu").append($("section#header ").clone()),$(".search-box").unbind("click"),$(".search-box").click(function(e){e.preventDefault(),$(this).find("input").animate({width:"120px",opacity:1},300)})),$(document).scroll(function(){$(document).scrollTop()>=200&&($(".hidden-menu").fadeIn(),$(".downarrow").html('<i class="fa fa-arrow-circle-o-up"></i>')),$(document).scrollTop()<=200&&($(".hidden-menu").fadeOut(),$(".downarrow").html('<i class="fa fa-arrow-circle-o-down"></i>'))}),$(".menu-toggle").click(function(){$(".modal-container").html(""),$(".modal-container #primary-menu").length||$(".modal-container ").html($("#primary-menu ").first().clone()),$(".modal-container >#primary-menu >li a").css({"margin-left":"-1000px"}).parent().append('<span class="fa fa-caret-down"></span>'),setTimeout(function(){slideToMenuItems()},0),$(".modal-container >#primary-menu >li > a").click(function(e){e.preventDefault(),$(".modal-container").find(".dropdown").not($(this).next()).slideUp(),"block"==$(this).next().css("display").toLowerCase()?$(this).next().slideUp("fast"):$(this).next().slideDown("fast")})})}),$(".gallery-grid").length&&$(".gallery-grid").each(function(){$(this).magnificPopup({delegate:"a",type:"image",gallery:{enabled:!0,tPrev:"Anterior (Flecha Izquierda)",tNext:"Siguiente (Flecha Derecha)",tCounter:"%curr% de %total%"},image:{markup:'<div class="mfp-figure gallery-popup"><div class="mfp-close"></div><div class="mfp-img"></div><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></div>',cursor:"mfp-zoom-out-cur",titleSrc:"title",verticalFit:!0,tError:'<a href="%url%">La imagen</a> no pudo ser cargada.'}})});