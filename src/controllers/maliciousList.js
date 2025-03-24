import { MaliciousListServices } from "../services/maliciousListServices.js";

export class MaliciousListController {

    static async getAllMaliciousList (req, res) {
        const malicoiusList = await MaliciousListServices.getAll();
        res.json(malicoiusList)
    }

}