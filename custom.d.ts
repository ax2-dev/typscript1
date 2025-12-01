import { GeneratedIdentifierFlags } from "typescript";

type responseItemType ={
    id:
    string,
    name:string;
}


type weatherDetailType = {
    weather: string;
    zipcode: string;
    temp?:number;
}

interface weatherQueryInterface{
    zipcode:string;
}