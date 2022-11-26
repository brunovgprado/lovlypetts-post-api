import { v4 as uuid } from "uuid"
import { IBaseEntity } from "./IBaseEntity";

export class Post implements IBaseEntity{
    private readonly Id: string;
    public UserId: string;
    public DateTime: Date;
    public Title: string;
    public Text: string;

    constructor(props: Omit<Post, 'Id' | 'DateTime' | 'isValid'>, id?: string, dateTime?: Date){
        Object.assign(this, props);

        if(!id)
          this.Id = uuid();

        if(!dateTime)
          this.DateTime = new Date();
    }

    public isValid(): boolean{
      return (
        !!this.Text ||
        !!this.Title )    
    }
}