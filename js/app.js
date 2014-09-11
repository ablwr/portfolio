var app = angular.module('portfoliosApp', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/portfolio',
            {
                controller: 'PortfoliosController',
                templateUrl: '/app/partials/portfolio.html'
            });
});