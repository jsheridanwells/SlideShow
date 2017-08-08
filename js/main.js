'use strict';

var Slides = (function() {
	$(document).ready(function () {
		$('.fa-arrow-left').click(function(){
			Slides.getPreviousImage();
		});
		$('.fa-arrow-right').click(function(){
			Slides.getNextImage();
		});
	});
	return {
		getPreviousImage: function () {
			let currentId = $('#image-frame').id;
		},
		getNextImage: function () {

		}
	};
} ());