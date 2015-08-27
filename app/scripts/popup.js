'use strict';
console.log('popup');

chrome.tabs.executeScript(null, {file: 'scripts/contentscript.js'}, function() {


  window.setTimeout(function() {
    window.close();
  }, 2000);


});
