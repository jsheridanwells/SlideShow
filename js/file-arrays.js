'use strict';

var Slides = (function(obj){
	let captions = [
		'This is a couple with a baby from the 1920s.',
		'This is a photo of my grandfather as a young man.',
		'This is the family of my great aunt and uncle outside of my father\'s house.',
		'This is a family in the 1940s',
		'This is my grandfather\'s family on a boat',
		'These are my grandparents as newlyweds.',
		'This is my grandfather\'s family in the 1920s',
		'This is my grandfather with his sisters'
	];

	obj.getCaption = function(index) {
		return captions[index];
	};
	obj.returnCaptionsLength = function() {
		return captions.length;
	};
	return obj;
}(Slides || {}));