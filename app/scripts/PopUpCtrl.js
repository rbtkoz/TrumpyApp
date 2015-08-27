/**
 * Created by alexanderkozovski on 8/27/15.
 */
var app = angular.module('trumpy', []);

app.controller('PopUpCtrl', function ($scope) {
    $scope.name  ='kozovski'


    var findTrump = function (){
        $(document).ready(function() {
            if ($( "*:contains('Trump')" )){

                var alexface = chrome.extension.getURL("images/me.jpg");
                $('img').each(function(index, image){
                    $(image).attr('src', alexface);
                    $(image).attr('srcset', alexface);
                    $(image).attr('alt', "alex");
                });

            }else{
                $scope.find = false;
            }

        });

    }
}