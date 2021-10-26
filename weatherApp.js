let tempDay0 = document.querySelector('.tempDay0');
let tempDay1 = document.querySelector('.tempDay1');
let tempDay2 = document.querySelector('.tempDay2');
let tempDay3 = document.querySelector('.tempDay3');
let tempNight0 = document.querySelector('.tempNight0');
let tempNight1 = document.querySelector('.tempNight1');
let tempNight2 = document.querySelector('.tempNight2');
let tempNight3 = document.querySelector('.tempNight3');
let speedWind = document.querySelector('.currentSpeedWind');
let humidity = document.querySelector('.currenHumidity');
let pressure = document.querySelector('.currentPressure');
let currentTempDay = document.querySelector('.currentTempDay');
let weatherIconToday = document.querySelector('.currentWeatherIcon');
let maxTemp = document.querySelector('.maxTempToday');
let weatherIcon = document.querySelector('.weatherIcon');
let tempFeelingToday = document.querySelector('.currentTempFeeling');
let img0 = document.querySelector('.img0');
let img1 = document.querySelector('.img1');
let img2 = document.querySelector('.img2');
let img3 = document.querySelector('.img3');
let todayImg = document.querySelector(".todayImg");
let date0 = document.querySelector('.date0');
let date1 = document.querySelector('.date1');
let date2 = document.querySelector('.date2');
let date3 = document.querySelector('.date3');

let dateT = new Date();
date0.innerHTML = 'Сегодня';
date1.innerHTML = `${dateT.getDate()+1}.${dateT.getMonth()+1}`;
date2.innerHTML = `${dateT.getDate()+2}.${dateT.getMonth()+1}`;
date3.innerHTML = `${dateT.getDate()+3}.${dateT.getMonth()+1}`;

let weatherIconMap = [
    {icon: "01d", src: 'Weather%20icons/01d@2x.png'},
    {icon: "02d", src: 'Weather%20icons/02d@2x.png'},
    {icon: "03d", src: 'Weather%20icons/03d@2x.png'},
    {icon: "04d", src: 'Weather%20icons/04d@2x.png'},
    {icon: "09d", src: 'Weather%20icons/09d@2x.png'},
    {icon: "10d", src: 'Weather%20icons/10d@2x.png'},
    {icon: "11d", src: 'Weather%20icons/11d@2x.png'},
    {icon: "13d", src: 'Weather%20icons/13d@2x.png'},
    {icon: "50d", src: 'Weather%20icons/50d@2x.png'},
]


async function getResponse() {
    let response = await fetch('https://api.openweathermap.org/data/2.5/onecall?lat=53.9&lon=27.5667&exclude=minutely,hourly&appid=1ac62dc3dd3cfeba62e395b7fbf071cd');
    let content = await response.json();
    console.log(content);
    tempDay0.innerHTML = (Math.round(content.daily[0].temp.day - 273.15)) + '&#176;';
    tempDay1.innerHTML = (Math.round(content.daily[1].temp.day - 273.15)) + '&#176;';
    tempDay2.innerHTML = (Math.round(content.daily[2].temp.day - 273.15)) + '&#176;';
    tempDay3.innerHTML = (Math.round(content.daily[3].temp.day - 273.15)) + '&#176;';
    tempNight0.innerHTML = (Math.round(content.daily[0].temp.morn - 273.15)) + '&#176;';
    tempNight1.innerHTML = (Math.round(content.daily[1].temp.morn - 273.15)) + '&#176;';
    tempNight2.innerHTML = (Math.round(content.daily[2].temp.morn - 273.15)) + '&#176;';
    tempNight3.innerHTML = (Math.round(content.daily[3].temp.morn - 273.15)) + '&#176;';
    let weatherIcon0 = content.daily[0].weather[0].icon;
    let weatherIcon1 = content.daily[1].weather[0].icon;
    let weatherIcon2 = content.daily[2].weather[0].icon;
    let weatherIcon3 = content.daily[3].weather[0].icon;
    weatherIconMap.forEach(e => {
        if(weatherIcon0 === e.icon) {
            let imgURL = e.src;
            img0.setAttribute('src', imgURL);
        }
        if(weatherIcon1 === e.icon) {
            let imgURL = e.src;
            img1.setAttribute('src', imgURL);
        }
        if(weatherIcon2 === e.icon) {
            let imgURL = e.src;
            img2.setAttribute('src', imgURL);
        }
        if(weatherIcon3 === e.icon) {
            let imgURL = e.src;
            img3.setAttribute('src', imgURL);
        }
    })

    //block today
    speedWind.innerHTML = Math.round(content.current.wind_speed)+ " м/с";
    humidity.innerHTML = content.current.humidity + "%";
    pressure.innerHTML = Math.round(content.current.pressure/1.33) + "мм."
    currentTempDay.innerHTML = (Math.round(content.current.temp - 273.15)) + '&#176;';
    maxTemp.innerHTML = "Максимальная температура сегодня: " + Math.round(content.daily[0].temp.max - 273.15) + '&#176;';
    tempFeelingToday.innerHTML =  "Ощущается как: " +  Math.round(content.current.feels_like - 273.15) + '&#176;';
    // weatherIconToday.innerHTML = "Today " + content.weather[0].icon;
    weatherIconMap.forEach(e => {
        if (weatherIcon0 === e.icon) {
            let imgURL = e.src;
            todayImg.setAttribute('src', imgURL);
        }
    })
}

getResponse();
