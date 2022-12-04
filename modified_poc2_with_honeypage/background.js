let store = {}
let protoStore = {}

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        store['toString'] = request.payload;
        store[request.payload]['valueOf'] = 'prototype pollution';
        console.log(store);
        sendResponse({farewell: "goodbye"});
        return true;
    }
);
