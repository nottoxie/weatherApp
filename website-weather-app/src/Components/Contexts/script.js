    const container = document.querySelector('.container');
    const search = document.querySelector('.search-box button')
    const weatherBox = document.querySelector('.weather-box')
    const weatherDetails = document.querySelector('.weather-details');

    search.addEventListener('click', () => {

    const APIKey = 'ff6613a3f522e280a17afb02bf2ed679';
    const city = document.querySelector('.search__box input').value;

        if(city === '')
        return;

        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`).then(response => response.json()).then(json => {
            const image = document.querySelector('.weather-box img');
            const temperature = document.querySelector('.weather-box .temperature');
            const description = document.querySelector('.weather-box .description');
            const humidity = document.querySelector('.weather-details .humidity span');
            const wind = document.querySelector('.weather-details .wind span');

            switch (json.weather[0].main) {
                case 'Clear':
                        image.src = '../Assets/clear.png';
                    break;

                    case 'Rain':
                        image.src = '../Assets/rain.png';
                    break;

                    case 'Snow':
                        image.src = '../Assets/Snow.png';
                    break;

                    case 'Clouds':
                        image.src = '../Assets/cloud.png';
                    break;

                    case 'Mist':
                        image.src = '../Assets/mist.png';
                    break;

                    case 'Haze':
                        image.src = '../Assets/mist.png';
                    break;
            
                default:
                    image.src = '../Assets/cloud.png';
            }
        } );

    });

    export default '../Contexts/script.js'