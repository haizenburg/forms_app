import connectMongo from "../../../database/db_config";
import type { NextApiRequest, NextApiResponse } from "next";

// controller imports
import { getUsers } from "../../../database/controller";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  connectMongo().catch((err) => res.status(405).json({ error: err }));

  const { method } = req;

  switch (method) {
    case "GET":
      // Get data from your database
      getUsers(req, res);
      break;
    case "POST":
      // Create data in your database
      res.status(200).json({ name: "John Doe" });
      break;
    case "PUT":
      // Create data in your database
      res.status(200).json({ name: "John Doe" });
      break;
    default:
      res.setHeader("Allow", ["GET", "POST", "PUT"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }

  res.status(200).json({ name: "John Doe" });
}
