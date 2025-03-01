const f = document.querySelector("#temperature");
const speed = document.querySelector("#speed");
const wchill = document.querySelector("#wind_chill")

let temperature = 44;
let windspeed = 4;

if(temperature <= 50 && windspeed > 3.0){
    let windchill = 35.74 + 0.6215*temperature - 35.75*Math.pow(windspeed, 0.16) + 0.4275*temperature*Math.pow(windspeed, 0.16);
    windchill = windchill.toFixed(1);
    wchill.textContent = `${windchill}°F`;



}else{
    wchill.textContent = `N/A`;
}
