import { Router } from "express";
import { createPostController } from "./useCases/CreatePost";

const router = Router();

router.post('/post', (request, response) => {
    return createPostController.handle(request, response)
});

export { router };