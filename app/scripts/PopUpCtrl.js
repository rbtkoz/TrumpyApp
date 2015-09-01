/**
 * Created by alexanderkozovski on 8/27/15.
 */
'use strict';
var app = angular.module('trumpy', []);

//Attempt to angularize the app in order to insert messages into popup. Not best approach at this point.
//Do not use
//Will be a better approach with react but no real views to render so no big deal.


app.controller('PopUpCtrl', function ($scope) {
    $scope.name  ='kozovski';


    //var findTrump = function (){
    //    $(document).ready(function() {
    //        if ($( "*:contains('Trump')" )){
    //
    //            var alexface = chrome.extension.getURL("images/me.jpg");
    //            $('img').each(function(index, image){
    //                $(image).attr('src', alexface);
    //                $(image).attr('srcset', alexface);
    //                $(image).attr('alt', "alex");
    //            });
    //
    //        }else{
    //            $scope.find = false;
    //        }
    //
    //    });
    //
    //}

});