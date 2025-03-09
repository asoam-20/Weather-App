const apikey = "020ba9f832fa0d4e285c5cc8ff2aff37 ";
const apiurl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const weathericon = document.querySelector(".weather-img");

async function checkweather(city) {
  const response = await fetch(apiurl + city + `&appid=${apikey}`);

  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    var data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "Km/Hr";

    if (data.weather[0].main == "Clouds") {
      weathericon.src = "Images/clouds.png";
    } else if (data.weather[0].main == "Clear") {
      weathericon.src = "Images/clear.png";
    } else if (data.weather[0].main == "Rain") {
      weathericon.src = "Images/rain.png";
    } else if (data.weather[0].main == "Drizzle") {
      weathericon.src = "Images/drizzle.png";
    } else if (data.weather[0].main == "Mist") {
      weathericon.src = "Images/mist.png";
    } else if (data.weather[0].main == "Humidity") {
      weathericon.src = "Images/humidity.png";
    } else if (data.weather[0].main == "Snow") {
      weathericon.src = "Images/snow.png";
    } else if (data.weather[0].main == "Haze") {
      weathericon.src = "Images/haze.png";
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }
}

searchbtn.addEventListener("click", () => {
  checkweather(searchbox.value);
});
