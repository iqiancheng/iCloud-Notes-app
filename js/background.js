chrome.app.runtime.onLaunched.addListener(function() {
	var screenWidth = screen.availWidth;
	var screenHeight = screen.availHeight;
	var width  = 962;
	var height = 610;
	chrome.app.window.create('index.html', {
		bounds: {
			width: width,
			height: height,
			left: Math.round((screenWidth-width)/2),
			top:  Math.round((screenHeight-height)/2)
		},
		minHeight: height,
		minWidth:  width,
		maxHeight: height,
		maxWidth:  width,
		frame: 'none'
	});
});
