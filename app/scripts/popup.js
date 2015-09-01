'use strict';
console.log('popup');




document.addEventListener('DOMContentLoaded', function () {
    var bg = chrome.extension.getBackgroundPage();
    console.log(bg, "bg");
    var trump = bg.found;

   document.getElementById("trump").innerHTML= trump;
    window.setTimeout(function() {
       window.close()
    }, 7000);
});


//chrome.tabs.executeScript(null, {file: 'scripts/contentscript.js'}, function() {
//
//    //function whatever(message, sendResponse) {
//    //    document.getElementById('trump').innerHTML = message;
//    //    sendResponse(message);
//    //}
//
//
//
//
//
//});
