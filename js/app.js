var app = angular.module('portfoliosApp', ['ngRoute']);

//This configures the routes and associates each route with a view and a controller
app.config(function ($routeProvider) {
    $routeProvider
        .when('/portfolio',
            {
                controller: 'PortfoliosController',
                templateUrl: '/app/partials/portfolio.html'
            });
});