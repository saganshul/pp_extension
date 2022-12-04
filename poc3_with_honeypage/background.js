var store = {};

function addJsonPayload(url, key, value) {
    if (!store[url]) {
        store[url] = {};
    }
    store[url][key] = value;
}

function getJsonPayload(url) {
    return store[url];
}

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        addJsonPayload(request.url, request.key, request.value);
        console.log(getJsonPayload(request.url));
        sendResponse({farewell: "goodbye"});
        return true;
    }
);
