if (navigator.geolocation){
    navigator.geolocation.getCurrentPosition(function(ran){

const lat=ran.coords.latitude;
console.log(lat);
var long=ran.coords.longitude;
console.log(long);
getweather(`${lat},${long}`)
    })
   
}
else{
    console.log("notAllow");
}

var searchlocation=document.getElementById("search-location");
async function getweather(query){
   const res= await fetch(`https://api.weatherapi.com/v1/forecast.json?q=${query}&days=3&key=84a0357bb69442999a5220514241606`)
   const data= await res.json()
    console.log(data);
    displaytodayweather(data);
    displaytomm(data)
    displayAftertomm(data)
}

searchlocation.addEventListener("input",function(e){
    getweather(e.target.value)
})

function displaytodayweather(data){
   console.log(data);

const todaydata=data.current.last_updated
let date = new Date(todaydata);

const todayday=date.toLocaleString("en-us",{weekday:"long"});
   console.log(todayday);
   const todaymonthday=date.getDate();
   console.log(todaymonthday,todayday);
   const todaymonth=date.toLocaleString("en-us",{month:"long"});
   console.log(todaymonth,todaymonthday,todayday);
document.getElementById("todayweek").innerHTML=todayday
document.getElementById("month").innerHTML=`${todaymonthday},${todaymonth}`;
var cityname=data.location.name;
console.log(cityname);
document.getElementById("citylocation").innerHTML=cityname;
let temp=data.current.temp_c
console.log(temp);
document.getElementById("temptoday").innerHTML=temp;
let text=data.current.condition.text
document.getElementById("c_lea").innerHTML=text;

imgul.setAttribute("src",`https://cdn.weatherapi.com/weather/64x64/night/113.png`)

let humidity=data.current.humidity
document.getElementById("humidit").innerHTML=humidity
let wind_kp=data.current.wind_kph
document.getElementById("wind_kp").innerHTML=wind_kp
let wind_di=data.current.wind_dir
document.getElementById("wind_dir").innerHTML=wind_di

}
let todayweek=document.getElementById("todayweek");
let month=document.getElementById("month");
let temptoday=document.getElementById("temptoday");
let humidit=document.getElementById("humidit");
let wind_kp=document.getElementById("wind_kp");
let wind_dir=document.getElementById("wind_dir");
let imgul=document.getElementById("imgul");







function displaytomm({forecast}){
   tomm.innerHTML=new Date(forecast.forecastday[1].date).toLocaleString("en-us",{weekday:"long"});
 
// console.log(forecast.forecastday[1].day.condition.icon);
imgtoday.setAttribute("src",`https://cdn.weatherapi.com/weather/64x64/day/113.png`)
tmaxtemp=forecast.forecastday[1].day.maxtemp_c
document.getElementById('tmax-temp').innerHTML=tmaxtemp
mintemp=forecast.forecastday[1].day.mintemp_c
document.getElementById('mintemp_c').innerHTML=mintemp

}
let imgtoday=document.getElementById("imgtoday");
let tmaxtemp=document.getElementById("tmax-temp");
let mintemp=document.getElementById("mintemp_c");

function displayAftertomm({forecast}){
    tommm.innerHTML=new Date(forecast.forecastday[2].date).toLocaleString("en-us",{weekday:"long"});
  
//  console.log(forecast.forecastday[2].day.condition.icon);
 iconofterr.setAttribute("src",`https://cdn.weatherapi.com/weather/64x64/day/113.png`)
 tmaxtempAfter=forecast.forecastday[2].day.maxtemp_c
 document.getElementById('tmaxtempAfter').innerHTML=tmaxtempAfter
 mintempAfter=forecast.forecastday[2].day.mintemp_c
 document.getElementById('mintempAfter').innerHTML=mintempAfter
 
 }

let iconimg=document.getElementById("iconofterr");
let tmaxtempAfter=document.getElementById("tmaxtempAfter");
let mintempAfter=document.getElementById("mintempAfter");

