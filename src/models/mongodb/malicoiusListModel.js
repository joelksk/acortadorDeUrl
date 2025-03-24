import mongoose from 'mongoose';


const maliciousListSchema = new mongoose.Schema({
    url: { type: String, required: true, unique: true },
    id: { type: String, required: true, unique: true },
    detectedOn: { type: Date, default: Date.now },
    lastChecked: { type: Date, default: Date.now },
    reportHistory: [
      {
        detectedOn: Date,
        status: String,
        report: Object,
      },
    ],
})


maliciousListSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

const MaliciousList = mongoose.model('MaliciousList', maliciousListSchema)

export const MaliciousUrlsSchema = MaliciousList.schema
export default MaliciousList