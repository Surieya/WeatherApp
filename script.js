let results = document.getElementById("result");
let searchBtn = document.getElementById("search-btn");
let cityRef = document.getElementById("city");
let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityRef.value}&appid=${key}&units=metric`;
let getWeather = () =>{
  let cityValue = cityRef.value;
  if(cityValue==null){
    results.innerHTML = `<h3 class="msg">Please enter a city name</h3>`;

  }
  else{
    cityRef.value = "";
    fetch(url).then(
      (resp) => resp.json()
    )
    .then(data =>{
        // console.log(data);
        results.innerHTML = 
        `<h2>${data.name}</h2>
        <h4 class="weather">${data.weather[0].main}</h4>
        <h4 class="description"> ${data.weather[0].description}</h4>
        <img src="https://openweathermap.org/img/w/${data.weather[0].icon}.png">

        <h1>${data.main.temp} &#176</h1>
        <div class="temp-container">
           <div>
              <h4 class="title">Min</h4>
              <h4 class="temp">${data.main.temp_min}</h4>
            </div>
            <div>
               <h4 class="title">Max</h4>
               <h4 class="temp">${data.main.temp_max}</h4>
            </div>
        </div>`;
             
    })
    .catch(()=>{
      results.innerHTML = `<h3>City not found</h3>`
    })
  }
}
searchBtn.addEventListener("click",getWeather)
window.addEventListener('load',getWeather);