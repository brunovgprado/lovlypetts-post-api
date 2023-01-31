import { ICreatePostRequestDto } from "../CreatePostRequestDto";

export interface ICreatePostUseCase{
    execute(createPostDto: ICreatePostRequestDto): Promise<void>;
}