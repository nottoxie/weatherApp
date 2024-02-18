import React from 'react'
import './Weather.css'
import cloud from '../Assets/cloud.png'
// import clear from '../Assets/clear.png'
// import mist from '../Assets/mist.png'
// import rain from '../Assets/rain.png'
// import snow from '../Assets/snow.png'



export const Weathers = () => {

      let APIKey="ff6613a3f522e280a17afb02bf2ed679";

      const search = async ()=>{
          const element=document.getElementsByClassName("cityInput")
          if(element[0].value==="")
          return 0;
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=metric&appid=${APIKey}`

        let response = await fetch(url);
        let data = await response.json();

        const humidity = document.getElementsByClassName("humidity-percent");
        const wind = document.getElementsByClassName("wind-speed");

        const temperature = document.getElementsByClassName("temperature");
        const location = document.getElementsByClassName("locations");


        humidity[0].innerHTML = data.main.humidity;
        wind[0].innerHTML = data.wind.speed;
        temperature[0].innerHTML = data.main.temp;
        location[0].innerHTML = data.name;

      }


  return (
    <div className='weather__main'>
    <div className='weather'>
      <h1 className='weather__headings'>Weather Reports!</h1>
      <p className='weather__smalltxt'><div className='weather__TYPEtxt'><input className='cityInput' type="text" placeholder="Enter your location"/></div> to <button onClick={()=>{search()}} className='weather__searchBttn'>search</button>..</p>
    </div>

    
    <div className='container'>
      <div className='weather-box'>
        <div className='box'>
          <div className='info-weather'>
              <div className='weathers'>
                    <img src={cloud} alt=''/>
                    <div className='temperature'>0</div>°C
                    <p className='locations'>...</p>
              </div>
          </div>
        </div>
      </div>
        <div className="weather-details">
          <div className="humidity">
          <i class='bx bx-water'></i>
          <div className="text">
            <div className="info-humidity">
                <span className="humidity-percent">0</span>%
            </div>
            <p>Humidity</p>
          </div>
          </div>

          <div className="wind">
          <i class='bx bx-wind'></i>
          <div className="text">
            <div className="info-wind">
                <span className="wind-speed">0</span>Km/h
            </div>
            <p>Wind Speed</p>
          </div>
          </div>
        </div>
    </div>
</div>
  )
}

export default Weathers
