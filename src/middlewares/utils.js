import { Guid } from 'js-guid';
import { ShorturlsServices } from '../services/urlServices.js';
import 'dotenv/config'
import axios from 'axios'

const shortBase = process.env.SHORT_BASE
const GSB_API_KEY = process.env.API_KEY_GOOGLE_SAFE_BROWSER

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

export const checkUrlSafety = async (url) => {

    const originalUrl = url.originalUrl;
    
    const endpoint = `https://safebrowsing.googleapis.com/v4/threatMatches:find?key=${GSB_API_KEY}`;

    const payload = {
        client: {
            clientId: "linkly",
            clientVersion: "1.0.0"
        },
        threatInfo: {
            threatTypes: ["MALWARE", "SOCIAL_ENGINEERING", "UNWANTED_SOFTWARE", "POTENTIALLY_HARMFUL_APPLICATION"],
            platformTypes: ["ANY_PLATFORM"],
            threatEntryTypes: ["URL"],
            threatEntries: [{ url: originalUrl }]
        }
    };

    try {
        const { data } = await axios.post(endpoint, payload);
        return data;
    } catch (error) {
        console.error("Error checking URL safety:", error);
        return null;
    }
}


