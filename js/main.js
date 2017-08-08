'use strict';
var Slides = (function() {
	let imageCount = 0;
	return {
		loadImage: (count) => {  //load image and caption with fadeIn
			$('.image-frame').attr('src', ('img/' + count + '.jpg')).hide().fadeIn('slow');
			$('.caption').html(Slides.getCaption(count)).hide();  //get caption and hide it
			$('.image-frame').hover(function(){ $('.caption').fadeIn('slow');});  // show caption on hover
		},
		getCount: () => {
			return imageCount;
		},
		decrementCount: () => {
			imageCount--;
			if (imageCount === -1) {  //loop count back to 7
				imageCount = 7;
			}
		},
		incrementCount: () => {
			imageCount++;
			if (imageCount === 8) {  //loop count back to 0
				imageCount = 0;
			}
		}
	};
})();

$(document).ready(function() {
	$('.fa').click(function(e){
		if (e.target.classList[1] === 'fa-arrow-left') { //determine if count icnreases or decreases depending on arrow clicked
			Slides.decrementCount();
		} else {
			Slides.incrementCount();
		}
		Slides.loadImage(Slides.getCount());  //load image with image count
	});

	window.setInterval(function () {  //show next image after 6 seconds.
		Slides.incrementCount();
		Slides.loadImage(Slides.getCount());
	}, 6000);
});