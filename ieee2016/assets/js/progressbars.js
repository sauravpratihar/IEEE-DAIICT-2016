jQuery(document).ready(function($) {
							// Progress Bars
					$(window).scroll(function(e){
							if($("#progress-bars").length>0){
							a = $("#progress-bars").offset().top + ($("#progress-bars").height());
							b = $(window).scrollTop() + $(window).height();
							if (a < b) {
								$.each($('.progress-bar'),function(){
									$(this).css('width', $(this).data('percentage')+'%');
									$(this).text($(this).data('percentage')+ "%");
								});
							}
						}
					});  
		
				}); 