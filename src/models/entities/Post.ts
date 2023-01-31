import { v4 as uuid } from "uuid"
import { IBaseEntity } from "./IBaseEntity";

export class Post implements IBaseEntity{
    private readonly _id: string;
    public UserId: string;
    public DateTime: Date;
    public Title: string;
    public Text: string;

    constructor(props: Omit<Post, '_id' | 'DateTime' | 'isValid'>, id?: string, dateTime?: Date){
        Object.assign(this, props);

        if(!id)
          this._id = uuid();

        if(!dateTime)
          this.DateTime = new Date();
    }

    public isValid(): boolean{
      return (
        !!this.Text ||
        !!this.Title )    
    }
}