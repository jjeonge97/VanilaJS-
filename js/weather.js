const API_KEY = "e1c9dc8a3dd8f5d1e17928ce72ef376a";

function onGeoOk(position) {
  const { latitude, longitude } = position.coords;
  const lat = latitude;
  const lon = longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");

      weather.textContent = `Today's weather is ${data.weather[0].main} and the current temperature is ${data.main.temp}°C`;
      city.textContent = `We are "${data.name}" now`;
    });
}

function onGeoNot() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoNot);
