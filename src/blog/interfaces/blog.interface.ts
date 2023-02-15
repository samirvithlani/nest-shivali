import { Document } from "mongoose";

export interface iBlog extends Document{

    title: string;
    description: string;
    
}