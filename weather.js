const apiKey = "9828d008e9f6feb8100ecf72c33cfa94";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=";

const cityname = document.querySelector('#cityInput');
const searchbtn = document.querySelector('.searchBtn');

async function getWeather(city) {
    try {
        const response = await fetch(apiUrl + city + `&appid=${apiKey}&units=metric`);
        const data = await response.json();

        if (response.ok) {
            console.log(data);
            document.querySelector('.result').innerHTML = `
                City: ${data.name} <br>
                Temp: ${data.main.temp} °C <br>
                Weather: ${data.weather[0].description}
            `;
        } else {
            document.querySelector('.result').innerHTML = `Error: ${data.message}`;
        }
    } catch (error) {
        console.error("Fetch error:", error);
        document.querySelector('.result').innerHTML = "Something went wrong!";
    }
}

searchbtn.addEventListener('click', () => {
    const city = cityname.value.trim();
    if (city === '') {
        alert('Please type a city name');
    } else {
        getWeather(city);
    }
});
