document.addEventListener('copy', (event) => {
    const selection = document.getSelection();
    chrome.runtime.sendMessage({event: "copy", payload: selection.toString()}, function(response) {
        console.log(response);
    });
});