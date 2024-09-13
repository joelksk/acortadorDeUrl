import { Guid } from 'js-guid';
import { ShorturlsServices } from '../services/urlServices.js';
import 'dotenv/config'

const shortBase = process.env.SHORT_BASE

export const generateCode =  () => {
    let newCodeUrl = ""
    do {
        const uuidCode = Guid.newGuid().toString();
        const arrayCode = uuidCode.split('-');
        newCodeUrl = arrayCode[arrayCode.length -1];
    } while (!ShorturlsServices.isCodeInUse);
        
    return newCodeUrl;
}

export const generateShortUrl = (object, code) => {
    if(object.opcionalNameUrl == null || object.opcionalNameUrl == undefined){
        return shortBase + code
    }
    const newShortUrl = `https://${object.opcionalNameUrl}/${code}`
    return newShortUrl.toString();
}


