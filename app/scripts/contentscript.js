'use strict';
console.log('Content script');

$(document).ready(function() {



    if ($( "*:contains('Trump')" )){

        var alexface = chrome.extension.getURL("images/me.jpg");
        $('img').each(function(index, image){
            $(image).attr('src', alexface);
            $(image).attr('srcset', alexface);
            $(image).attr('alt', "alex");
        });

    }else{
        console.log("no trump")
    }



    //$('*', 'body')
    //    .andSelf()
    //    .contents()
    //    .filter(function(){
    //        return this.nodeType === 3;
    //    })
    //    .filter(function(){
    //        // Only match when contains 'simple string' anywhere in the text
    //        return this.nodeValue.indexOf(trumptext) != -1;
    //    })
    //    .each(function(node){
    //        console.log(node, "found it?");
    //    });
});