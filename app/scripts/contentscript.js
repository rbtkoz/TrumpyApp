'use strict';
console.log('Content script');

$(document).ready(function() {

    var trumpname = $( "*:contains('Trump')");

    if( trumpname.length > 0){

        var imgArr = [];
        console.log(angular.element('img').length, "how many images");

        angular.element('img').each(function(index,img){

            //fun times remove image
            angular.element('img').css('display','none');

            imgArr.push(img.src);

        })

        console.log(imgArr);

       console.log(this, "this");
       //trumpname.css( "background-color", "yellow" );
       //var alexface = chrome.extension.getURL("images/me.jpg");
       //angular.element('img').each(function(index, image){
       //    angular.element(image).attr('src', alexface);
       //    angular.element(image).attr('srcset', alexface);
       //    angular.element(image).attr('alt', "alex");
       //});


   }else{
       console.log('not found');
   }

    var trumptext = "trump";


    //
    //angular.element('*', 'body').filter(function(){
    //    return angular.element(this).text().toLowerCase() === 'trump';})
    //

    //angular.element('*', 'body')
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