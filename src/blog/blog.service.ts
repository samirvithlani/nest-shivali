import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateBlogDto } from './dto/blog.dto';
import { iBlog } from './interfaces/blog.interface';

@Injectable()
export class BlogService {

    constructor(@InjectModel('Blog') private blogModel:Model<iBlog>){}

    async getBlogs():Promise<iBlog[]>{
        return await this.blogModel.find({
            "title":"abc"
        });
    }

    async getBlogById(id:string):Promise<iBlog>{

        return await this.blogModel.findById(id);
    }
    async deleteBlog(id:string):Promise<iBlog>{
        return await this.blogModel.findByIdAndDelete(id);
    }

    async createBlog(createBlogDto:CreateBlogDto):Promise<iBlog>{
        try{
                const createBlog = new this.blogModel({
                    title: createBlogDto.title,
                    description: createBlogDto.description
                })
                return await createBlog.save();
        }catch(err){
            throw new HttpException("error while saveing blog",HttpStatus.BAD_REQUEST)
        }
    }

}
