import { InMemoryPostRepository } from "../../infrastructure/repositories/InMemoryPostRepository";
import { CreatePostController } from "./CreatePostController";
import { CreatePostUseCase } from "./CreatePostUseCase";

const postRepository = new InMemoryPostRepository();

const createPostUseCase = new CreatePostUseCase(postRepository);

const createPostController = new CreatePostController(createPostUseCase);

export { createPostUseCase, createPostController };