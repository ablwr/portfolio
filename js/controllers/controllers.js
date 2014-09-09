app.controller('PortfoliosController', function ($scope, portfoliosService) {

    init();

    function init() {
        $scope.portfolios = portfoliosService.getPortfolios();
    }

    };
});