export class Recipe
{
    public _id:any
    constructor(
        public name:any,
        public picture:any,
        public level:any,
        public kind :any,
        public time :any,
        public userPassword:any,
        public ingredients:Array<any>
    ){}
}