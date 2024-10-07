const apiKey="31b5f69b5cde0e420914c75064b93469";
const apiURL="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const srhbox=document.querySelector(".search input");
const srhbtn=document.querySelector(".search button");
const weathericon=document.querySelector(".weather-icon");

async function checkweather(city){
    const res=await fetch(apiURL + city +`&appid=${apiKey}`);

    if(res.status==404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
        return;
    }

    // var data=await res.json();
    const data = await res.json();
    console.log(data);
    document.querySelector(".error").style.display = "none";
    
    document.querySelector(".city").innerHTML= data.name;
    document.querySelector(".temp").innerHTML= Math.round(data.main.temp )+  "°C";
    document.querySelector(".humidity").innerHTML= data.main.humidity + "%";
    document.querySelector(".wind").innerHTML= data.wind.speed + "km/h";

    if(data.weather[0].main=="Clouds"){
         weathericon.src="Images/clouds.png";
    }
    else if(data.weather[0].main=="Clear"){
        weathericon.src="Images/sunny.png";
    }
    else if(data.weather[0].main=="Rain"){
        weathericon.src="Images/rain.png";
    }
    else if(data.weather[0].main=="Drizzle"){
        weathericon.src="Images/drizzle.png";
    }
    else if(data.weather[0].main=="Mist"){
        weathericon.src="Images/mist.png";
    }
    document.querySelector(".weather").style.display="block";
     
}

srhbtn.addEventListener("click",()=>{
    checkweather(srhbox.value);
})

