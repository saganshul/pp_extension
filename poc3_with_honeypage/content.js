document.addEventListener('click', (event) => {
    const key = event.detail.key;
    const value = event.detail.value;
    const url = event.detail.url;
    chrome.runtime.sendMessage({url: url, key: key, value: value}, function(response) {
        console.log(response);
    });
});