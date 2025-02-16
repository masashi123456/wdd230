let nowDay = document.getElementById('today');
let currentDay = new Date();
let Lday = currentDay.toLocaleDateString("en-US",{
    weekDay:'long',
    year:'numeric',
    month:'long',
    year:'numeric',
})
nowDay.textContent = currentDay;

let closeButton = document.querySelector('#close')
closeButton.addEventListener('click', function(){
    closeButton.toggleClass('.c')
})



const weather = [
    "It is Sunny today. It's becoming cold from the night.",
    "It is rainy today. It's going to be sunny from the noon.",
    "It is cloudy. It's going to be rain from the night"
];

const RandomWeather = () =>{
    const indexNum = Math.floor(Math.random()*weather.length);
    const RandomW = weather[indexNum];
    document.getElementById('weather').textContent = RandomW;

}

const currentYearElement = document.querySelector('#year');
const currentYear = new Date().getFullYear();
currentYearElement.innerHTML = `&copy;${currentYear}`;

const lastModifiedElement = document.querySelector("#lastModified");
const lastModified = document.lastModified;
lastModifiedElement.innerHTML = `Last Modified: <em>${lastModified}</em>`;

document.addEventListener("DOMContentLoaded",()=>{
    const menu = document.getElementById("menu");
    const nav = document.querySelector(".navigation1");

    menu.addEventListener("click",(e)=>{
        e.preventDefault();
        menu.classList.toggle("show");
        nav.classList.toggle("show-nav");
    });
});

function myFunction(){
    var x = document.getElementById("navigation");
    if(x.style.display === "block"){
        x.style.display="none";
    }else{
        x.style.display = "block"
    }
}

const nav = document.querySelector('.navigation')
const respbutton = document.querySelector('#rmenu');

respbutton.addEventListener('click', ()=>{
    nav.classList.toggle('show');
    respbutton.classList.toggle('show');
})