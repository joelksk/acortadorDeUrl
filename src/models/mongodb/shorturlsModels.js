/*************DATABASE*************/
import mongoose from 'mongoose';

const urlsSchema = new mongoose.Schema({
  originalUrl: {
    type: String,
    minLength: 3,
    required: [true, "The original url must not be empty"]
  },
  codeUrl: {
    type: String
  },
  isPublic: {
    type: Boolean
  },
  shortUrl: {
    type: String
  },
  countClick: {
    type: Number
  },
  userId: { 
    type: mongoose.Schema.Types.ObjectId, ref: 'User', default: null
  }

})

urlsSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

const Urls = mongoose.model('ShortsUrl', urlsSchema)

export const UrlsSchema = Urls.schema
export default Urls
/*************DATABASE*************/