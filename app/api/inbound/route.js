// pages/api/data.js
import clientPromise from "../../lib/mongodb";

export default async function handler(req, res) {
  try {
    const client = await clientPromise;
    const db = client.db("yourDatabaseName"); // replace with your DB name
    const collection = db.collection("yourCollectionName"); // replace with your collection
    const data = await collection.find({}).toArray();

    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch data" });
  }
}
