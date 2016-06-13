angular.module('govApp')
    .controller('houseCtrl', function($scope, zipsrvc) {
        $scope.test = 'house';



        $scope.getData = function() {
            zipsrvc.getData($scope.zip)
                .then(function(response) {
                    $scope.response = response;
                    console.log(response);
                });
        };

        $scope.dorr = function(item) {
            if (item.chamber === "house") {
                return true;
            }else {
                return false;
            }
        };




        // end of controller
    });
