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
            url: 'ablwr.github.io/flatiron-karaoke',
            description: 'Popcorn.js app that syncs song lyrics and other media with video.',
            tech_used: 'Popcorn.js, Textillate.js'
        },
        {
            id: 2, 
            name: 'Scopitone Jukebox', 
            img: 'img/scopitone.png',
            url: '#',
            description: 'Randomly generates videos from a playlist.',
            tech_used: 'YouTube API, CSS, Javascript'
        },
        {
            id: 3, 
            name: 'ffmproviser', 
            img: 'img/ffmproviser.png',
            url: 'http://ffmprovisor.herokuapp.com',
            description: 'One-page guided web form that assists users in making FFMpeg commands.',
            tech_used: 'Ruby, Rails, jQuery'
        },
        {
            id: 4, 
            name: 'Petsitfor.me', 
            img: 'img/petsitforme.png', 
            url: 'http://petsitfor.me',
            description: 'Rails app to help dog walkers manage their business and facilitate interaction with clients.',
            tech_used: 'Ruby, Rails, jQuery'
        },
        {
            id: 5, 
            name: 'Need an Umbrella?', 
            img: 'img/umbrella.png', 
            url: 'http://needanumbrella.herokuapp.com',
            description: 'Rails app for timely weather data.',
            tech_used: 'Ruby, Rails, Twilio API, Heroku Scheduler'
        }

    ];

});