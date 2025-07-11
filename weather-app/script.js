const placeField = document.querySelector('#place-field');
const fetchWeatherBtn = document.querySelector('#fetch-weather-btn');

async function fetchWeather(place){
    try{
        const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${place}?unitGroup=metric&include=current&key=XBNSGX3G9SDGQQC8YRUEK83S7&contentType=json`;
        const response = await fetch(url, { mode: 'cors' });
        const jsonResponse = await response.json();
        const temp = jsonResponse["days"][0]["temp"];
        console.log(temp);
    } catch(err){
        console.log(err);
    }
}

fetchWeatherBtn.addEventListener('click', () => {
    const place = placeField.value;
    fetchWeather(place);
});