const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';

const cards = document.querySelector('#cards');

async function getProphetData(){
    const response = await fetch(url);
    const data = await response.json();
    //console.table(data.prophets);
    displayProphets(data.prophets);
}

getProphetData();

const displayProphets = (prophets) =>{
    prophets.forEach((prophet)=>{
        let card = document.createElement('section');
        let name = document.createElement('h2');
        let pimg = document.createElement('img');

        name.textContent = `${prophet.name} ${prophet.lastname}`;

        pimg.setAttribute('src', prophet.imageurl);
        pimg.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`);
        pimg.setAttribute('loading', 'lazy');
        pimg.setAttribute('width', '400');
        pimg.setAttribute('height', '500');

        card.appendChild(name);
        card.appendChild(pimg);

        cards.appendChild(card);


    })
}

