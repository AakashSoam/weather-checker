
function getWeather() {
  const apiKey = '8b0ac8c8a3fee72a168ea2dab4f1cbf6';
  const city = document.getElementById('city-input').value;
  const weatherInfoContainer = document.getElementById('weather-info');

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
    .then(response => response.json())
    .then(data => {
      const temperature = data.main.temp;
      const description = data.weather[0].description;

      const weatherInfo = `<p>Temperature: ${temperature} °C</p>
                           <p>Description: ${description}</p>`;

      weatherInfoContainer.innerHTML = weatherInfo;
    })
    .catch(error => {
      weatherInfoContainer.innerHTML = `<p>Error fetching weather data. Please try again.</p>`;
    });
}