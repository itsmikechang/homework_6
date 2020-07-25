var apiKey = "99b168cdfe3e5b8e150006d7cfc6ed8a";

function currentWeather (){
    navigator.geolocation.getCurrentPosition(function (position){
        longitude = position.coords.longitude;
        latitude = position.coords.latitude;
        
        var queryURL = "https://api.openweathermap.org/data/2.5/weather?lat=" + latitude + "&lon=" + longitude + "&appid=" + apiKey;

        $.ajax({
        url: queryURL,
        method: "GET"
        })
    })
}
