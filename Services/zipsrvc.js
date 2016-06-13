angular.module('govApp')
.service('zipsrvc', function($http){
    var base ='https://congress.api.sunlightfoundation.com/legislators/locate?zip=';
    var api = '&apikey=c8f99ff887a743f49d409b920677f1cd';

    this.getData = function(zip) {
        console.log(zip);
        return $http ({
            method: 'GET',
            url: base + zip + api
        })
        .then(function(response) {
            // console.log(response.data.results[0]);
            return response.data.results;


        });
    };

    this.getAg = function() {
        return $http ({
            method: 'GET',
            url: 'https://www.usa.gov/api/USAGovAPI/contacts.json/contacts'
        })
        .then(function(response) {
            console.log(response);
            return response.data;

        });
    };






// end of service
});
