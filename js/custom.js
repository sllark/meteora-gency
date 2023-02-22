$('.nav-link').click(function(){ window.location.href = $(this).attr('href');});

jQuery(document).ready(function(){	
	jQuery('.d-pop-content').append('<div class="back-to-top" style="display: none;">scroll to top</div>');
	jQuery('.d-pop-content').scroll(function(){
        if (jQuery(this).scrollTop() > 100) {
            jQuery('.back-to-top').show().fadeIn();
        } else {
            jQuery('.back-to-top').fadeOut().hide();
        }
    });

	jQuery('.back-to-top').click(function (){
		console.log('click');
		$(this).parents('.fancybox-content').animate({scrollTop: 0}, 750);
		return false;
	});

	// jQuery('.d-pop.fancybox-container').mousewheel(function(event, delta) { 
	// 	 console.log(event);
	// 	 // $('#fancybox-wrap').trigger('mousewheel.fb', delta);
	// 	});

})


//Check to see if the window is top if not then display button
    // jQuery(window).scroll(function(){

    // 	var check =  jQuery('.site-slider');
    // 	var container = jQuery('.fancybox-content');
    // 	//console.log(swiper.activeIndex);
    // 	if(check){
    // 	//	var hT = jQuery('.fancybox-content').offset().top;

	   //  	 var hT = jQuery(check).offset().top,
			 //       hH = jQuery(check).outerHeight(),
			 //       wH = jQuery(window).height(),
			 //       wS = jQuery(this).scrollTop();
			 //       t = hT-wS;
			 //   if (t <=20){
			 //       jQuery('body').addClass('d-change-menuc');
			 //   }else{
			 //   	   jQuery('body').removeClass('d-change-menuc');
			 //   }
    // 	}

   //  	if(container){
   //  		jQuery('.d-pop.fancybox-container').scroll(function() { //.box is the class of the div
			//     //$("span").css( "display", "inline" ).fadeOut( "slow" );
			//     console.log('sadfsdf');
			// });
   //  		var hT = jQuery('.fancybox-content').offset().top;

	  //   	 var ct = jQuery(container).offset().top;
			//    if (t <=20){
			//        jQuery('body').addClass('d-change-menuc');
			//    }else{
			//    	   jQuery('body').removeClass('d-change-menuc');
			//    }

   //  	}
    	
    	
    	//console.log(ct);

        // if (jQuery(this).scrollTop() > 100) {
        //     jQuery('.back-to-top').fadeIn();
        // } else {
        //     jQuery('.back-to-top').fadeOut();
        // }
   // });

  //   	jQuery('.fancybox-content').bind('scroll',function() {
  //  alert("ciao");
  // }); 
