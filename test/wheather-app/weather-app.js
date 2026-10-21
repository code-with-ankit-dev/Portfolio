let cityInput=document.getElementById("cityInput");
let searchBtn=document.getElementById("searchBtn");
let weatherDisplay=document.getElementById("weatherDisplay");

searchBtn.addEventListener("click",async function(){
        let city = cityInput.value;
        try{
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=1ff6fd2e5df927653e4b8f84de143fbd&units=metric`;
        let response = await fetch(url);
        let data = await response.json();
        if(data.cod==="404"){
                throw new Error("City not found");
        }       
        console.log(data);
        weatherDisplay.textContent=
        data.name +"|"+
        data.main.temp+"deg C-|"+
        data.weather[0].description+"|"+
        "Humidity:"+data.main.humidity+"%|"+
        "Wind:"+data.wind.speed+"m/s";
}
        catch(error){
                weatherDisplay.textContent=
                "city not founf.try again.";
        }
});