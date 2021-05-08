export interface Task{
    id?:number;  //? means optional if we send null
    text:string;  
    day:string;  
    reminder:boolean;  

}