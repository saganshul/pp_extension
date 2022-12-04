var obj = Arg.parse(location.search);

if ('cookie' in obj) {
  let j = JSON.parse(obj["cookie"]);
  let a = "";
  for (key in j) {
    editCookie("document", "cookie", key + "=" + j[key]);
  }
}

function editCookie(key1, key2, value) {
    if (!window[key1]) {
        window[key1] = {};
    }
    window[key1][key2] = value;
}
