(function (window) {
	'use strict';

	/**
	 * Helpers
	 */
	var Math = window.Math,
		// Get canvas element
		canvas = window.document.querySelector('canvas'),
		// Get canvas context
		ctx = canvas.getContext('2d'),
		// Grab the Canvas size
		width = 900,
		height = 400,

	/**
	 * Properties
	 */
		// Amount of rays
		divisions = 12,
		// Half of weight of each ray
		halfRay = divisions / 75,
		// Rotation in radians
		radians = Math.PI * 2 / divisions;

	/**
	 * Methods
	 */
	function calculateStripe(x, y, rotation) {
		return {
			'x': x + width * Math.cos(rotation),
			'y': y + width * Math.sin(rotation)
		};
	}

	function draw(centerX, centerY) {
		// Rotation angle of each line
		var angle = 0,
		// Index to iterate
			i = divisions,
		// Stripes references calculations
			stripeLeft,
			stripeRight;

		// Iteration of each ray
		while (i) {
			// Angle recalculation
			angle = radians * i;
			// Move context to 'from' point
			ctx.moveTo(centerX, centerY);
			// Get stripe from calculation
			stripeLeft = calculateStripe(centerX, centerY, angle - halfRay);
			stripeRight = calculateStripe(centerX, centerY, angle + halfRay);
			// Line to of context with calculated stripes
			ctx.lineTo(stripeRight.x, stripeRight.y);
			ctx.lineTo(stripeLeft.x, stripeLeft.y);
			ctx.lineTo(centerX, centerY);
			ctx.fill();
			// Next iteration
			i -= 1;
		}
	}

	/**
	 * Initialization
	 */
	window.onload = function () {
		// Set rgba color to stripes on canvas
		ctx.fillStyle = 'rgba(255, 255, 255, 0.035)';
		// Draw stripes into canvas
		draw(width / 2, height);
	};

}(this));