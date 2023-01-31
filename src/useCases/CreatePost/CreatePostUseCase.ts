import { IPostRepository } from "../../infrastructure/repositories/contracts/IPostRepository"
import { ICreatePostRequestDto } from "./CreatePostRequestDto";
import { Post } from "../../models/entities/Post";
import { BaseUseCase } from "../BaseUseCase";
import { ICreatePostUseCase } from "./interfaces/ICreatePostUseCase";

export class CreatePostUseCase extends BaseUseCase implements ICreatePostUseCase{

    constructor(private postRepository: IPostRepository){
        super();
    }

    async execute(createPostDto: ICreatePostRequestDto): Promise<void>{
        const post = new Post(createPostDto);
        this.validateEntity(post);
        await this.postRepository.save(post);
    }
}