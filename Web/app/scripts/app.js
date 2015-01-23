// create the module and name it multimetro
var multimetro = angular.module('multimetro', ['ngRoute', 'ngProgress', 'lbServices']);

// configure our routes
multimetro.config(function($routeProvider) {
    $routeProvider

        // route for the home page
        .when('/', {
            templateUrl : 'pages/home.html',
            controller  : 'mainController',
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
multimetro.config(function(LoopBackResourceProvider) {
    // Change the URL where to access the LoopBack REST API server
    LoopBackResourceProvider.setUrlBase('http://localhost:3000/api/v1');
});

// create the controller and inject Angular's $scope
multimetro.controller('mainController', function($scope, ngProgress, Multa) {
    // create a title to display in our view
    $scope.appName = 'Multimetro';
    $scope.multas = [];

    function getMultas() {
        $scope.multas = Multa.find({
          filter: { 
            where: {valor: $scope.multas.searchAPI},
            limit: 10 
          }
        });
    }
    //console.log($scope.multas);

    //getMultas();

    ngProgress.start(2);
    ngProgress.complete();
});

multimetro.controller('aboutController', function($scope, ngProgress) {
    ngProgress.start(2);
    ngProgress.complete();
});

multimetro.controller('contactController', function($scope, ngProgress) {
    ngProgress.start(2);
    ngProgress.complete();
});