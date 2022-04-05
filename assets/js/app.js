const apiKey = '5a42fdfc85e4a33bf159cfbc35b3bb2c';

const form = document.getElementById('form');

const submitButton = document.getElementById('button');

const errorDiv = document.querySelector('.error-message');
const ulList = document.querySelector('.display-weather .cities');



submitButton.onclick = (e) => {
        e.preventDefault()
        const input = document.getElementById('input');
        const locationInput = input.value;
        // console.log(locationInput);
        const requestUrl = `https://api.openweathermap.org/data/2.5/weather?q=${locationInput}&appid=${apiKey}&units=imperial`

        fetchWeather(requestUrl);
        form.reset();
        errorDiv.style.display = 'none';
    }
    // fetch weather function
const fetchWeather = (requestUrl) => {


    fetch(requestUrl)
        .then(response => response.json())
        .then(data => {
            const { main, name, sys, weather } = data;
            const icon = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${
              weather[0]["icon"]
            }.svg`;
            //             const icon = `https://openweathermap.org/img/wn/${
            //   weather[0]["icon"]
            // }@2x.png`;


            //create li element that will display the weather fetched from openweather
            const list = document.createElement("li");
            list.classList.add("city");
            const htmlString = `
        
      <h2 class="city-name" >
        <span>${name}</span>
        <sup>${sys.country}</sup>
      </h2>
      <div class="city-temperature">${Math.round(main.temp)}<sup>°F</sup></div>
      <figure>
        <img class="city-icon" src="${icon}" alt="${
      weather[0]["description"]
    }">
        <figcaption>${weather[0]["description"]}</figcaption>
      </figure>
   `;
            list.innerHTML = htmlString;
            ulList.appendChild(list);
        })
        //in catch statement, display errorDiv if a city is not found 
        .catch(() => {
            errorDiv.style.display = 'block';


        });




}