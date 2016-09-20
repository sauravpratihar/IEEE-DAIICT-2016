// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('body').on('click', '.page-scroll', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 75 )
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

;(function($) {	

	$(document).ready( function() {

		// MENU

		if ($(this).width() > 990) {
			$('.main').addClass('desk');
		}

		$('.btn-menu').on('click', function() {
			$(this).toggleClass('active');
			$('.mob-menu').slideToggle(300);
		});

		$('.btn-submenu').on('click', function() {
			var sub  = $(this).parent().siblings('.submenu, .mob-submenu, .megamenu');			   

			$(this).toggleClass('active');
			sub.slideToggle(300);
		});		


		$('.menu > li').each(function() {
			var sub = $(this).children('.submenu').size();
			if (sub > 0) $(this).addClass('with-sub');
		});

		$(window).resize(function() {
			if ($('.btn-menu').css('display') === 'block') {				
				$('.main').removeClass('desk');
			}
			else {
				$('.main').addClass('desk');
				$('.menu, .submenu, .b-search').removeAttr('style');
			}
		});

		// FORMS: SEARCH, COMMENT

		$('.btn-search').on('click', function() {
			$(this).toggleClass('active');
			$('.b-search').fadeToggle(300);
		});

		$('.search-submit, .comment-submit').on('click', function() {
			$(this).parent().submit();
		});

		$('.search-form').on('click', '.search-text-remove', function() {
			$(this).siblings('.search-text').val('');
		});


		$('.btn-reply').on('click', function() {
			if (!$(this).hasClass('cancel-reply')) {

				var comForm = $('.b-comment-form').clone();
				$('.b-comment-form').remove();

				$('.btn-reply').removeClass('cancel-reply').html('<b>reply</b>');
				$(this).addClass('cancel-reply').html('<b>cancel</b>');
				$(this).parent().parent().append(comForm);

				$(this).parent().parent().children('.b-comment-form')
					.focus(function() {
						$(this).siblings('i').addClass('focused');
					})
					.focusout(function() {
						$(this).siblings('i').removeClass('focused');
					});
			}
		});

		$(document)
			.on('click', '.cancel-reply', function() {
				var comForm = $(this).parent().siblings('.b-comment-form').clone();
				$(this).parent().siblings('.b-comment-form').remove();

				$(this).removeClass('cancel-reply').html('<b>reply</b>');
				$('.post').append(comForm);
			})
			.on('click', '.cancel-reply2', function(event) {
				event.preventDefault();

				var comForm = $(this).parent().parent().clone();
				$(this).parent().parent().remove();

				$('.cancel-reply').removeClass('cancel-reply').html('<b>reply</b>');
				$('.post').append(comForm);
			})
			.on('focus', 'input, textarea', function() {
				$(this).siblings('i').addClass('focused');
			})
			.on('focusout', 'input, textarea', function() {
				$(this).siblings('i').removeClass('focused');
			});



		// CONTACT FORM

		$('.b-contact-form').submit(function(){

			var self	= $(this),
				action  = self.attr('action');

			self.prev().slideUp(750,function() {
				self.prev().hide();

		 		var name  = self.find('.field-name'),
		 			subj  = self.find('.field-subject'),
		 			email = self.find('.field-email'),
		 			comm  = self.find('.field-comments');

				$.post(action, {
					name: name.val(),
					email: email.val(),
					subject: subj.val() || '...',
					comments: comm.val(),
				},
					function(data){
						self.prev().html(data);
						self.prev().slideDown('slow');

						if (data.match('success') != null) {
							name.val('');
							subj.val('');
							email.val('');
							comm.val('');
						}
					}
				);

			});

			return false;

		});

		// TABS

		(function() {
	
			$('.b-tabs').on('click', 'li', function() {
				var title  = $(this),
					tab    = title.parent().siblings().children().eq(title.index());

				if (title.parent().parent().hasClass('a-slide')) {
					var curTab = tab.siblings('.active');
					curTab.addClass('cur-tab').siblings().removeClass('cur-tab');
				}

				title.addClass('active').siblings().removeClass('active');
				tab.addClass('active').siblings().removeClass('active');		
			});

		}());

		// MESSAGES

		(function() {
	
			$(document).on('click', '.message-close', function() {
				$(this).parent()
					.animate({'opacity':'0'}, 220, function() {
						$(this).hide(200);
					});					
			})

		}());
		
		// SPOILER 

		$('.spoiler-title').on('click', function() {
			$(this)
				.toggleClass('active')
				.next().slideToggle(250);
		});

		$('.b-accordion .spoiler-title').on('click', function() {
			$(this).parent().siblings()
				.children('.spoiler-title').removeClass('active')
				.next('.spoiler-content').slideUp(250);				
		});

		// PROGRESS BAR

		$('.b-progress-bar').each(function() {
    
			var cap = parseInt($(this).attr('data-capacity'), 10),
				val = parseInt($(this).attr('data-value'), 10),
				len = 100 * (val / cap) + '%';

			$(this).find('.progress-line').css('width', len);

		});

		// TEAM 

		$('.member-photo')
			.on('mouseenter', function() {
				$(this).children('.b-social').stop().fadeIn(200);
			})
			.on('mouseleave', function() {
				$(this).children('.b-social').stop().fadeOut(200);
			});

		$('.b-member.m-compact')
			.on('mouseenter', function() {
				$(this).children('.member-meta').stop().fadeIn(200);
			})
			.on('mouseleave', function() {
				$(this).children('.member-meta').stop().fadeOut(200);
			});

		// PORTFOLIO		

		$('.work-preview a').on('click', function() {
			$(this).parent().trigger('click');
		});

		// CAROUSEL

		$.fn.carousel = function(op) {
			var op, ui = {};

			op = $.extend({
				speed: 500,
				autoChange: false,
				interval: 5000
			}, op);

			ui.carousel = this;
			ui.items    = ui.carousel.find('.carousel-item');
			ui.itemsLen = ui.items.length;

			// CREATE CONTROLS

			ui.ctrl 	= $('<div />', {'class': 'carousel-control'});
			ui.prev 	= $('<div />', {'class': 'carousel-prev'});
			ui.next 	= $('<div />', {'class': 'carousel-next'});
			ui.pagList  = $('<ul />', {'class': 'carousel-pagination'});
			ui.pagItem  = $('<li></li>');

			for (var i = 0; i < ui.itemsLen; i++) {
				ui.pagItem.clone().appendTo(ui.pagList);
			}

			ui.prev.appendTo(ui.ctrl);
			ui.next.appendTo(ui.ctrl);
			ui.pagList.appendTo(ui.ctrl);
			ui.ctrl.appendTo(ui.carousel);

			ui.carousel.find('.carousel-pagination li').eq(0).addClass('active');

			ui.carousel.find('.carousel-item').each(function() {
				$(this).hide();
			});

			ui.carousel.find('.carousel-item').eq(0).show().addClass('active');


			// CHANGE ITEM

			var changeImage = function(direction, context) {
				var current = ui.carousel.find('.carousel-item.active');

				if (direction == 'index') {
					if(current.index() === context.index())
						return false;

					context.addClass('active').siblings().removeClass('active');

					ui.items.eq(context.index()).addClass('current').fadeIn(op.speed, function() {
						current.removeClass('active').hide();
						$(this).addClass('active').removeClass('current');
					});
				} 

				if (direction == 'prev') {
					if (current.index() == 0) {
						ui.carousel.find('.carousel-item:last').addClass('current').fadeIn(op.speed, function() {
							current.removeClass('active').hide();
							$(this).addClass('active').removeClass('current');
						});
					}
					else {
						current.prev().addClass('current').fadeIn(op.speed, function() {
							current.removeClass('active').hide();
							$(this).addClass('active').removeClass('current');
						});
					}
				}

				if (direction == undefined) {
					if (current.index() == ui.itemsLen - 1) {
						ui.carousel.find('.carousel-item:first').addClass('current').fadeIn(300, function() {
							current.removeClass('active').hide();
							$(this).addClass('active').removeClass('current');
						});
					}
					else {
						current.next().addClass('current').fadeIn(300, function() {
							current.removeClass('active').hide();
							$(this).addClass('active').removeClass('current');
						});
					}
				}

				ui.carousel.find('.carousel-pagination li').eq( ui.carousel.find('.carousel-item.current').index() ).addClass('active').siblings().removeClass('active');
			};

			ui.carousel
				.on('click', 'li', function() {
					changeImage('index', $(this));
				})
				.on('click', '.carousel-prev', function() {
					changeImage('prev');
				})
				.on('click', '.carousel-next', function() {
					changeImage();
				});

			// AUTO CHANGE

			if (op.autoChange) {
				var changeInterval = setInterval(changeImage, op.interval);

				ui.carousel
					.on('mouseenter', function() {
						clearInterval(changeInterval);
					})
					.on('mouseleave', function() {
						changeInterval = setInterval(changeImage, op.interval);
					});
			}

			return this;
		};

		$('.b-carousel').each(function() {
			$(this).carousel({
				autoChange: true
			});
		});

		// BUTTON UP

		var btnUp = $('<div/>', {'class':'btn-up'});
		btnUp.appendTo('body');

		$(document)
			.on('click', '.btn-up', function() {			
				$('html, body').animate({
					scrollTop: 0
				}, 700);
			});

		$(window)	
			.on('scroll', function() {			
				if ($(this).scrollTop() > 200)
					$('.btn-up').addClass('active');
				else
					$('.btn-up').removeClass('active');
			});

		// SETTINGS PANEL

		$('.btn-settings').on('click', function() {
			$(this).parent().toggleClass('active');
		});

		$('.switch-handle').on('click', function() {
			$(this).toggleClass('active');
			$('.main').toggleClass('boxed');
			
		});

		$('.bg-list div').on('click', function() {
			if ($(this).hasClass('active')) return false;
			if(!$('.switch-handle').hasClass('active')) $('.switch-handle').trigger('click');

			$(this).addClass('active').siblings().removeClass('active');    
			var cl = $(this).attr('class');
			$('body').attr('class', cl);
		});

		$('.color-list div').on('click', function() {
			if ($(this).hasClass('active')) return false;

			$('link.color-scheme-link').remove();
			
			$(this).addClass('active').siblings().removeClass('active');    
			var src 		= $(this).attr('data-src'),
				colorScheme = $('<link class="color-scheme-link" rel="stylesheet" />');

			colorScheme
				.attr('href', src)
				.appendTo('head');
		});

	});	

})(jQuery);

$(document).ready(function(){
	$(".header").sticky({topSpacing:0});
});

$(function(){
    $.stellar({
    horizontalScrolling: false,
    responsive: true
    });
});

$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 200) {
        $(".header-transparent").addClass("header-trans-act");
    } else {
        $(".header-transparent").removeClass("header-trans-act");
    }
});

$(document).ready(function(){
$('.navbar-nav .dropdown > a[href]').click(function(){
location.href = this.href;
});
});
