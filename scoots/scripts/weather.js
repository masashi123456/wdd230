const url='https://api.openweathermap.org/data/2.5/weather?lat=20.49&lon=-86.89&units=imperial&appid=7e8dd92a5566c5f30eac583c9741ef9f';
const futureUrl = 'https://api.openweathermap.org/data/2.5/forecast?lat=43.05&lon=141.36&units=imperial&appid=7e8dd92a5566c5f30eac583c9741ef9f';
async function fetchWeather(){
    try{
        const response=await fetch(url);
        const data = await response.json();

        document.getElementById('currTemp').textContent = `${data.main.temp}F`;

        const icon = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
        
        document.getElementById('wicon').src =icon;
        document.getElementById('wicon').alt=data.weather[0].description;

        document.querySelector("figcaption").textContent = data.weather[0].description;


        //future
        const forecastResponse=await fetch(futureUrl);
        if(!forecastResponse.ok)throw new Error("Could not retrieve data")
        const forecastData=await forecastResponse.json();
    
    const nextDay =new Date();
    nextDay.setDate(nextDay.getDate()+1);
    const three = "15:00:00";
    
    const forecastItem =forecastData.list.find(item=>{
        return item.dt_txt.includes(`${nextDay.getFullYear()}-${String(nextDay.getMonth()+1).padStart(2, '0')}-${String(nextDay.getDate()).padStart(2, '0')} ${three}`)
    });

    if(forecastItem){
        const temp = forecastItem.main.temp;
        const desc = forecastItem.weather[0].description;
        const icon = `https://openweathermap.org/img/wn/${forecastItem.weather[0].icon}.png`;

        document.getElementById('3pm').innerHTML =`
            <strong>The weather tomorrow (3pm).</strong><br>
            ${desc}<br>
            Temp: ${temp}F<br>
            <img src="${icon}" alt="${desc}">
        `;

    }

    
    //max temper
    const today = new Date().toISOString().split('T')[0];
    let max = -Infinity;
    let maxi = null;

    forecastData.list.forEach(item=>{
        const dateItem = item.dt_txt.split(' ')[0];

        if(dateItem === today){
            if(item.main.temp_max > max){
                max = item.main.temp_max;
                maxi = item;
            }
        }
    });

    if(maxi){
        
        document.getElementById("mTemp").innerHTML=`${max}F`;
    }


    
    
}catch(error){
    console.error("Could not find the weather of the place:", error);
}
}

fetchWeather();


/*
        for(let i=1; i<=3; i++){
            const fday = forecastData.list[i*8];
            const ftemp = `${fday.main.temp}F`;
            const fdesc = fday.weather[0].description;

            document.getElementById(`${i}day`).innerHTML=
                `<strong>Day${i}</strong><br>
                ${fdesc}<br>
                Temperature: ${ftemp}<br>
                <img src="https://openweathermap.org/img/wn/${fday.weather[0].icon}.png" alt="${fdesc}"
                `;

        }
                */
