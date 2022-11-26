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
        console.log("before validation")
        this.validateEntity(post);
        console.log("after validation")
        await this.postRepository.save(post);
    }
}