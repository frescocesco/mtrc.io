$(document).ready(function(){
/* generali */



  $(".pgrooms").on("click",function(){
    $("#rastreo").trigger('pause');
    $(":mobile-pagecontainer").pagecontainer("change","#pagina1",{transition:'fade'});
     $(".pgrooms").css("opacity","1");
    $(".pggallery").css("opacity","0.3");
    $(".pginfos").css("opacity","0.3");
    $(".navroom img").css("opacity", "0.2");
  });

 $(".pggallery").on("click",function(){
    $("#rastreo").trigger('pause');
    $(":mobile-pagecontainer").pagecontainer("change","#pagina2",{transition:'fade'});
     $(".pgrooms").css("opacity","0.3");
    $(".pggallery").css("opacity","1");
    $(".pginfos").css("opacity","0.3");

  });

  $(".pginfos").on("click",function(){
    $("#rastreo").trigger('pause');
    $(":mobile-pagecontainer").pagecontainer("change","#pagina3",{transition:'fade'});
        $(".pgrooms").css("opacity","0.3");
    $(".pggallery").css("opacity","0.3");
    $(".pginfos").css("opacity","1");
  });

    $(".ch").on("click",function(){
      $(":mobile-pagecontainer").pagecontainer("change","#pagina4");
      $(".navroom img").not(".minich").css("opacity", "0.2");
      $(".minich").css("opacity", "1");
    });

     $(".r1").on("click",function(){
      $(":mobile-pagecontainer").pagecontainer("change","#pagina5");
      $(".navroom img").not(".minir1").css("opacity", "0.2");
      $(".minir1").css("opacity", "1");
    });

      $(".r2").on("click",function(){
      $(":mobile-pagecontainer").pagecontainer("change","#pagina6");
      $(".navroom img").not(".minir2").css("opacity", "0.2");
      $(".minir2").css("opacity", "1");
    });

      $(".ca").on("click",function(){
      $(":mobile-pagecontainer").pagecontainer("change","#pagina7");
      $(".navroom img").not(".minir3").css("opacity", "0.2");
      $(".minica").css("opacity", "1");
    });

        $(".tr").on("click",function(){
      $(":mobile-pagecontainer").pagecontainer("change","#pagina8");
      $(".navroom img").not(".minitr").css("opacity", "0.2");
      $(".minitr").css("opacity", "1");
    });

$("#carga").get(0).play();


$("#skip").animate({ opacity: '0'}, 5500).animate({ opacity: '0.5'}, 2000);

$("#first").hide();
$("#second").hide();
$("#third").hide();


/* pagina lingua*/

$(document).on("pagecreate","#pagina0",function(){

  var esp = $(".espanolimg");
  var eng = $(".englishimg");

  $(esp).animate({left:'191.07px'},1000);
  $(eng).animate({left:'760.49px'},1000);
  $(esp).clearQueue();
  $(eng).clearQueue();
});



/* PAGINA ROOM WELCOME*/
  $(document).on("pagecreate","#pagina1",function() {

      $("#first").delay(200).fadeIn(function(){
        $("#second").delay(200).fadeIn(function(){
           $("#third").delay(200).fadeIn();
          });
        clearQueue();
      });




    $(".pgrooms").css("opacity","1");
    $(".pggallery").css("opacity","0.2");
    $(".pginfos").css("opacity","0.2");



      $(".ch").on("click",function(){
      $(":mobile-pagecontainer").pagecontainer("change","#pagina4");
      $(".navroom img").not(".minich").css("opacity", "0.2");
      $(".minich").css("opacity", "1");
      $(".ch-2").css({top:'88px'}).animate({top:'71.07px'},1000);
    });

     $(".r1").on("click",function(){
      $(":mobile-pagecontainer").pagecontainer("change","#pagina5");
      $(".navroom img").not(".minir1").css("opacity", "0.2");
      $(".minir1").css("opacity", "1");
      $(".r1-2").css({left:'720px'}).animate({left:'694px'},1000);
       $(".r1-1").css({left:'750px'}).animate({left:'783px'},1000);
    });

      $(".r2").on("click",function(){
      $(":mobile-pagecontainer").pagecontainer("change","#pagina6");
      $(".navroom img").not(".minir2").css("opacity", "0.2");
      $(".minir2").css("opacity", "1");
      $(".r2-2").css({left:'170px'}).animate({left:'204.01px'},1000);
      $(".r2-1").css({left:'220px'}).animate({left:'190.51px'},1000);
    });

      $(".ca").on("click",function(){
      $(":mobile-pagecontainer").pagecontainer("change","#pagina7");
      $(".navroom img").not(".minir3").css("opacity", "0.2");
      $(".minica").css("opacity", "1");
      $(".ca-2").css({left:'600px'}).animate({left:'558.64px'},1000);
    });

        $(".tr").on("click",function(){
      $(":mobile-pagecontainer").pagecontainer("change","#pagina8");
      $(".navroom img").not(".minitr").css("opacity", "0.2");
      $(".minitr").css("opacity", "1");
      $(".tr-2").css({left:'250px'}).animate({left:'197px'},1000);
      $(".tr-1").css({top:'180px'}).animate({top:'218px'},1000);
    });

});

/*pagina galleria*/
	$(document).on("pagecreate","#pagina2",function() {
    $(".pgrooms").css("opacity","0.2");
    $(".pggallery").css("opacity","1");
    $(".pginfos").css("opacity","0.2");
    $(".expl").hide();


    $(".images").on( "scroll",function(){
      var element = $(".images");
      var x = element.scrollLeft();
      $(".cemento").css("background-position", -(x*1) +"px 0px");
    });


    $(".images li").click(function(){

         var chosen = this;
          var unchosen = $(".images li").not(chosen);
          var backgr = $(".galeriadiv");
         var text = $(chosen).find(".expl");

         $(text).addClass("selezione").fadeIn();
         $(unchosen).addClass("hide",200,"easeOutBounce");
         $(backgr).animate({'background-color':'rgba(0,0,0,0.7)'});

           $(text).clearQueue();
           $(unchosen).clearQueue();
          $(backgr).clearQueue();

  });


    $(".images li").click(function(event) {
        event.stopPropagation();

        $(window).click(function(){

           var unchosen = $(".hide");
           var backgr = $(".galeriadiv");
           var text = $(".selezione");

          $(text).fadeOut().removeClass("selezione");
          $(unchosen).removeClass("hide",200,"easeOutBounce");
          $(backgr).animate({'background-color':'rgba(0,0,0,0.3)'});

          $(text).clearQueue();
          $(unchosen).clearQueue();
          $(backgr).clearQueue();
        });

   });

  });


	/* PAGINA INFO */
	$(document).on("pagecreate","#pagina3",function() {

    $(".pgrooms").css("opacity","0.2");
    $(".pggallery").css("opacity","0.2");
    $(".pginfos").css("opacity","1");

      $("#info1").show();
   	 $("#info2").hide();
   	 $("#info3").hide();
    
   	 $("#info1ln").click(function(){
  		 $("#info1").fadeIn();
   		 $("#info2").fadeOut();
  	 	 $("#info3").fadeOut();
  	 	 $("#info1ln").css("opacity", "1");
  	 	 $("#info2ln").css("opacity", "0.2");
  	   $("#info3ln").css("opacity", "0.2");
  	 });

  	 $("#info2ln").click(function(){
  		  $("#info1").fadeOut();
   		 $("#info2").fadeIn();
  	 	 $("#info3").fadeOut();
  	 	  $("#info1ln").css("opacity", "0.2");
  	 	  $("#info2ln").css("opacity", "1");
  	 	  $("#info3ln").css("opacity", "0.2");
  	 });

  	 $("#info3ln").click(function(){
  		  $("#info1").fadeOut();
   		 $("#info2").fadeOut();
  	 	 $("#info3").fadeIn();
  	 	  $("#info1ln").css("opacity", "0.2");
  	 	  $("#info2ln").css("opacity", "0.2");
  	 	  $("#info3ln").css("opacity", "1");
  	 });
  	});


/* CORRIDOR HISTORIA*/
  $(document).on("pagecreate","#pagina4",function() {

 $( function() {
    $('.ch-2').draggable({ axis: "y",scroll: false, distance: 40, revert: true });
  } );

    $(".ch-2").css({top:'88px'}).animate({top:'71.07px'},1000).clearQueue();
    $(".pgrooms").css("opacity","1");
    $(".pggallery").css("opacity","0.2");
    $(".pginfos").css("opacity","0.2");
    $(".minich").css("opacity", "1");
     $(".navroom img").not(".minich").css("opacity", "0.2");

    $("#pagina4").on("swipeleft", function(){
      $(":mobile-pagecontainer").pagecontainer("change","#pagina5");
      $(".r1-2").css({left:'720px'}).animate({left:'694px'},1000);
       $(".r1-1").css({left:'750px'}).animate({left:'783px'},1000);
      $(".minich").css("opacity", "0.2");
      $(".minir1").css("opacity", "1");
    });

  });

/* SALA 1*/
  $(document).on("pagecreate","#pagina5",function() {

    /*   $( function() {
  $('.r1-2').draggable({ axis: "y", scroll: false, distance: 40, revert: true });
  } ); */


    $(".r1-2").css({left:'720px'}).animate({left:'694px'},1000);
    $(".r1-1").css({left:'750px'}).animate({left:'783px'},1000);
     $(".pgrooms").css("opacity","1");
    $(".pggallery").css("opacity","0.2");
    $(".pginfos").css("opacity","0.2");
    $(".navroom img").not(".minir1").css("opacity", "0.2");
    $(".minir1").css("opacity", "1");

     $("#pagina5").on("swipeleft", function(){
      $(":mobile-pagecontainer").pagecontainer("change","#pagina6", );
      $(".r2-2").css({left:'170px'}).animate({left:'204.01px'},1000);
    $(".r2-1").css({left:'220px'}).animate({left:'190.51px'},1000);
      $(".minir1").css("opacity", "0.2");
      $(".minir2").css("opacity", "1");
    });

      $("#pagina5").on("swiperight", function(){
      $(":mobile-pagecontainer").pagecontainer("change","#pagina4", {
    reverse: true
});
      $(".ch-2").css({top:'88px'}).animate({top:'71.07px'},1000);
      $(".minich").css("opacity", "1");
      $(".minir1").css("opacity", "0.2");
    });
  });

/* SALA 2*/
  $(document).on("pagecreate","#pagina6",function() {

  /*  $( function() {
    $('.r2-2').draggable({ axis: "y", scroll: false, distance: 40, revert: true });
  } ); */


    $(".r2-2").css({left:'170px'}).animate({left:'204.01px'},1000);
    $(".r2-1").css({left:'220px'}).animate({left:'190.51px'},1000);
    $(".pgrooms").css("opacity","1");
    $(".pggallery").css("opacity","0.2");
    $(".pginfos").css("opacity","0.2");
    $(".navroom img").not(".minir2").css("opacity", "0.2");
    $(".minir2").css("opacity", "1");
  
     $("#pagina6").on("swipeleft", function(){
      $(":mobile-pagecontainer").pagecontainer("change","#pagina7",);
      $(".ca-2").css({left:'600px'}).animate({left:'558.64px'},1000);
      $(".minir2").css("opacity", "0.2");
      $(".minica").css("opacity", "1");
    });

      $("#pagina6").on("swiperight", function(){
      $(":mobile-pagecontainer").pagecontainer("change","#pagina5", {
    reverse: true
});
      $(".r1-2").css({left:'720px'}).animate({left:'694px'},1000);
    $(".r1-1").css({left:'750px'}).animate({left:'783px'},1000);
      $(".minir2").css("opacity", "0.2");
      $(".minir1").css("opacity", "1");
    });
  });

/* CORRIDOR ARQ*/
  $(document).on("pagecreate","#pagina7",function() {

     $( function() {
    $('.ca-2').draggable({ axis: "y", scroll: false, distance: 60, revert: true });
  } );


    $(".ca-2").css({left:'600px'}).animate({left:'558.64px'},1000);
    $(".pgrooms").css("opacity","1");
    $(".pggallery").css("opacity","0.2");
    $(".pginfos").css("opacity","0.2");
    $(".navroom img").not(".minica").css("opacity", "0.2");
    $(".minica").css("opacity", "1");

     $("#pagina7").on("swipeleft", function(){
      $(":mobile-pagecontainer").pagecontainer("change","#pagina8",);
      $(".minica").css("opacity", "0.2");
      $(".minitr").css("opacity", "1");
      $(".tr-2").css({left:'250px'}).animate({left:'197px'},1000);
      $(".tr-1").css({top:'180px'}).animate({top:'218px'},1000);
    });

      $("#pagina7").on("swiperight", function(){
      $(":mobile-pagecontainer").pagecontainer("change","#pagina6", {
    reverse: true
});
      $(".r2-2").css({left:'170px'}).animate({left:'204.01px'},1000);
      $(".r2-1").css({left:'220px'}).animate({left:'190.51px'},1000);
      $(".minica").css("opacity", "0.2");
      $(".minir2").css("opacity", "1");
    });
  });

/* TEATRO ROMANO*/
  $(document).on("pagecreate","#pagina8",function() {

     $( function() {
    $('.tr-1').draggable({ axis: "y",scroll: false, distance: 40, revert: true });
  } );


    $(".tr-2").css({left:'250px'}).animate({left:'197px'},1000);
    $(".tr-1").css({top:'180px'}).animate({top:'218px'},1000);
    $(".pgrooms").css("opacity","1");
    $(".pggallery").css("opacity","0.2");
    $(".pginfos").css("opacity","0.2");
    $(".navroom img").not(".minitr").css("opacity", "0.2");
    $(".minitr").css("opacity", "1");

     $("#pagina8").on("swiperight", function(){
      $(":mobile-pagecontainer").pagecontainer("change","#pagina7",{
    reverse: true
});
      $(".ca-2").css({left:'600px'}).animate({left:'558.64px'},1000);
      $(".minitr").css("opacity", "0.2");
      $(".minica").css("opacity", "1");
    });

     $(".tr-5").on("click", function(){
      $(":mobile-pagecontainer").pagecontainer("change","#pagina9");
  });
   });

/* PAGINA TEATRO PLUS*/

       $(document).on("pagecreate","#pagina9",function() {

        /* VIDEO */

        $('#rastreo').click(function() {
  if (this.paused == false) {
     $(this).trigger('pause');
  } else {
      $(this).trigger('play');
  }
});

$('#rastreo').on('play', function () {
    $('#rastreo').attr('controls', '');
});





         $(".pgrooms").css("opacity","1");
         $(".pggallery").css("opacity","0.2");
         $(".pginfos").css("opacity","0.2");

         $("div").filter(".main").not("#plus1").hide();
         $("img").filter(".map").not("#map0").hide();
          $("div").filter(".descr").hide();
         $("#plus2ln").css("opacity", "0.2");
          $("#plus3ln").css("opacity", "0.2");
          $("#plus1").show();
          $("#plus2").hide();
          $("#plus3").hide();

    /* INTERAZIONI MAPPA */
     $("#punta1,#descrl1").click(function(){
      $("img").filter(".punta").not("#punta1").fadeOut();
      $("img").filter("#punta1").fadeIn();
      $("img").filter(".map").not("#map1").fadeOut();
      $("img").filter("#map1").fadeIn();
      $("div").filter("#descr1").fadeIn();
      $("ul").filter(".list").fadeOut();
      $("div").filter(".descr").not("#descr1").fadeOut();
      
    });

     $("#punta2,#descrl2").click(function(){
      $("img").filter(".punta").not("#punta2").fadeOut();
      $("img").filter("#punta2").fadeIn();
       $("img").filter(".map").not("#map2").fadeOut();
      $("img").filter("#map2").fadeIn();
      $("ul").filter(".list").fadeOut();
      $("div").filter("#descr2").fadeIn();
      $("div").filter(".descr").not("#descr2").fadeOut();
    });

    $("#punta3,#descrl3").click(function(){
      $("img").filter(".punta").not("#punta3").fadeOut();
      $("img").filter("#punta3").fadeIn();
      $("img").filter(".map").not("#map3").fadeOut();
      $("img").filter("#map3").fadeIn();
      $("ul").filter(".list").fadeOut();
      $("div").filter("#descr3").fadeIn();
      $("div").filter(".descr").not("#descr3").fadeOut();
    });

    $("#punta4,#descrl4").click(function(){
      $("img").filter(".punta").not("#punta4").fadeOut();
      $("img").filter("#punta4").fadeIn();
      $("img").filter(".map").not("#map4").fadeOut();
      $("img").filter("#map4").fadeIn();
      $("ul").filter(".list").fadeOut();
      $("div").filter("#descr4").fadeIn();
      $("div").filter(".descr").not("#descr4").fadeOut();
    });

    $("#punta5,#descrl5").click(function(){
      $("img").filter(".punta").not("#punta5").fadeOut();
      $("img").filter("#punta5").fadeIn();
       $("img").filter(".map").not("#map5").fadeOut();
      $("img").filter("#map5").fadeIn();
      $("ul").filter(".list").fadeOut();
      $("div").filter("#descr5").fadeIn();
      $("div").filter(".descr").not("#descr5").fadeOut();
    });

     $("#plus1ln").click(function(){
      $("img").filter(".punta").fadeIn();
       $("img").filter(".map").not("#map0").fadeOut();
       $("div").filter(".descr").fadeOut();
      $("img").filter("#map0").fadeIn();
      $(".list").fadeIn();
    });

    $(".map").click(function(){
      $("img").filter(".punta").fadeIn();
       $("img").filter(".map").not("#map0").fadeOut();
       $("div").filter(".descr").fadeOut();
      $("img").filter("#map0").fadeIn();
      $(".list").fadeIn();
    });

    /*CLICK SUL MENU SECONDARIO*/
         $("#plus1ln").click(function(){
           $("#rastreo").trigger('pause');
           $("#plus1").fadeIn();
           $("div").filter(".main").not("#plus1").fadeOut();
           $("#plus1ln").css("opacity", "1");
           $("#plus2ln").css("opacity", "0.2");
           $("#plus3ln").css("opacity", "0.2");
           $("video").hide();
         });

         $("#plus2ln").click(function(){
          $("#rastreo").trigger('pause');
           $("#plus2").fadeIn();
            $("div").filter(".main").not("#plus2").fadeOut();
            $("#plus1ln").css("opacity", "0.2");
            $("#plus2ln").css("opacity", "1");
            $("#plus3ln").css("opacity", "0.2");
             $("video").hide();
         });

         $("#plus3ln").click(function(){
            $("#plus3").fadeIn();
            $("div").filter(".main").not("#plus3").fadeOut();
            $("#plus1ln").css("opacity", "0.2");
            $("#plus2ln").css("opacity", "0.2");
            $("#plus3ln").css("opacity", "1");
             $("video").fadeIn();
         });

/* GALLERIA SECONDARIA */
$(".trgal a").colorbox({maxWidth:'90%', maxHeight:'90%', rel:'gal', transition:'fade', overlayClose:'true'}).resize();
        });

$(document).bind('cbox_open', function(){
    $("#colorbox").on("swipeleft", function(){
        jQuery.colorbox.next(1000);
    });
     $("#colorbox").on("swiperight", function(){
        jQuery.colorbox.prev(1000);
    });
  });




    });
