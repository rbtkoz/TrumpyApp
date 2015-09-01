





// REMOVED BUT LEFT AS COMMENTS> THIS CODE IS NOW IN FINDTRUMP
// did this so we can trigger this for semantic reasons but also an attempt to be more modular.
// Future executions will see this broken up

//'use strict';
//console.log('Content script');
//
//$(document).ready(function() {
//
//    var trumpname = $( "*:contains('Trump')");
//
//    if( trumpname.length > 0){
//        var imgArr = [];
//
//        console.log($('img'), $('img').length, "pre-processing count");
//
//        $('img').each(function(index,img){
//
//
//            //regex that chooses filters by trump, donald, donaldtrump etc
//            var re = /(donald)_?|(trump)_?/ig;
//            var resvg = /(svg)/ig;
//
//            if(re.test(img.src) && resvg.test(img.src) ===false || re.test(img.alt) ){
//
//                imgArr.push(img);
//                //$('img').css('display','none');
//
//            }
//
//        });
//
//        //for each element in trump Arr send to Face Recognition API
//
//        //imgArr.each(function(index, trump){
//
//        var trump = imgArr[0];
//        var imgH;
//        var imgW;
//        var faceX;
//        var faceY;
//        var noseX;
//        var noseY;
//        var nosewh;
//        var noseTipX;
//        var noseTipY;
//
//        //serialize func
//        var serialize = function(obj) {
//            var str = [];
//            for(var p in obj)
//                if (obj.hasOwnProperty(p)) {
//                    str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
//                }
//            return str.join("&");
//        }
//
//
//        var kairosParams = {
//            "url":trump.src,
//            "gallery_name":"TrumpGallery",
//            "minHeadScale":".125",
//            "selector":"EYES",
//            "threshold":"0.63",
//            "max_num_results":"4"
//        };
//
//        var kairosDetect = {
//            "url":trump.src,
//            "selector":"SETPOSE"
//        }
//
//        var kairosBody = {
//            "image":trump.src,
//            "gallery_name":"TrumpGallery",
//            "selector":"FULL"
//        };
//
//        var kairosParamsSer = serialize(kairosParams);
//
//
//        //ajax to see if trump matches
//            $.ajax({
//                url: "https://api.kairos.com/recognize",
//                type: "POST",
//                async: true,
//                crossDomain: true,
//                data: JSON.stringify(kairosParams),
//                headers: {
//                    "content-type": "application/json",
//                    "app_id": "850b8dae",
//                    "app_key": "0157e6b9b4ca868112d46031207e2283"
//                }
//            }).done(function(recognized) {
//                console.log(recognized,"recognized");
//
//                //ajax to find dimensions( may not be necessary if above ajax returns info
//                $.ajax({
//                    url: "https://api.kairos.com/detect",
//                    type: "POST",
//                    async: true,
//                    crossDomain: true,
//                    data: JSON.stringify(kairosDetect),
//                    headers: {
//                        "content-type": "application/json",
//                        "app_id": "850b8dae",
//                        "app_key": "0157e6b9b4ca868112d46031207e2283"
//                    }
//                }).done(function(detected){
//                    console.log(detected, "detected");
//
//                    //assigning values to each data point
//
//                    //inside face recognition window dimensions
//                    imgH = recognized.images[0].transaction.height;
//                    imgW = recognized.images[0].transaction.width;
//
//                    //API
//                    noseTipX = detected.images[0].faces[0].noseTipX;
//                    noseTipY = detected.images[0].faces[0].noseTipY;
//
//                    //x and y origin of window
//                    //faceX = recognized.images[0].transaction.topLeftX;
//                    //faceY = recognized.images[0].transaction.topLeftY;
//
//                    //regulates the size of the nose relative to image
//                    nosewh = Math.floor(imgW/3);
//
//                    //detected returns noseTip x and y points (confirm if other points exist)
//                    noseX =  Math.floor(noseTipX);
//                    //we are pushing from bottom so we need to take the difference between image height and noseTipY
//                    //add it to teh noseTipY(in case the image is not a square)
//                    //then add the dimension of the nose
//                    //add half ball dimension because of 0,0 origin not center of nose
//                    noseY = Math.floor((imgH - noseTipY) + noseTipY + (nosewh+(nosewh/2)));
//
//                    //measure the actual image that we are inputting
//                    console.log(trump.width,trump.height, "original image dim");
//                    console.log("noseX",noseX,"noseY",noseY);
//
//                    //attempt to measure nose location based on face window (fail)
//                    //var noseLeft=(faceX + imgH/2 -(imgH/6)) +"px";
//                    //var noseBottom = (faceY + imgW +(imgW/25)) +"px";
//
//                    //create and append nose class
//                    $(trump).after("<div class ='nose'></div>");
//
//                    $(".squeeze:hover").css({
//                        "-webkit-transform": "translate(1.5em,0)",
//                        "-moz-transform": "translate(1.5em,0)",
//                        "-o-transform": "translate(1.5em,0)",
//                        "-ms-transform": "translate(1.5em,0)",
//                        "transform": "translate(1.5em,0)"
//                    });
//
//                    //css properties
//                    $('.nose').css({
//                        "position": "relative",
//                        "width": nosewh,
//                        "height": nosewh,
//                        "background": "#FF0000",
//                        "left":noseX,
//                        "bottom":noseY,
//                        "-webkit-transition": "1s ease-in-out",
//                        "-moz-transition": "1s ease-in-out",
//                        "-o-transition": "1s ease-in-out",
//                        "transition": "1s ease-in-out",
//                        //"left": noseLeft,
//                        //"bottom": noseBottom,
//                        "border-radius": "50%",
//                        "background-image": "radial-gradient(ellipse, rgba(255,255,255,1) 0%, rgba(255, 0, 0, 1) 50%, #7f0000 95%)"
//                    });
//
//                    $('.nose').addClass("squeeze");
//
//
//                });
//
//                //debugging
//                //console.log(recognized.images[0]);
//                //console.log("imgH: ",imgH,"imgW: ", imgW, "faceX: ",faceX,"faceY: ", faceY)
//
//
//            });
//
//
//        //});
//
//        console.log(imgArr, imgArr.length, "post-processing count");
//
//       //trumpname.css( "background-color", "yellow" );
//       //var alexface = chrome.extension.getURL("images/me.jpg");
//       //$('img').each(function(index, image){
//       //    $(image).attr('src', alexface);
//       //    $(image).attr('srcset', alexface);
//       //    $(image).attr('alt', "alex");
//       //});
//
//
//   }else{
//       console.log('not found');
//        //need to do something special here. Meme all images for ex
//   }
//
//});



    //

    //
    //$('*', 'body').filter(function(){
    //    return $(this).text().toLowerCase() === 'trump';})
    //

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





//var settings = {
//    "async": true,
//    "crossDomain": true,
//    "url": "https://api.kairos.com/recognize?url=%22url%22%3A%22https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2F4%2F40%2FDonald_Trump_by_Gage_Skidmore_3.jpg%22&gallery_name=%22gallery_name%22%3A%22TrumpGallery%22&minHeadScale=%22minHeadScale%22%3A%22.125%22&selector=%22selector%22%3A%22FACE%22&threshold=%22threshold%22%3A%2240%22&max_num_results=%22max_num_results%22%3A%224%22",
//    "method": "POST",
//    "headers": {
//        "content-type": "application/json",
//        "app_id": "850b8dae",
//        "app_key": "0157e6b9b4ca868112d46031207e2283"
//    },
//    "processData": false,
//    "data": "{\n    \"image\":\"https://upload.wikimedia.org/wikipedia/commons/4/40/Donald_Trump_by_Gage_Skidmore_3.jpg\",\n    \"gallery_name\":\"TrumpGallery\"\n}"
//}
//
//$.ajax(settings).done(function (response) {
//    console.log(response);
//});