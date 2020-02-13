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

    const concerts = [{
        Date: "1/05/2019",
        Venue: "Mad Bomber",
        Location: "Germany",
    },
    {
        Date: "1/20/2019",
        Venue: "Big Tower",
        Location: "France",
    },
    {
        Date: "2/06/2019",
        Venue: "Maple ehh",
        Location: "Canada",
    },
    {
        Date: "2/18/2019",
        Venue: "Winter Palace",
        Location: "Russia",
    },
    {
        Date: "2/28/2019",
        Venue: "Desert Oasis",
        Location: "Pakistan",
    },
    {
        Date: "3/03/2019",
        Venue: "Midnight Club",
        Location: "Ukraine",
    },
    {
        Date: "3/18/2019",
        Venue: "Fiesta Cresto",
        Location: "Mexico",
    },
    {
        Date: "3/28/2019",
        Venue: "Lil Mehico",
        Location: "New Mexico, US",
    },
    {
        Date: "4/04/2019",
        Venue: "Whiskey Den",
        Location: "Tennessee, US",
    },
    {
        Date: "4/26/2019",
        Venue: "Devils House",
        Location: "Georgia, US",
    },
    {
        Date: "5/05/2019",
        Venue: "Atlantis",
        Location: "Florida, US",
    },
    {
        Date: "5/29/2019",
        Venue: "Wakanda Forever",
        Location: "South Africa",
    },
    {
        Date: "6/08/2019",
        Venue: "Fire & Ice",
        Location: "New Zealand",
    },
    {
        Date: "6/25/2019",
        Venue: "Missile Crisis",
        Location: "Cuba",
    },
    {
        Date: "7/13/2019",
        Venue: "High Five",
        Location: "Jamaica",
    },
    {
        Date: "7/27/2019",
        Venue: "Rainforest Cafe",
        Location: "Brazil",
    },
    {
        Date: "8/16/2019",
        Venue: "Giza",
        Location: "Egypt",
    },
    {
        Date: "9/17/2019",
        Venue: "Icy Tundra",
        Location: "Antartica",
    },
    {
        Date: "10/20/2035",
        Venue: "Lunar Lander",
        Location: "Moon",
    },
    {
        Date: "11/11/2111",
        Venue: "Musks Palace",
        Location: "Mars",
    },

]

const printToDom = (divId, textToPrint) => {
    let selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
};

const albumBuilder = (arr) => {
    let domString = '';
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === arr[0]) {
            domString += `<div class="row carousel-item container-fluid active">`;
            domString +=    `<div class="album-content text-center col-md-12">`;
            domString +=            `<h2 class="album-title">${arr[i].albumName}</h2>`;
            domString +=            `<h3 class="album-year">${arr[i].yearReleased}</h3>`;
            domString +=        `<div class="album-artwork">`;
            domString +=            `<img class="img-fluid w-50" src="${arr[i].albumArt}" alt="picture of ${arr[i].albumName} album artwork">`;
            domString +=        `</div>`;
            domString +=            `<ol class="album-tracklist">`;
            domString +=                `<li>${arr[i].tracklist[0]}</li>`;
            domString +=                `<li>${arr[i].tracklist[1]}</li>`;
            domString +=                `<li>${arr[i].tracklist[2]}</li>`;
            domString +=                `<li>${arr[i].tracklist[3]}</li>`;
            domString +=                `<li>${arr[i].tracklist[4]}</li>`;
            domString +=                `<li>${arr[i].tracklist[5]}</li>`;
            domString +=                `<li>${arr[i].tracklist[6]}</li>`;
            domString +=                `<li>${arr[i].tracklist[7]}</li>`;
            domString +=                `<li>${arr[i].tracklist[8]}</li>`;
            domString +=                `<li>${arr[i].tracklist[9]}</li>`;
            domString +=            `</ol>`;
            domString +=   `</div>`;
            domString += `</div>`;
        } else {
            domString += `<div class="row carousel-item container-fluid">`;
            domString +=    `<div class="album-content text-center col-md-12">`;
            domString +=            `<h2 class="album-title">${arr[i].albumName}</h2>`;
            domString +=            `<h3 class="album-year">${arr[i].yearReleased}</h3>`;
            domString +=        `<div class="album-artwork">`;
            domString +=            `<img class="img-fluid w-50" src="${arr[i].albumArt}" alt="picture of ${arr[i].albumName} album artwork">`;
            domString +=        `</div>`;
            domString +=            `<ol class="album-tracklist">`;
            domString +=                `<li>${arr[i].tracklist[0]}</li>`;
            domString +=                `<li>${arr[i].tracklist[1]}</li>`;
            domString +=                `<li>${arr[i].tracklist[2]}</li>`;
            domString +=                `<li>${arr[i].tracklist[3]}</li>`;
            domString +=                `<li>${arr[i].tracklist[4]}</li>`;
            domString +=                `<li>${arr[i].tracklist[5]}</li>`;
            domString +=                `<li>${arr[i].tracklist[6]}</li>`;
            domString +=                `<li>${arr[i].tracklist[7]}</li>`;
            domString +=                `<li>${arr[i].tracklist[8]}</li>`;
            domString +=                `<li>${arr[i].tracklist[9]}</li>`;
            domString +=            `</ol>`;
            domString +=   `</div>`;
            domString += `</div>`;
        };
    }
    printToDom('albums', domString);
}

const concertBuilder = (arr) => {
    let domString = '';
    for (let i = 0; i < arr.length; i++) {
        domString += `<tr>`;
        domString += `<td>${arr[i].Date}</td>`;
        domString += `<td>${arr[i].Venue}</td>`;
        domString += `<td>${arr[i].Location}</td>`;
        domString += `</tr>`;
    }
    printToDom("tour-info", domString);
}

const events = () => {

}

const init = () => {
    events();
    if (window.location.pathname === '/discography.html') {
        albumBuilder(discography);
    } else if (window.location.pathname === '/tour.html') {
            concertBuilder(concerts);
    } else if (window.location.pathname === '/about.html') {
                vikingBuilder(vikings);
    } else if (window.location.pathname === '/merch.html') {
                    merchBuilder(vikingMerch);
    }
}

init();