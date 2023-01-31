import { Post } from "../../models/entities/Post";
import { IPostRepository } from "./contracts/IPostRepository";

export class InMemoryPostRepository implements IPostRepository{
    private readonly inMemoryDb = Array<Post>();

    constructor(){
        this.inMemoryDb = new Array<Post>();
    }
    
    async save(post: Post): Promise<void> {
        this.inMemoryDb.push(post);
    }

    async getAllPosts(): Promise<Post[]> {
        throw new Error("Method not implemented.");
    }
    
    async getPostsByUserId(userId: string): Promise<Post[]> {
        return this.inMemoryDb.filter(p => p.UserId == userId)
    }
}