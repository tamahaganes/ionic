const API_KEY = 'b1c1debb10815d2c32ac8b19424c41b9'

export default {
    /**
    * /get weather data from location
    * @param location : string
    */
     async getWeather(location: string) {
         const request = await fetch (`http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}`)
         const data = await request.json
         return data      

     },
     async getForecast(lon: number, lat: number ){
        const request = await fetch (`http://api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${lon}&cnt={cnt}&appid=${API_KEY}`)
         
     },


    setWeather(location: string) { },
};