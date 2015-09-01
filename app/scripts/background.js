'use strict';

chrome.runtime.onInstalled.addListener(function (details) {


});

chrome.webNavigation.onCompleted.addListener(function(details) {
  chrome.tabs.executeScript(details.tabId, {
    file: 'scripts/trumpfinder.js'
  });
});

//chrome.browserAction.onClicked.addListener(function (tab) { //Fired when User Clicks ICON
//
//  chrome.tabs.executeScript(tab.tabId, {
//      "file": "scripts/trumpfinder.js"
//    });
//
//});


//passing messages to popup
//terrible if else stuff but will optimize later
var found;
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {

    if (request.trump === "found") {
      found = "Looking for Donald Trump...";
      sendResponse({didfind: "found Donald Trump"});

    }else if(request.trump ==="notfound"){
      sendResponse({didfind: "didn't find Donald Trump"});
      found = "Could not find Donald Trump";

    }else if(request.trump ==="recognize"){
      sendResponse({didfind: "We recognized Donald Trump, applying clown nose..."});
      found = "We recognized Donald Trump, applying clown nose...";
    }

  });


chrome.browserAction.setBadgeText({text: 'Trump'});

