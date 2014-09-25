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
            longer_description: '',
            tech_used: 'Popcorn.js, Textillate.js'
        },
        {
            id: 2, 
            name: 'Scopitone Jukebox', 
            img: 'img/scopitone.png',
            url: '#',
            description: 'Randomly generates videos from a playlist.',
            longer_description: '',
            tech_used: 'YouTube API, CSS, Javascript'
        },
        {
            id: 3, 
            name: 'ffmprovisor', 
            img: 'img/ffmprovisor.png',
            url: 'http://ffmprovisor.herokuapp.com',
            description: 'One-page guided web form that assists users in making FFMpeg commands.',
//             longer_description: '+ Researched FFMpeg framework to create commands based on common user needs
// + Integrated a jQuery-heavy front end for seamless user experience',
            tech_used: 'Ruby, Rails, jQuery'
        },
        {
            id: 4, 
            name: 'Petsitfor.me', 
            img: 'img/petsitforme.png', 
            url: 'http://petsitfor.me',
            description: 'Rails app to help dog walkers manage their business and facilitate interaction with clients.',
//             longer_description: '+ Implemented Devise for secure user authentication and sessions
// + Utilized CarrierWave for image upload and processing
// + Used the Twilio API to allow users to send text messages to other users
// + Developed complex database model with user-restricted layers of information access',
            tech_used: 'Ruby, Rails, jQuery'
        },
        {
            id: 5, 
            name: 'Need an Umbrella?', 
            img: 'img/umbrella.png', 
            url: 'http://needanumbrella.herokuapp.com',
            description: 'Rails app for timely weather data.',
//             longer_description: '+ Harnessed the Forecast.io API for gathering real-time user-specific weather data
// + Used the Twilio API to send text messages to users
// + Built Sidkiq workers to handle text message on sign up and Heroku scheduler for texting users according to their time preference
// + Implemented OAuth 1.1 to allow users to login through their Twitter account',
            tech_used: 'Ruby, Rails, Twilio API, Heroku Scheduler'
        },
        {
            id: 6,
            name: 'Netflix for Books',
            img: 'img/netflixforbooks.png',
            url: 'http://ablwr.github.io/netflix-for-books/',
            description: 'A skin/splash page for WorldCat.',
            longer_description: '',
            tech_used: 'HTML, CSS, Javascript'
        }

    ];

});