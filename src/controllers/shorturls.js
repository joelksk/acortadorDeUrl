import { ShorturlsServices } from "../services/urlServices.js";
import {UserController} from "../controllers/user.js";
import { generateCode, generateShortUrl } from "../middlewares/utils.js";
import {validateShorturl} from "../schemas/shorturls.js";
import jwt from "jsonwebtoken"

export class ShorturlsController {

  static async getAllShorturls(req, res) {
    const urls = await ShorturlsServices.getAll();
    res.json(urls);
  }

  static async getShortUrlById(req, res) {
    const { id } = req.params;
    const url = await ShorturlsServices.getShortUrlById(id);
    if (url) {
      return res.json(url)
    }
    res.status(404).json({ message: "url not found" });
  }

  static async redirectToOriginalUrl(req, res){
    const {codeUrl} = req.params
    
    const shortUrl = await ShorturlsServices.getShortUrlByCodeUrl(codeUrl)
    if(shortUrl){
      const urlEdited = {countClick: shortUrl.countClick+1}
      await ShorturlsServices.updateShorturl(shortUrl, urlEdited);
      return res.redirect(shortUrl.originalUrl);
    }
    else{
      return res.status(404).json({ message: "Url not found"})
    }
  }

  static async createNewShorturl(req, res) {
    const result = validateShorturl(req.body);
    if (result.error) {
      return res.status(400).json({ error: JSON.parse(result.error.message) });;
    }
    let data = result.data;
  
    const code = generateCode();
    const shortUrl = generateShortUrl(data, code);
    let user = req.user ? req.user : null;

    if(user != null){
      const url = await ShorturlsServices.urlExist(data, user.id);
      if(url.length > 0){
        return res.status(400).json({urlExist: "The URL is already archived."})
      }
    }

    const newShorturl = await ShorturlsServices.createNewShorturl(
      data,
      code,
      shortUrl,
      user
    );

    if (newShorturl != undefined) return res.status(201).json(newShorturl);

    res.status(500).json({ message: "Internal Server Error" });
  }

  static async updateShorturl(req, res) {
    const shortUrlToEdit = await ShorturlsServices.getShortUrlById(req.params.id)
    if(!shortUrlToEdit) return res.status(404).json({ message: "not found"})
    
    const shortUrlEdited = await ShorturlsServices.updateShorturl(shortUrlToEdit, req.body)
    res.json(shortUrlEdited)
  }
  
  static async getUrlsByUserId(req, res) {
    const {userId} = req.params
    const urls = await ShorturlsServices.getUrlsByUserId(userId)
    res.json(urls)
  }

  static async deleteUrlById(req, res) {
    const urlId = req.params.id
    const shortUrltoDelete = await ShorturlsServices.getShortUrlById(urlId)
    if(!shortUrltoDelete) return res.status(404).json({ message: "not found"})
    const response = await ShorturlsServices.deleteShortUrl(urlId)
    if(response.deletedCount == 1){
      res.status(200).json({ message: 'Url had been deleted correctly'})
    } else{
      res.status(500).json({message: 'Internal Server Error'})
    }
    
  }
}


