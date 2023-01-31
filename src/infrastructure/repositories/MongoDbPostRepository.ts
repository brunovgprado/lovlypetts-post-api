import { Document as MongoDocument, Collection, MongoClient } from "mongodb";
import { Post } from "../../models/entities/Post";
import { IPostRepository } from "./contracts/IPostRepository";

export class MongoDbPostRepository implements IPostRepository{
    private readonly DB_NAME = "lovlypetts";
    private readonly COLLECTION_NAME = "posts";
    private mongoClient = null;
    private mongoUri;

    constructor(){
        this.mongoUri = "mongodb+srv://brunoprado:993300@cluster0.ztfo5b0.mongodb.net/?retryWrites=true&w=majority"
        //this.mongoUri = process.env.DB_URI;
    }

    async save(post: Post): Promise<void> {
        try {
            let collection = await this.getCollection(this.DB_NAME, this.COLLECTION_NAME);
            await collection.insertOne(post);            
        } finally {
            await this.mongoClient.close();            
        }
    }

    async getAllPosts(): Promise<Post[]>{
        try {
            let collection = await this.getCollection(this.DB_NAME, this.COLLECTION_NAME);
            return await collection.find();                        
        } finally{
            await this.mongoClient.close();
        }
    }

    async getPostsByUserId(userId: string): Promise<Post[]> {
        try {
            let collection = await this.getCollection(this.DB_NAME, this.COLLECTION_NAME);
            return collection.findOne({ _id: userId });            
        } finally {
            await this.mongoClient.close();
        }
    }

    private async getCollection(dbName: string, collectionName: string) {

        this.mongoClient;
    
        try {            
            this.mongoClient = await this.connectToCluster();
            const database = this.mongoClient.db(dbName);
            const collection = database.collection(collectionName);
            return collection;
        } catch {
            await this.mongoClient.close();
        }
    }

    private async connectToCluster(): Promise<any>{
        
        try {
            if(this.mongoClient)
                return this.mongoClient;

            this.mongoClient = new MongoClient(this.mongoUri);
            await this.mongoClient.connect();
            return this.mongoClient;
    
        } catch (error) {
            console.log("Connection to mongo failed!", error);
            process.exit();
        }
    }
}