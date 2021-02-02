(function($) {
    "use strict";
	$('#container').showmore({
		closedHeight: 250,
		buttonTextMore: 'Show more',
		buttonTextLess: 'Close',
		buttonCssClass: 'showmore-button',
		animationSpeed: 0.5
	});
	$('#container1').showmore({
		closedHeight: 350,
		buttonTextMore: 'Show more',
		buttonTextLess: 'Close',
		buttonCssClass: 'showmore-button',
		animationSpeed: 0.5
	});
	$('#container2').showmore({
		closedHeight: 280,
		buttonTextMore: 'Show more',
		buttonTextLess: 'Close',
		buttonCssClass: 'showmore-button',
		animationSpeed: 0.5
	});
	$('#container3').showmore({
		closedHeight: 450,
		buttonTextMore: 'Show more',
		buttonTextLess: 'Close',
		buttonCssClass: 'showmore-button',
		animationSpeed: 0.5
	});
	$('.hide-details').showmore({
		closedHeight: 115,
		buttonTextMore: 'Show more',
		buttonTextLess: 'Close',
		buttonCssClass: 'showmore-button1',
		animationSpeed: 0.5
	});
	if (document.documentElement.clientWidth < 900) {
		$('#container1').showmore({
			closedHeight: 450,
			buttonTextMore: 'Show more',
			buttonTextLess: 'Close',
			buttonCssClass: 'showmore-button',
			animationSpeed: 0.5
		});
	}
	$( "#mySlider" ).slider({
		range: true,
		min: 10,
		max: 999,
		values: [ 200, 500 ],
		slide: function( event, ui ) {
			$( "#price" ).val( "SR" + ui.values[ 0 ] + " - SR" + ui.values[ 1 ] );
		}
	});

	$( "#price" ).val( "SR" + $( "#mySlider" ).slider( "values", 0 ) +
			   " - SR" + $( "#mySlider" ).slider( "values", 1 ) );
	$( "#mySlidera" ).slider({
		range: true,
		min: 0,
		max: 1000,
		values: [ 1, 100],
		slide: function( event, ui ) {
			$( "#age" ).val( "M" + ui.values[ 0 ] + " - M" + ui.values[ 1 ] );
		}
	});

	$( "#age" ).val( "M" + $( "#mySlidera" ).slider( "values", 0 ) +
			   " - M" + $( "#mySlidera" ).slider( "values", 1 ) );
	$( "#mySliders" ).slider({
		range: true,
		min: 0,
		max: 50,
		values: [ 0, 20 ],
		slide: function( event, ui ) {
			$( "#size" ).val( "Kg" + ui.values[ 0 ] + " - Kg" + ui.values[ 1 ] );
		}
	});

	$( "#size" ).val( "Kg" + $( "#mySliders" ).slider( "values", 0 ) +
			   " - Kg" + $( "#mySliders" ).slider( "values", 1 ) );
})(jQuery);