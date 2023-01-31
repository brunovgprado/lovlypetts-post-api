import { Post } from "../../../models/entities/Post";

export interface IPostRepository {
  save(post: Post): Promise<void>;
  getPostsByUserId(userId: string): Promise<Array<Post>>;
  getAllPosts(): Promise<Array<Post>>;
}