// const {MongoClient} = require('mongodb')
import { MongoClient, Db, Collection  } from "mongodb";

class MongoService {
  private client: MongoClient;
  private collection: string;

  constructor(private uri: string, private _collection: string) {
    this.client = new MongoClient(uri);
    this.collection = _collection;
  }

  async connect() {
    await this.client.connect();
    console.log("Connected to MongoDB");
  }

  async disconnect() {
    await this.client.close();
    console.log("Disconnected from MongoDB");
  }

  async insertDocument( doc: any) {
    const result = await this.client.db().collection(this.collection).insertOne(doc);
    console.log(`Inserted document with _id: ${result.insertedId}`);
  }

  async findDocument(query: any) {
    const result = await this.client.db().collection(this.collection).findOne(query);
    console.log("Found document:", result);
    return result;
  }

  async deleteDocument(query: any) {
    const result = await this.client.db().collection(this.collection).deleteOne(query);
    console.log(`Deleted ${result.deletedCount} document(s)`);
  }

  async getAllDocuments() {
    const cursor = this.client.db().collection(this.collection).find({});
    const allDocuments = await cursor.toArray();
    console.log("All documents:", allDocuments);
    return allDocuments;
  }

  async getTopBy(sortCriteria: {}, value: number) {
    const cursor = this.client.db().collection(this.collection).find({}).sort(sortCriteria).limit(value);
    const Top = await cursor.toArray();
    return Top;
  }
}

export default MongoService;