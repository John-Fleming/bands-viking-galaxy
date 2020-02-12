const discography = [
    {
    albumArt: "./assets/greatestHits.png",
    albumName: "Viking Galaxy Greatest Hits",
    yearReleased: 2015,
    tracklist: ['Hall of the Slain', 'Call of the Valkyrie', 'Sickle of Hate', 'Lost Forver', 'Space Chariot', 'Final Frontier', 'Contact', 'Odin on Mars', 'Valhalla Has Fallen', 'Black Hole']
    },
    {
    albumArt: "./assets/firstContact.png",
    albumName: "First Contact",
    yearReleased: 2000,
    tracklist: ['Contact', 'Lost Forever', 'Call of the Valkyrie', 'Ales in Space', 'A Song for Home', 'Lost Control', 'Asgard in Ruins', 'Viking Funeral', 'Spaceship for Two', 'Metal is for Vikings']
    },
    {
    albumArt: "./assets/metalThor.png",
    albumName: "Metal Thor",
    yearReleased: 2005,
    tracklist: ['Hall of the Slain', 'Final Frontier', 'Odin on Mars', 'Loki Sucks', 'Thor\'s Revenge', 'My Horse is Metal', 'Mjolnir', 'Space Lightning', 'Your Beard', 'Crossing Swords']
    },
    {
    albumArt: "./assets/spaceNorseman.png",
    albumName: "Space Norseman",
    yearReleased: 2010,
    tracklist: ['Black Hole', 'Sickle of Hate', 'Space Chariot', 'Valhalla Has Fallen', 'Metal on the Fjord', 'Hall of the Space Legends', 'Night of the Battle', 'Dark Angel', 'The Last Asteroid', 'Mead']
    },
    ];

const printToDom = (divId, textToPrint) => {
    let selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
};

const albumBuilder = (arr) => {
    let domString = '';
    for (let i = 0; i < arr.length; i++) {
        domString += `<h1>test</h1>`;
    }
    printToDom('albums', domString);
}


const events = () => {

}

const init = () => {
    events();
    albumBuilder(discography);
}

init();