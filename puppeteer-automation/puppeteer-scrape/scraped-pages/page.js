<html><head><meta name="color-scheme" content="light dark"></head><body><pre style="word-wrap: break-word; white-space: pre-wrap;">console.log('PP is here');
var target = {};

function foo(key1, key2, value) {
    console.log(key1, key2, value);
    target[key1] = {};
    target[key1][key2] = value;
}

function input_value(val) {
    var mid = val + " ";
    return mid;
}

function pp(key1, key2, value) {
    mid = input_value(value);
    foo(key1, key2, mid);
}

function processClick() {
    console.log('Processing form');
    var key1 = document.getElementById('key1').value;
    var key2 = document.getElementById('key2').value;
    var value = document.getElementById('value').value;

    pp(key1, key2, value);
    return 1;
}

// module.exports = { pp: pp }

</pre></body></html>