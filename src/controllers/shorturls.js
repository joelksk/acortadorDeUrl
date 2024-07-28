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
    const data = result.data;
    const url = await ShorturlsServices.urlExist(data);
    //TODO: Hacer que si la persona no esta registrada, hacer que devuelva una url que no tenga usuario asignado (solo para los no registrados)
    if(url.length > 0) return res.json(url)

    const code = generateCode();
    const shortUrl = generateShortUrl(data, code);
    let user = req.user ? req.user : null; 
    //CONSEGUIMOS PROVISORIAMENTE EL USER.ID POR MEDIO DEL TOKEN HASTA QUE SOLUCIONEMOS EL PROBLEMA
    const token = req.get("authorization")
    if(user == null && token != undefined){
      const decodedToken = jwt.verify(token.split(" ")[1], process.env.SECRET);
      const username = decodedToken.username;
      user = await UserController.getUserByUsername(username);
    }
    //TODO: verificar que la urloriginal sea una web existente (proximo update)
    const newShorturl = await ShorturlsServices.createNewShorturl(
      data,
      code,
      shortUrl,
      user
    );

    if (newShorturl != undefined) return res.json(newShorturl);

    res.status(404).json({ message: "The url was not create" });
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
}


