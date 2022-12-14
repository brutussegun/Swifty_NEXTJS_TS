import {NextApiRequest, NextApiResponse} from "next";
import {mongooseConnection} from "../../../utils/mongodb";


export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {

    try {
        await mongooseConnection()
    } catch (error: any) {
        res.status(500).json({message: error.message, trace: error.stack})
    }


};


