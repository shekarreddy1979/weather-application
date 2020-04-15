const request = require("request")

const url = " http://api.weatherstack.com/current?access_key=bbce11e78f4719f9c29e7bb7af38fd1d&query=17.2489,78.8968   "

request({ url: url,json:true}, (error,Response)=>{
    
    //console.log(Response.body.current)
    console.log(Response.body.current.weather_descriptions +". It is currently " + Response.body.current.temperature + ". There is " +Response.body.current.precip+ "%chance of rain..") 
})


const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiYW5kcmV3bWVhZDEiLCJhIjoiY2pvOG8ybW90MDFhazNxcnJ4OTYydzJlOSJ9.njY7HvaalLEVhEOIghPTlw&limit=1'

request({ url: geocodeURL, json: true }, (error, response) => {
    const latitude = response.body.features[0].place_name.center[1]
    const longitude = response.body.features[0].place_name.center[0]
    console.log(latitude, longitude)
})


