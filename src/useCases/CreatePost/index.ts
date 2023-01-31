import { MongoDbPostRepository } from "../../infrastructure/repositories/MongoDbPostRepository";
import { CreatePostController } from "./CreatePostController";
import { CreatePostUseCase } from "./CreatePostUseCase";

const postRepository = new MongoDbPostRepository();

const createPostUseCase = new CreatePostUseCase(postRepository);

const createPostController = new CreatePostController(createPostUseCase);

export { createPostUseCase, createPostController };