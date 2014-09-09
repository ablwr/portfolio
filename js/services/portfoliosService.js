app.service('portfoliosService', function () {
    this.getPortfolios = function () {
        return portfolios;
    };

    this.getPortfolio = function (id) {
        for (var i = 0; i < portfolios.length; i++) {
            if (portfolios[i].id === id) {
                return portfolios[i];
            }
        }
        return null;
    };

    var portfolios = [
        {
            id: 1, name: 'Flatiron Karaoke', img: 'img/karaoke1.png', description: 'Kiss from a Rose...',
        }

    ];

});