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


}