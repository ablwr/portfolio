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
            id: 1, 
            name: 'Flatiron Karaoke', 
            img: 'img/karaoke1.png', 
            description: 'Popcorn.js app that syncs song lyrics and other media with video'
        },
        {
            id: 2, 
            name: 'Scopitone', 
            img: 'img/scopitone.png', 
            description: 'Randomly generates videos'
        },
        {
            id: 3, 
            name: 'ffmproviser', 
            img: 'img/ffmproviser.png', 
            description: 'One-page guided web form that assists users in making FFMpeg commands'
        },
        {
            id: 4, 
            name: 'Petsitfor.me', 
            img: 'img/petsitforme.png', 
            description: 'Rails app to help dog walkers manage their business and facilitate interaction with clients'
        },
        {
            id: 5, 
            name: 'Need an Umbrella?', 
            img: 'img/umbrella.png', 
            description: 'Rails app for timely weather data'
        }

    ];

});