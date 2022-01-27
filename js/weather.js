const APIkey = "2b386290b83920a25414d3b284dc00ad";

function GeoOn(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIkey}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data => {
      const weather = document.querySelector("#weather span:first-child");
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
      const city = document.querySelector("#weather span:last-child");
      city.innertext = data.name;
    }));
};
function GeoOff() {
  alert("Error from GPS. I can't find U!!");
};

navigator.geolocation.getCurrentPosition(GeoOn, GeoOff);