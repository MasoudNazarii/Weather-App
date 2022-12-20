//style
const style = document.createElement('style');
style.innerHTML = `
      .city {
        font-weight: lighter;
      }
    `;
document.head.appendChild(style);



let weather = {
    fetchWeather: function (city) {
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=" + config.apiKey)

        .then((response) => response.json())
        .then((data) => this.displayWeather(data));
    },
    displayWeather: function(data) {
        const {name} = data
        const {icon, description} = data.weather[0]
        const {temp, feels_like, humidity} = data.main
        const {speed} = data.wind
        const {sunrise, sunset} = data.sys
        
        const Sunrise = new Date(sunrise);
        const Sunset = new Date(sunset);

        document.querySelector(".icon").src ="https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = Math.round(temp) + "°C";
        document.querySelector(".feels_like").innerText = "Feels like " + Math.round(feels_like) + "°C";
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".wind").innerText = "Wind speed: " + Math.round(speed) + "km/h";
        
        document.querySelector(".weather").classList.remove("loading")
    },
    search: function () {
        this.fetchWeather(document.querySelector(".search-bar").value);
    },
    
};

document.querySelector(".search button").addEventListener("click", function () {
    weather.search();
});

document.querySelector(".search-bar").addEventListener("keyup", function (event) {
    if(event.key == "Enter") {
        weather.search();
    }
});


// Change Theme
const checkbox = document.querySelector(".checkbox");
const gradient = document.querySelector(".gradient");
const label = document.querySelector(".label");
const moon = document.querySelector(".moon");
const sun = document.querySelector(".sun");
const card = document.querySelector(".card");
const searchButton = document.querySelector(".search-button");
const searchBar = document.querySelector(".search-bar");
const searchBarHover = document.querySelector(".search-button");
const loading = document.querySelector(".loading");
const placeholder = document.querySelector(".search-bar");
const backdrop = document.querySelector(".backdrop-container");
const closeButton = document.querySelector(".closebtn");

checkbox.addEventListener("click", function() {
    gradient.classList.toggle("gradient-dark");
    label.classList.toggle("label-dark");
    moon.classList.toggle("moon-sun-dark");
    sun.classList.toggle("moon-sun-dark");
	card.classList.toggle("card-dark");
    searchButton.classList.toggle("search-button-dark");
    searchBar.classList.toggle("search-bar-dark");
    searchBarHover.classList.toggle("search-hover-dark");
    loading.classList.toggle("loading-dark");
    placeholder.classList.toggle("placeholder-dark");
    backdrop.classList.toggle("backdrop-container-dark");
    closeButton.classList.toggle("closebtn-dark");
});








