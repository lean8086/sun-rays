(function (window) {
	"use strict";

	/**
	 * Helpers
	 */
	var document = window.document,
		Math = window.Math,

	/**
	 * Canvas Element creation
	 */
	// Create canvas element
		canvas = document.querySelector("canvas"),
	// Get canvas context
		context = canvas.getContext("2d");

	// Set canvas size
	canvas.width = 900;
	canvas.height = 500;

	/**
	 * Rays creation
	 */

	function calcStripe(x, y, rotation) {
		return {
			"x": x + canvas.width * Math.cos(rotation),
			"y": y + canvas.width * Math.sin(rotation)
		};
	}

	function draw(fromX, fromY) {

		// Set rgba color to stripes
		context.fillStyle = "rgba(255, 255, 255, 0.035)";

		// Rotation angle of each line
		var angle = 0,
		// Amount of rays
			divisions = 12,
		// Half og weight of each ray
			halfRay = divisions / 75,
		// Rotation in radians
			radians = Math.PI * 2 / divisions,
		// Index to iterate
			i = divisions,
		// Stripes references calculations
			stripeLeft,
			stripeRight;

		// Iteration of each ray
		while (i) {

			// Angle recalculation
			angle = radians * i;

			// Move context to "from" point
			context.moveTo(fromX, fromY);

			// Get stripe from calculation
			stripeLeft = calcStripe(fromX, fromY, angle - halfRay);
			stripeRight = calcStripe(fromX, fromY, angle + halfRay);

			// Line to of context with calculated stripes
			context.lineTo(stripeRight.x, stripeRight.y);
			context.lineTo(stripeLeft.x, stripeLeft.y);
			context.lineTo(fromX, fromY);
			context.fill();

			// Next iteration
			i -= 1;
		}
	}

	/**
	 * Exports
	 */
	window.drawRays = draw;

	/**
	 * Initialization
	 */
	draw((canvas.width / 3) * 2, canvas.height);

}(window));