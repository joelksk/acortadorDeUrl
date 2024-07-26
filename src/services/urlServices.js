import Urls from '../models/mongodb/shorturlsModels.js'

export class ShorturlsServices {
    //TODO: NO OLVIDAR ENCERRAR TODO EN LOS TRY_CATCH

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
  
    static async createNewShorturl(object, code, shortUrl) {
        try {
            const newShortUrl = new Urls({
                originalUrl: object.originalUrl,
                codeUrl: code,
                isPublic: object.isPublic !== undefined ? object.isPublic : false,
                shortUrl,
                countClick: 0
            })

            await newShortUrl.save()
            return newShortUrl
        } catch (error) {
            console.log("error al tratar de guardar una nueva url")
        }
    }

    static async updateShorturl(shortUrlToEdit, shortUrlEdited) {
      try {
          const shortUrl = {
            originalUrl: shortUrlEdited.originalUrl === undefined ? shortUrlToEdit.originalUrl : shortUrlEdited.originalUrl,
            codeUrl: shortUrlEdited.codeUrl === undefined ? shortUrlToEdit.codeUrl : shortUrlEdited.codeUrl,
            isPublic: shortUrlEdited.isPublic === undefined ? shortUrlToEdit.isPublic : shortUrlEdited.isPublic,
            shortUrl: shortUrlEdited.shortUrl === undefined ? shortUrlToEdit.shortUrl : shortUrlEdited.shortUrl,
            countClick: shortUrlEdited.countClick === undefined ? shortUrlToEdit.countClick : shortUrlEdited.countClick
          }

        const  shortUrlSaved = await Urls.findByIdAndUpdate(shortUrlToEdit.id, shortUrl, {new: true})
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
  
  } 