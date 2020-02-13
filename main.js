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

const vikings = [   {name: "Bob", instrument: "Guitar", qoute: "The wobbling guitars through the chorus are simply divine."}, 
                    {name: "Joe", instrument: "Drums", qoute: "My hi-fi couldn't deal with the awesomeness and exploded."},
                    {name: "John", instrument: "Bass", qoute: "After hearing this album I have applied to both Nasa and the Nordic Viking Federation"},
                    {name: "Billy", instrument: "Vocals", qoute: "My hi-fi couldn't deal with the awesomeness and In the end I had to use a nuclear fusion-powered device I contructed out of Titanium in order to deal with the epicness contained within these 10 tracks."}, ]

const printToDom = (divId, textToPrint) => {
    let selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
};

/*
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
*/

vikingBuilder = () =>{
    let domString = "";

    for(let i = 0; i < vikings.length; i++) {
        domString += `<div class="card" style="width: 18rem;">`;
            domString += `<div class="card-body">`;
                domString += ``;
                    domString += `<h2 class="card-title">${vikings[i].name}</h2>`;
                    domString += `<h2>${vikings[i].instrument}</h2>`;
                    domString += `<q>${vikings[i].qoute}</q>`;
                domString += `</div>`;
            domString += `</div>`;
        domString += `</div>`;
    }
    printToDom("band-members", domString)
}



const events = () => {

}

const init = () => {
    events();
    vikingBuilder()
    //concertBuilder(concerts);
}

init();