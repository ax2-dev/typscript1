import fetch from "node-fetch";
import { responseItemType, weatherDetailType, weatherQueryInterface } from "./custom";
const routeHello = () => "Hello World!";
const routeAPINames = async (): Promise<string> => {
    const url = "https://www.usemodernfullstack.dev/api/v1/users";
    let data: responseItemType[];
    try {
        const response = await fetch(url);
        data = (await response.json()) as responseItemType[];
    } catch (err) {
        return err;
    }
    const names = data
        .map((item) => `id: ${item.id}, name: ${item.name}`)
        .join("<br>");
    return names;
};

const routeWeather = (query: weatherQueryInterface): weatherDetailType=> queryWeatherData(query);
const queryWeatherData = (query: weatherQueryInterface): weatherDetailType=>{
    return {
        zipcode:query.zipcode,
        weather:"sunny",
        temp:35,
    };
};

export { routeHello, routeAPINames };