angular.module('govApp')
.controller('govAgCtrl', function($scope, zipsrvc) {
    $scope.test = 'agencies';

    $scope.getAg = function() {
    zipsrvc.getAg()
    .then (function(response) {
        $scope.response = response.Contact;
        console.log($scope.response);
    });
};
$scope.getAg();




// end of controller
});
