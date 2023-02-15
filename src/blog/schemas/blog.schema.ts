import mongoose from "mongoose";

export const BlogSchema= new mongoose.Schema({

    title: { type: String, required: true },
    description: { type: String, required: true },
    
})