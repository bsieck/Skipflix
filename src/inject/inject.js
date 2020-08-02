
$(window).on("load", function() {
	console.log("--- STARTING SKIPFLIX ---");
	
	// Checks the DOM every half second to see if the buttons exists
	// Clicks "Skip" if it is found
	var justClicked = false;

	setInterval(function() {
		
		console.log("Checking...");

		

		if (!$(".nfp .skip-credits a").length) {
			
			justClicked = false;
		}

		if (!justClicked && $(".nfp .skip-credits a").length) {
			$(".nfp .skip-credits a")[0].click();

			
			console.log("skipped");

			justClicked = true;
		}

		// if ($("div.end-card__metadata-area-play-button").length) {

		// }
		//$("div.PlayerButton.PlayerControlsButton.PlaybackControls__item.PauseButton")[0].click();
		


		//$("div.end-card__metadata-area-button-wrapper")[0].click();

		//$("div.end-card__metadata-area-play-button")[0].click();

		
		
	}, 500);
	

});