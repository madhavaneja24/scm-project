  document.getElementById('search').addEventListener('click', function() {
    var location = document.getElementById('location').value;
    fetchWeatherData(location);
  });


  function fetchWeatherData(location) { // function to fetch Weather Data
    // Simulating API call with a timeout
    setTimeout(function() {
      var weatherData = {
        temperature: '25°C',
        description: 'Sunny'
      };
      updateWeatherCard(weatherData);
    }, 1000); // Simulated delay of 1 second
  }

  function updateWeatherCard(weatherData) {
    var temperatureElement = document.querySelector('.temperature');
    var descriptionElement = document.querySelector('.description');

    temperatureElement.textContent = weatherData.temperature;
    descriptionElement.textContent = weatherData.description;
  }
