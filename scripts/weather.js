const url='https://api.openweathermap.org/data/2.5/weather?lat=43.05&lon=141.36&units=imperial&appid=7e8dd92a5566c5f30eac583c9741ef9f';
async function fetchWeather(){
    try{
        const response=await fetch(url);
        const data = await response.json();

        document.getElementById('currTemp').textContent = `${data.main.temp}F`;

        const icon = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
        
        document.getElementById('wicon').src =icon;
        document.getElementById('wicon').alt=data.weather[0].description;

        document.querySelector("figcaption").textContent = data.weather[0].description;
    
    }catch(error){
        console.error("Could not find the weather of the place:", error);
    }
}

fetchWeather();

