
const urlLocation = "https://get.geojs.io/v1/ip/geo.json";
const btn_checkWeather = document.querySelector("#checkWeather");
const displey = document.querySelector("#weatherOut");





async function  getLocation(){
    try{
        const response = await fetch (urlLocation);
        const data = await response.json;
            
        const res = {};

        res["city"] = data.city;
        res["latitude"] = data.latitude;
        res["longitude"] = data.longitude;

        console.log(res);
}catch(error){
    displey.innerHTML = `
    <div class="weatherOut1">
    <a>Не доступная Локация.</a>
    </div>
        `;       
    console.log("Не доступная Локация", error);
}

    
    
}


async function getMeteo(){
    
    const location = await getLocation();
    console.log(location);
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${location.latitude}&longitude=${location.longitude}&current_weather=true&hourly=temperature_2m,relativehumidity_2m,windspeed_10m`;
    
    const response = await fetch(url);
    const weather = await response.json();
    
    const current_weather = weather.current_weather;
    const weatherData= {};

    weatherData["temperature"] = current_weather.temperature;
    weatherData["windspeed"] = current_weather.windspeed;
    weatherData["weethercode"] = current_weather.weethercode
    



    console.log("Температура в " + location.city + "  " + weatherData.temperature + " градусов");
    console.log("Описание " + getWeatherByCode(weatherData.weathercode));
    console.log("Ветер " + weatherData.windspeed + "метров в сек");

    const temp = weatherData.temperature;
    const code = getWeatherByCode(weatherData.weathercode);
    const winf = weatherData.windspeed;

 
    }

    function print(){
        displey.innerHTML = `
        <div class="weatherOut1">
        <a>Температура в {location.city} сегодня {temp} градусов.</a><br>
        <a>Описание " + {code}.</a><br>
        <a>Ветер {winf} метров в сек</a>
        </div>
            `;       
    }
btn_checkWeather.addEventListener('click', print);
   

const promiseRes = getLocation();
promiseRes.then((data) =>{console.log(data);})

    

