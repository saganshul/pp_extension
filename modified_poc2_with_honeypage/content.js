document.addEventListener('copy', (event) => {
    console.log(event.path[0].innerHTML);
    chrome.runtime.sendMessage({event: "copy", payload: event.path[0].innerHTML}, function(response) {
        console.log(response);
    });
});
