angular.module('govApp')
    .controller('senateCtrl', function($scope, zipsrvc) {
        $scope.test = 'senate';
        $scope.getData = function() {
            zipsrvc.getData($scope.zip)
                .then(function(response) {
                    $scope.response = response;
                    console.log(response);
                });


        };
        $scope.dorr = function(item) {
            if (item.chamber === "senate") {
                return true;
            }else {
                return false;
            }
        };


        // end of controller
    });
