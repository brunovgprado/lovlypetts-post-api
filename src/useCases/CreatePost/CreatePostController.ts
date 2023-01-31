import { Request, Response } from "express";
import { ICreatePostRequestDto } from "./CreatePostRequestDto";
import { ICreatePostUseCase } from "./interfaces/ICreatePostUseCase";

export class CreatePostController{
    constructor(private createPostUseCase: ICreatePostUseCase){}

    async handle(request: Request, response: Response): Promise<Response>{
        const createPostDto = request.body as ICreatePostRequestDto
        
        try{
            await this.createPostUseCase.execute(createPostDto);
            return response.status(201).send();
        }catch (err){
            //TODO: change this implementation for incapsulate this response handle logic
            return response.status(400).json({
                message: err.message ||'Unexpected error'
            });
        }
    }
}