//	Animations v1.4, Copyright 2014, Joe Mottershaw, https://github.com/joemottershaw/
//	==================================================================================

	// Animate
		function animateElement() {
			if (jQuery(window).width() >= 960) {
				jQuery('.animate').each(function(i, elem) {
					var	elem = jQuery(elem),
						type = jQuery(this).attr('data-anim-type'),
						delay = jQuery(this).attr('data-anim-delay');

					if (elem.visible(true)) {
						setTimeout(function() {
							elem.addClass(type);
						}, delay);
					} 
				});
			} else {
				jQuery('.animate').each(function(i, elem) {
					var	elem = jQuery(elem),
						type = jQuery(this).attr('data-anim-type'),
						delay = jQuery(this).attr('data-anim-delay');

						setTimeout(function() {
							elem.addClass(type);
						}, delay);
				});
			}
		}

		jQuery(document).ready(function() {
			if (jQuery('html').hasClass('no-js'))
				jQuery('html').removeClass('no-js').addClass('js');

			animateElement();
		});

		jQuery(window).resize(function() {
			animateElement();
		});

		jQuery(window).scroll(function() {
			animateElement();

			if (jQuery(window).scrollTop() + jQuery(window).height() == jQuery(document).height())
				animateElement();
		});

	// Triggers
		function randomClass() {
			var	random = Math.ceil(Math.random() * classAmount)

			return classesArray[random];
		}

		function animateOnce(target, type) {
			if (type == 'random')
				type = randomClass();

			jQuery(target).removeClass('trigger infinite ' + triggerClasses).addClass('trigger').addClass(type).one('webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend', function() {
				jQuery(this).removeClass('trigger infinite ' + triggerClasses);
			});
		}

		function animateInfinite(target, type) {
			if (type == 'random')
				type = randomClass();

			jQuery(target).removeClass('trigger infinite ' + triggerClasses).addClass('trigger infinite').addClass(type).one('webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend', function() {
				jQuery(this).removeClass('trigger infinite ' + triggerClasses);
			});
		}

		function animateEnd(target) {
			jQuery(target).removeClass('trigger infinite ' + triggerClasses);
		}

	// Variables
		var	triggerClasses = 'flash strobe shakeH shakeV bounce tada wave spinCW spinCCW slingshotCW slingshotCCW wobble pulse pulsate heartbeat panic',
			classesArray = new Array,
			classesArray = triggerClasses.split(' '),
			classAmount = classesArray.length;