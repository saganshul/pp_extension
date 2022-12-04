const submitButton = document.getElementById('submit');

submitButton.addEventListener('click', (event) => {
  const key = document.getElementById('key').value;
  const value = document.getElementById('value').value;
  const url = window.location.href;
  chrome.runtime.sendMessage({url: url, key: key, value: value}, function(response) {
    console.log(response);
  });
});