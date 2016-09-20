jQuery(document).ready(function($) {
			//wow animation init
			new WOW().init();
			
			
			
			$('#navbar-search > a').on('click', function() {
				$('#navbar-search > a > i').toggleClass('fa-search fa-times');
				$("#navbar-search-box").toggleClass('show hidden animated fadeInUp');
				return false;
			});
					// search
					$('.dropdown-menu input, .dropdown-menu label').click(function(e) {
						e.stopPropagation();
					});
					//ScrollTo
					$('a.scrollto').on('click', function(e){
						//store hash
						var target = this.hash;
						e.preventDefault();
						$('body').scrollTo(target, 800, {offset: -80}, {easing:'easeOutQuad'});
						//Collapse mobile menu after clicking
						if ($('.navbar-collapse').hasClass('in')){
							$('.navbar-collapse').removeClass('in').addClass('collapse');
						}
					}); 
					/*--------*/
					//tooltips
					$("[rel=tooltip]").tooltip({ placement: 'bottom'});


					//counterdown
					var today = new Date();
					var eventday = new Date();
					eventday.setDate(today.getDate()+15);
					$('#event-date-counter').countdown(eventday, function(event) {
 						var $this = $(this).html(event.strftime(''
    						+ '<span>%D days</span>'
     						+ '<span>%H hours</span>'
     						+ '<span>%M Mins</span>'
     						+ '<span>%S Secs</span>'));
 						});

					
					
					$(document).on('click', '.yamm .dropdown-menu', function(e) {
					  e.stopPropagation()
					})

					$('.loader').each(function(){
						$(this).ClassyLoader({
							percentage: $(this).data("percentage"),
						    speed: 8,
						    diameter: 70,
						    showText: true,
						    fontFamily: 'Lato',
						    fontColor: "#34495E",
						    fontSize: '20px',
						    roundedLine: true,
						    lineColor: 'rgba(26, 188, 156, 1)',
						    remainingLineColor: 'rgba(73, 125, 164, 0.15)',
						    lineWidth: 40
						});
					});

					
					
				}); 

					$( window ).load(function() {
						// Isotope Gallery
					
						var $container = $('#work-isotope').isotope({
							itemSelector: '.item',
							layoutMode: 'fitRows'
						});
						$('#filters').on( 'click', 'button', function() {
						var filterValue = $(this).attr('data-filter');
						$container.isotope({ filter: filterValue });
						});



					});
					


