let store = {}

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        store[request.payload]['toString'] = 'abcd';
        sendResponse({farewell: "goodbye"});
        return true;
    }
);
