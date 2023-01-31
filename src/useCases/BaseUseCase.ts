import { IBaseEntity } from "../models/entities/IBaseEntity";

export abstract class BaseUseCase{
    protected validateEntity(entity: IBaseEntity): void{
        //TODO: Change this for notification pattern
        if(!entity.isValid())
            throw new Error("There are some empty mandatory data")
    }
}