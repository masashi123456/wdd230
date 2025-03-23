const url = 
const members = document.querySelector('#members');

async function getMembers(){
    const response = await fetch("../data/members.json");
    const data = await response.json();
    displayMembers(data.members);
}

getMembers();

const displayMembers = (members) =>{
    members.forEach((member)=>{
        let card = document.createElement('section');
        let name = document.createElement('h2');
        let address = document.createElement('p');
        let phone = document.createElement('p');
        let url = document.createElement('a');
        let level = document.createElement('p');
        let info = document.createElement('p');
        let pimg = document.createElement('img');

        name.textContent = `Name: ${member.name}`;
        address.textContent = `Address${member.address}`;
        phone.textContent = `${member.phone}`;
        url.href = member.url;
        level.textContent = `${member.level}`;
        info.textContent = `${member.information}`;


        pimg.setAttribute('src', member.icon);
        pimg.setAttribute('alt', `Image of ${member.name}`);
        pimg.setAttribute('loading', 'lazy');
        pimg.setAttribute('width', '300');
        pimg.setAttribute('height', '400');

        card.appendChild(name);
        card.appendChild(pimg);

        membersContainer.appendChild(card);


    })
}

