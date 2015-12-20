// <script type="text/javascript">

	$(window).load(function() {
	  $('.flexslider').flexslider({
	    animation: "slide"
	  });
	});



	$(function() {
	    var pull        = $('#resp-menu');
	        menu        = $('#main-menu');

	    // $("#pull").click(function(){ 
	    //     menu.slideToggle(500);
	    // });

	    $(pull).on('click', function(e) {
	            e.preventDefault();
	            menu.slideToggle();
	        });

	    $(window).resize(function(){
	        var w = $(window).width();
	        // if(w > 320 && menu.is(':hidden')) {
	        //  menu.removeAttr('style');
	        // }

	        if(w < 768){
	            menu.hide();
	        }
	        
	        if(w >= 768){
	            menu.show();
	        }       
	    });
	});


// </script>	