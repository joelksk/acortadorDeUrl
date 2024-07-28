import Urls from '../models/mongodb/shorturlsModels.js'

export class ShorturlsServices {

    static async getAll() {
        try {
            const allUrls = await Urls.find()
            return allUrls;
        } catch (error) {
            console.log("error al tratar de traer todos las urls de la bd");
        }
    }
  
    static async getShortUrlById(id) {
      try {
        const shortUrl = await Urls.findById(id);
        return shortUrl;
      } catch (error) {
        console.log("error al tratar de traer una url bd");
      }
    }
  
    //Verificamos si el codigo que usamos existe en la base de datos!!
    static async isCodeInUse({ code }) {
        try {
          const codeExist = (await Urls.find({ code: code})).length === 0 ? false : true;
          return codeExist;
        } catch (error) {
          console.log("Error al intentar verificar si el codigo existe en la bd");
        }
    }
    
    static async urlExist({originalUrl}){
      try {
        const result = await Urls.find({originalUrl: originalUrl})
        return result
      } catch (error) {
        console.log("Error al intentar verificar si la Url enviada por el usuario existe en la bd");
      }
    }
  
    static async createNewShorturl(object, code, shortUrl, user) {
        try {
            const newShortUrl = new Urls({
                originalUrl: object.originalUrl,
                codeUrl: code,
                isPublic: object.isPublic !== undefined ? object.isPublic : false,
                shortUrl,
                countClick: 0,
                userId: user != null ? user._id.toString() : null
            })

            await newShortUrl.save()
            return newShortUrl
        } catch (error) {
            console.log("error al tratar de guardar una nueva url ", error)
        }
    }

    static async updateShorturl(shortUrlToEdit, shortUrlEdited) {
      try {
        const  shortUrlSaved = await Urls.findByIdAndUpdate(shortUrlToEdit.id, shortUrlEdited, {new: true})
        return shortUrlSaved

      } catch (error) {
        console.log("Error al intentar editar la url" , error);
      }
    }

    static async getShortUrlByCodeUrl(codeUrl){
      try {
        const shortUrl = await Urls.findOne({codeUrl: codeUrl});
        return shortUrl
      } catch (error) {
        console.log("Error al intentar obtener la url por el codigo" , error);
      }
    }

    static async getUrlsByUserId(userId){
      try {
        const urls = await Urls.find({userId: userId})
        return urls
      } catch (error) {
        console.log("Error al intentar obtener las urls por el id del usuario" , error);
      }
    }
  
  } 