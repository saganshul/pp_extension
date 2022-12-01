// References
// https://javascript.plainenglish.io/create-a-chrome-extension-to-inject-script-8579717b2c17

function injectInputFields() {
    // Create an input element for key1
    var key1 = document.createElement("input");
    key1.setAttribute("type", "text");
    key1.setAttribute("id", "key1");

    // Create an input element for key2
    var key2 = document.createElement("input");
    key2.setAttribute("type", "text");
    key2.setAttribute("id", "key2");

    // Create an input element for value
    var value = document.createElement("input");
    value.setAttribute("type", "text");
    value.setAttribute("id", "value");

    // create a submit button
    var s = document.createElement("input");
    s.setAttribute("type", "submit");
    s.setAttribute("value", "Submit");
    s.setAttribute("onClick", "javascript: processClick();");

    // Append the fields to the document
    document.body.appendChild(key1);
    document.body.appendChild(key2);
    document.body.appendChild(value);
    document.body.appendChild(s);
}

function injectJS() {
    const domScript = document.createElement("script");
    domScript.setAttribute("id", "injected_me");
    domScript.src = chrome.runtime.getURL("js/inject_me.js");
    document.body.appendChild(domScript);
}

(function () {
    window.addEventListener('load', function () {
        injectInputFields();
        injectJS();
    });
})();
