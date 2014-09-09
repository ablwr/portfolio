app.controller('PortfoliosController', function ($scope) {

    init();

    function init() {
        $scope.portfolios = portfoliosService.getPortfolios();
    }

    };
});