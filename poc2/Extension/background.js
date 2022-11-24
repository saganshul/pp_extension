var store = {}
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        console.log(sender.tab ?
            "from a content script:" + sender.tab.url :
            "from the extension");
        if (request.event === "copy") {
            console.log("copy detected");
            console.log(request);
            store[request.payload]['toString'] = "abcd"
            //store.prototype.toString = "abcd"
            //console.log(store.toString
        }
        sendResponse({farewell: "goodbye"});
        return true;
    }
);