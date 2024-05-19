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
closeButton.addEventListener('click' function(){
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