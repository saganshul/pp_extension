var require = (function (){

	var head = document.getElementsByTagName("head")[0];

	function require(scriptList, onSuccess, onFailure){

		"use strict";

		var i, len, url, pending = [];

		scriptList = [].concat(scriptList);
		len = scriptList.length;

		for(i=0; i<len; i++){	//for each required script
			url = scriptList[i];
			if(!isLoaded(url)){	//if there is not already a script element with this URL in the document
				appendScript(url, onLoad, onFailure);	//append a script element to <head>
				pending.push(url);
			}
		}

		function onLoad(evt){
			if(!this.readyState || this.readyState === "loaded" || this.readyState === "complete"){
				delete this.onreadystatechange;
				delete this.onload;
				pending.splice(pending.indexOf(this.src), 1);
				if(!pending.length){
					onSuccess();
				}
			}
		}

	}

	function isLoaded(url){
		var i, len, scripts = Array.prototype.slice.call(document.getElementsByTagName("script"));
		len = scripts.length;
		for(i=0; i<len; i++){
			//if(getFullUrl(scripts[i].src) === url) return true;
			if(scripts[i].src === url) return true;
		}
		return false;
	}

	function appendScript(url, onLoad, onError){
		var script = document.createElement("script");
		script.src = chrome.runtime.getURL(url);
		script.onreadystatechange = onLoad;
		script.onload = onLoad;
		script.onerror = onError /*|| function (evt){ throw new Error("Required script failed to load: "+url); }*/;
		(document.head || document.documentElement).appendChild(script);
    return true;
	}

	return require;

})();

require(["js/arg-1.4.js"], function (){ require(["js/parse.js"], function (){ console.log('Parse.js loaded!'); }, function (){ console.log('error2!'); }); }, function (){ console.log('error!'); });
