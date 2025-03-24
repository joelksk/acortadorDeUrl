import MaliciousList from '../models/mongodb/malicoiusListModel.js'

export class MaliciousListServices {

    static async getAll() {
        try {
            const allMaliciousList = await MaliciousList.find()
            return allMaliciousList;
        } catch (error) {
            console.log("error al tratar de traer todos las urls maliciosas de la bd");
        }
    }
  
    static async checkMaliciousUrl(url) {
      try {
        const maliciousUrl = await MaliciousList.findOne({url});
        return maliciousUrl;
      } catch (error) {
        console.log("error al tratar de traer una url maliciosa de la bd");
      }
    }
  
    static async createNewMaliciousUrl(url, id, report) {
        try {
            const existingMalicious = await MaliciousList.findOne({ url });
            if (!existingMalicious) {
              await MaliciousList.create({
                url,
                id,
                reportHistory: [{ detectedOn: new Date(), status: "maliciosa", report }],
              });
              console.log(`⚠️ URL maliciosa guardada: ${url}`);
            } else {
              existingMalicious.lastChecked = new Date();
              existingMalicious.reportHistory.push({
                detectedOn: new Date(),
                status: "maliciosa",
                report,
              });
              await existingMalicious.save();
            }
        } catch (error) {
            console.log("error al tratar de guardar una nueva url ", error)
        }
    }
}