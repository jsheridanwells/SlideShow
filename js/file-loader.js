'use strict';

 var Slides = (function(obj){
 	obj.loadThumbImage = function(e) {
 		let source = e.target.src;
 		$('#image-frame').attr('src', source);
 		$('.caption').text(Slides.getCaption(this.id));
 	};
 	obj.loadThumbs = function() {
 		for (let i = 0; i < Slides.returnCaptionsLength(); i++) {
 			let content = '<img src="img/' + i + '.jpg" id ="'+ i + '" class="thumbnail" alt="thumbnail" height="50" width="50">';
 			$(content).height(100).width(100);
 			$('#thumbs').append(content);

 		}
		$('.thumbnail').click(Slides.loadThumbImage);
 	};

 	return obj;
 }(Slides || {}));

window.onload = Slides.loadThumbs;