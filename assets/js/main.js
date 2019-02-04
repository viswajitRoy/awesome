jQuery(function($) {
	
    
     // JS for PopUp Menu

    $(".strategyList li:first-child").addClass("h");
    
    
	
	//js for slick workSliderWrap slider
    $('.workSliderWrap').slick({
        
		arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
		},
        {
            breakpoint: 640,
            settings: {
                dots: true,
            }
		}
	  ]
    });
    
	
	//js for slick getResultSliderWrap slider
    $('.getResultSliderWrap').slick({
        
		arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
		},
        {
            breakpoint: 640,
            settings: {
                dots: true,
            }
		}
	  ]
    });
    
    
	
	//js for slick projectSliderWrap slider
    $('.projectSliderWrap').slick({
        
		arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
		},
        {
            breakpoint: 640,
            settings: {
                dots: true,
            }
		}
	  ]
    });
	
	
	
	//js for slick proDuctSlider slider
    $('.proDuctSlider').slick({
        
		arrows: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: false,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
		},
        {
            breakpoint: 640,
            settings: {
                dots: false,
                slidesToShow: 1,
                slidesToScroll: 1,
            }
		}
	  ]
    });
	
	
	//js for slick contactFooterSlider slider
    $('.contactFooterSlider').slick({
        
		arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: false,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
		},
        {
            breakpoint: 640,
            settings: {
                dots: true,
                slidesToShow: 1,
                slidesToScroll: 1,
            }
		}
	  ]
    });
	
	
	//js for ScrollTo Content
	$('a[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top + 0
                }, 2000);
                return false;
            }
        }
    });
	
    
    
    //js for TooltipRight
    
    if (typeof $.fn.tooltipster == "function") {
        $('.tooltip-linkR').tooltipster({
            animation: 'fade',
            delay: 200,
            theme: 'tooltipster-default',
            touchDevices: true,
            position: 'right',
            trigger: 'hover'
        }); 
        
        $('.modal').on('shown.bs.modal', function () {
            $('.tooltip-linkR').trigger("mouseleave");
            
        });  
    }
	
	
	
	
	/*$('#awesomwModalMenu').on('click', function(){
		$("#div_dbReadMany").modal('show');
	});
	
	
	
	
	$('a[rel=popover]').popover().click(function(e) {
	  e.preventDefault();
	  var open = $(this).attr('data-easein');
	  if (open == 'shake') {
		$(this).next().velocity('callout.' + open);
	  } else if (open == 'pulse') {
		$(this).next().velocity('callout.' + open);
	  } else if (open == 'tada') {
		$(this).next().velocity('callout.' + open);
	  } else if (open == 'flash') {
		$(this).next().velocity('callout.' + open);
	  } else if (open == 'bounce') {
		$(this).next().velocity('callout.' + open);
	  } else if (open == 'swing') {
		$(this).next().velocity('callout.' + open);
	  } else {
		$(this).next().velocity('transition.' + open);
	  }
	
	});
	
	// add the animation to the modal
	$(".modal").each(function(index) {
	  $(this).on('show.bs.modal', function(e) {
		var open = $(this).attr('data-easein');
		if (open == 'shake') {
		  $('.modal-dialog').velocity('callout.' + open);
		} else if (open == 'pulse') {
		  $('.modal-dialog').velocity('callout.' + open);
		} else if (open == 'tada') {
		  $('.modal-dialog').velocity('callout.' + open);
		} else if (open == 'flash') {
		  $('.modal-dialog').velocity('callout.' + open);
		} else if (open == 'bounce') {
		  $('.modal-dialog').velocity('callout.' + open);
		} else if (open == 'swing') {
		  $('.modal-dialog').velocity('callout.' + open);
		} else {
		  $('.modal-dialog').velocity('transition.' + open);
		}
	
	  });
	});*/
	
	
	
	
	
	
	

	
	
});

