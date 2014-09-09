var app = angular.module('portfolioApp', ['ngRoute']);

//This configures the routes and associates each route with a view and a controller
app.config(function ($routeProvider) {
    $routeProvider
        .when('/portfolio',
            {
                controller: 'portfolioController',
                templateUrl: '/app/partials/portfolio.html'
            })
        .otherwise({ redirectTo: '/portfolio' });
});