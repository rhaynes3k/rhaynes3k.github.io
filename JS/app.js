angular.module('govApp', ['ui.router'])

.config(function($urlRouterProvider, $stateProvider) {

    $stateProvider
        .state('home', {
            url: '/',
            // controller: 'homeCtrl',
            templateUrl: './../Views/homeview.html'
        })

        .state('house', {
            url: '/house',
            controller: 'houseCtrl',
            templateUrl: './../Views/houseview.html'
        })

        .state('senate', {
            url: '/senate',
            controller: 'senateCtrl',
            templateUrl: './../Views/senateview.html'
        })

        .state('govAg', {
            url: '/govagview',
            controller: 'govAgCtrl',
            templateUrl: './../Views/govagview.html'
        });
        $urlRouterProvider.otherwise('/');


    // end of config
})


.directive('scrollDir', function() {
    return {
        templateUrl:'./../Directives/scrolldir.html'
    };
})

.directive('scroll2Dir', function() {
    return {
        templateUrl:'./../Directives/scroll2dir.html'
    };
})

.directive('boxDir', function() {
    return {
        templateUrl:'./../Directives/boxdir.html'
    };
});
