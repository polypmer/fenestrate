
function toggleMag() {
    // code below is supposed to be inside your button trigger
    chrome.tabs.executeScript(null, {
	file: "/content_scripts/highlight.pack.js"
    });
    chrome.tabs.executeScript(null, {
	file: "/content_scripts/magnify.js"
    });
}





chrome.browserAction.onClicked.addListener(toggleMag);
