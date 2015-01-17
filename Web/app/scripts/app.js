// create the module and name it multimetro
var multimetro = angular.module('multimetro', ['ngRoute']);

// configure our routes
multimetro.config(function($routeProvider) {
    $routeProvider

        // route for the home page
        .when('/', {
            templateUrl : 'pages/home.html',
            controller  : 'mainController'
        })

        // route for the about page
        .when('/about', {
            templateUrl : 'pages/about.html',
            controller  : 'aboutController'
        })

        // route for the contact page
        .when('/contact', {
            templateUrl : 'pages/contact.html',
            controller  : 'contactController'
        });
});
// create the controller and inject Angular's $scope
multimetro.controller('mainController', function($scope) {
    // create a title to display in our view
    $scope.appName = 'Multimetro';
});

multimetro.controller('aboutController', function($scope) {
});

multimetro.controller('contactController', function($scope) {
});
