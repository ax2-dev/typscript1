import type ts = require("typescript");

type weatherDetailType = {
    weather: string;
    zipcode: string;
    temp?:number;
}

let weatherDetail: weatherDetailType={
    weather:"Sunny",
    zipcode:"11111",
    temp:35,
}

interface weatherProps{
    weather:string;
    zipcode:string;
    temp?:number;
}

const weatherComponent = (props: WeatherProps)=>{
    
}