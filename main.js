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

const concertBuilder = (arr) => {

    let domString = '';

    //creates tickets button id (was not it card to create)
    ticketIdCreator();

    for (let i = 0; i < arr.length; i++) {
        domString += `<tr>`;
        domString += `<td>${arr[i].Date}</td>`;
        domString += `<td>${arr[i].Venue}</td>`;
        domString += `<td>${arr[i].Location}</td>`;
        domString += `<td><button id=${arr[i].Id}>Tickets</button></td>`;
        domString += `</tr>`;
    }



    printToDom("tour-info", domString);

    //Needs its own function (creates a addeventlistener for each function)
    for (let i = 0; i < arr.length; i++) {

        document.getElementById(arr[i].Id).addEventListener('click', purchaseTickets);
    }

}

//function that creates tickets id's (was not in card to create)
const ticketIdCreator = () => {
    for (let i = 0; i < concerts.length; i++) {
        concerts[i].Id = i.toString();
    }
    return concerts;
}

//Alert that is called when you click the ticket button
const purchaseTickets = () => {
    alert('Congrats! Your tickets have been purchased!');
}


const events = () => {

}

const init = () => {
    events();
    concertBuilder(concerts);
}

init();