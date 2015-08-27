'use strict';


chrome.runtime.onInstalled.addListener(function (details) {
  console.log('previousVersion', details.previousVersion);

});

chrome.browserAction.setBadgeText({text: '\'Trump'});

console.log('\'Allo \'Allo! Event Page for Browser Action');


chrome.browserAction.onClicked.addListener(function() {

  chrome.tabs.executeScript({
    code: 'document.body.style.backgroundColor="red"'
  });
});

