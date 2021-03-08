import { receipt } from "../db.json";
import sequelize from "sequelize";
import boom from "boom";

export const getReceipt = async (req, res) => {
    try {
        const getAll = await receipt.findAll({
        })

        return getAll

    } catch (err) {
        throw boom.boomify(err);
    }
}
