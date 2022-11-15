// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import fetch from 'node-fetch';
import { MongoClient } from 'mongodb'

const uri = "mongodb+srv://MartinGull:EpiSalt@myawesomecluster.n23pjqb.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri);

const clientPromise = client.connect();

export default async function handler (req, res) {

  const database = (await clientPromise).db('gr8');
  const collection = database.collection('products');
  const results = await collection.find({contentful: "7vN8nIqu67q806FfWJNtrj"}).toArray();

  return res.status(200).send(JSON.stringify(results));
}