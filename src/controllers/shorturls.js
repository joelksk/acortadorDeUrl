import { ShorturlsServices } from "../services/urlServices.js";
import { generateCode, generateShortUrl } from "../middlewares/utils.js";
import {validateShorturl} from "../schemas/shorturls.js";

export class ShorturlsController {

  static async getAllShorturls(req, res) {
    const urls = await ShorturlsServices.getAll();
    res.json(urls);
  }

  static async getShortUrlById(req, res) {
    const { id } = req.params;
    const url = await ShorturlsServices.getShortUrlById(id);
    if (url) return res.redirect(url.originalUrl);

    res.status(404).json({ message: "url not found" });
  }

  static async createNewshorturl(req, res) {
    const result = validateShorturl(req.body);
    if (result.error) {
      return res.status(400).json({ error: JSON.parse(result.error.message) });;
    }
    const data = result.data;
    const code = generateCode();
    const shortUrl = generateShortUrl(data, code);

    const url = await ShorturlsServices.urlExist(data);
    if(url.length > 0) return res.json({url, message: "url already exists"})

    //TODO: verificar que la urloriginal sea una web existente (proximo update)
    const newShorturl = await ShorturlsServices.createNewShorturl(
      data,
      code,
      shortUrl
    );

    if (newShorturl != undefined) return res.json(newShorturl);

    res.status(404).json({ message: "The url was not create" });
  }

  static async updateShorturl(req, res) {
    const shortUrlToEdit = await ShorturlsServices.getShortUrlById(req.params.id)
    console.log(req.params.id);
    if(!shortUrlToEdit) return res.status(404).json({ message: "not found"})
    
    const shortUrlEdited = await ShorturlsServices.updateShorturl(shortUrlToEdit, req.body)
    res.json(shortUrlEdited)
  }

}


