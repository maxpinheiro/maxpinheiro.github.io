export type ProjectDescription = {
    title: string;
    description: string;
    siteLink?: string;
    codeLink?: string | string[];
};

export const descriptions: ProjectDescription[] = [
    {
        "title": "go phish",
        "description": "Go Phish is an app I created to automate a game my family and friends play, in which we guess which songs will be played at an upcoming concert (for the band Phish) and receive points for correct guesses. I have only deployed frontend projects before, so this is my first full-stack app in production! The tech stack uncludes a React/Typescript frontend, Express/Typescript backend, and a Postgres database.",
        "siteLink": "https://phishingfun.com/",
        "codeLink": ["https://github.com/maxpinheiro/phish-showguesser-frontend", "https://github.com/maxpinheiro/phish-showguesser-backend"]
    },
    {
        "title": "spotify recap",
        "description": "The Spotify Recapper is a web app that displays and analyzes a Spotify user's listening history. I use Spotify's <a href='https://developer.spotify.com/documentation/web-api/reference/tracks/get-audio-analysis/' target='_blank' rel='noopener noreferrer'>Web API</a> to get track information and user history.",
        "siteLink": "https://maxpinheiro.github.io/spotify-recap/",
        "codeLink": "https://github.com/maxpinheiro/spotify-recap"
    },
    {
        "title": "bracelet generator",
        "description": "One of my hobbies includes making complex friendship bracelets; this web app allows me to experiment with different color combinations to see previews of bracelets before actually making them. It's a very simple web app that uses some SVGs I created, and stores your previously made bracelets via cookies.",
        "siteLink": "https://maxpinheiro.github.io/bracelet-generator/",
        "codeLink": "https://github.com/maxpinheiro/bracelet-generator"
    },
    {
        "title": "spotify lyrics",
        "description": "The Spotify Lyric Player is a web app that determines a Spotify user's current playback and displays the song's lyrics, descriptions, and audio features. I use Spotify's <a href='https://developer.spotify.com/documentation/web-api/reference/tracks/get-audio-analysis/' target='_blank' rel='noopener noreferrer'>Web API</a> to get track information for the current playback (tempo, pitch, energy, etc.) and <a href='https://www.genius.com' target='_blank' rel='noopener noreferrer'>Genius</a> for song lyrics",
        "siteLink": "https://maxpinheiro.github.io/spotify-lyrics/",
        "codeLink": "https://github.com/maxpinheiro/spotify-lyrics"
    },
    {
        "title": "a-eye",
        "description": "A-Eye is a project that I worked on at <a href='https://www.sandboxnu.com/' target='_blank' rel='noopener noreferrer'>Sandbox</a>, first as a developer and then as project manager. The website is a collection of interactive computer vision modules developed for Northeastern's 'Your Eye and AI' course. The site serves to supplement the class, to provide interactive demos that help students better understand the complicated computations involved in the course material. It's built with React, and uses a variety of packages for computer vision and ML computations.",
        "siteLink": "https://a-eye.sandboxnu.com/",
        "codeLink": "https://github.com/sandboxnu/a-eye"
    },
    {
        "title": "figure skating score calculator",
        "description": "As a competitive figure, it's helpful to be able to quickly predict your program score during practice. All of the apps that do this currently cost money, so I decided to build a web app so that people can do this for free. The app can easily calculate figure skating program scores with the IJS scoring system.",
        "siteLink": "https://maxpinheiro.github.io/fs-calculator/",
        "codeLink": "https://github.com/maxpinheiro/fs-calculator"
    },
    {
        "title": "spotify visualizer",
        "description": "The Spotify Visualizer is a personal project I've been working on intermittently since March 2021. It's a web app that creates audio-responsive visualizations linked to a Spotify user's current playback. I use Spotify's <a href='https://developer.spotify.com/documentation/web-api/reference/tracks/get-audio-analysis/' target='_blank' rel='noopener noreferrer'>Web API</a> to get track information for the current playback (tempo, pitch, energy, etc.) that I incoroporate into visualization. The project is still in development, but you can check out the source code until it is finished/deployed.",
        "codeLink": "https://github.com/maxpinheiro/spotify-visualizer"
    },  
    {
        "title": "spotify song recommender",
        "description": "This was my final project for my Artifical Intelligence course in the Fall 2020 semester. It's a neural embedding system for playlist generation. It uses Spotify's <a href='https://developer.spotify.com/documentation/web-api/reference/tracks/get-audio-features/' target='_blank' rel='noopener noreferrer'>Web API</a> to get a song's audio features (energy, tempo, danceability, etc.) and <a href='https://www.tensorflow.org/tutorials/generative/autoencoder' target='_blank' rel='noopener noreferrer' >Tensorflow</a> to find similar songs.",
        "siteLink": "./media/cs4100report.pdf",
        "codeLink": "https://github.com/krisharma/spotify-recs"
    }, 
    {
        "title": "maze",
        "description": " This web app is a maze generator and solver. It uses Kruskal's algorithm for generating the maze, solves the maze with Breadth-First or Depth-First Search, and allows the user to solve the maze manually.",
        "siteLink": "https://maxpinheiro.github.io/maze/",
        "codeLink": "https://github.com/maxpinheiro/maze"
    }, 
    {
        "title": "asteroids",
        "description": "This is a recreation of Atari's Asteroids. It's built with plain HTML and Javascript, and uses the p5.js library for game loop/rendering functionality.",
        "siteLink": "https://maxpinheiro.github.io/asteroids/",
        "codeLink": "https://github.com/maxpinheiro/asteroids"
    }, 
    {
        "title": "pacman",
        "description": "I built Pacman in Racket for my Foundations of Computer Science course Fall 2019. It was originally built in Racket and then converted to HTML and JS to be deployed online.",
        "siteLink": "https://maxpinheiro.github.io/pacman/",
        "codeLink": "https://github.com/maxpinheiro/pacman"
    }, 
    {
        "title": "minesweeper",
        "description": "This is a recreation of the classic minesweeper game. It's built with plain HTML and Javascript.",
        "siteLink": "https://maxpinheiro.github.io/minesweeper/",
        "codeLink": "https://github.com/maxpinheiro/minesweeper"
    }, 
    {
        "title": "whiteboard",
        "description": "Whiteboard is a fake LMS (Learning Management System) similar to Canvas or Blackboard. I built the app throughout the Fall 2020 semester in my Web Development course. It's a full-stack project, and uses a combination of React + Angular, Express + Spring Boot, and Mongo + SQL.",
        "codeLink": ["https://github.com/maxpinheiro/cs4550-fall-2020-client-react-maxpinheiro", "https://github.com/maxpinheiro/cs4550-fall2020-client-angular-maxpinheiro", "https://github.com/maxpinheiro/cs4550-fall-2020-server-node-maxpinheiro", "https://github.com/maxpinheiro/cs4550-fall-2020-server-java-maxpinheiro"]
    }, 
    {
        "title": "groupeez",
        "description": "Groupeez was my group final project for my Web Development course in Fall 2020. The app serves as both a music review site as well as a social networking platform for artists. It's a full-stack app built with MERN.",
        "codeLink": "https://github.com/maxpinheiro/groupeez-demo"
    },
    /*{
        "title": "java gui animator",
        "description": "This software was developed throughout my Object-Oriernted Design course in Summer 2020. It is a Java application that provides CRUD operations for graphic animations. The source code can be provided on request."
    },*/
    {
        "title": "centipede",
        "description": "This Java game was developed throughout my Foundations of Computer Science course in Fall 2020. It's a similar rendition of Atari's Centipede game, and the source code can be provided on request."
    },
    {
        "title": "mastermind",
        "description": "Just a simple Mastermind game built with HTML/JS. To be honest, I just built this so I could play Mastermind on my phone when I'm bored."
    },
    {
        "title": "dice data",
        "description": "(inactive) This app is a practice in data visualizations. The data is collected by rolling two 6-sided dice every day, and recording the current time, temperature, and other information.",
        "siteLink": "https://maxpinheiro.github.io/dice-data/",
        "codeLink": "https://github.com/maxpinheiro/dice-data"
    }
];
