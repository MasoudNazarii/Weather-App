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
        document.querySelector(".sunrise").innerText = "Sunrise time: " + Sunrise.toUTCString();
        document.querySelector(".sunset").innerText = "Sunset time: " + Sunset.toUTCString();

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

/* 
    skycon: function setIcons(data, iconID) {
        const {description} = data.weather[0]
        const skycons = new Skycons({"color": "white"});
        const currentIcon = description.replace(/ /g, "_").toUpperCase();
        skycons.play();
        skycons.set(iconID, Skycons[currentIcon]);
        skycons.add(document.getElementById(".icon"));
    },
*/
