window.onload = function() {
	var webview = document.getElementById("inotes");
	webview.src = "https://www.icloud.com/#notes2";
	webview.addEventListener('loadcommit',
	function(e) {
		webview.insertCSS({file: "css/inject.css"});
		webview.executeScript({ file: "js/inject.js" });
	});

	webview.addEventListener('contentload', function() {
	});

	var mini_icon = document.getElementById("min");
	mini_icon.onclick = function(){
		chrome.app.window.current().minimize();
	}

}