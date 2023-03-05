const weatherDiv = document.querySelectorAll("#weather span");
const weather= weatherDiv[0];
const city = weatherDiv[1];

const API_KEY = "8ab2f1f207933f0ddde381918a9abb49";

const onGeoOk = function (position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url =  `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
}

const onGeoError = function() {
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);