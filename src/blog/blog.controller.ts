import { Body, Controller, Delete, Get, HttpStatus, Post, Req, Res } from '@nestjs/common';
import { BlogService } from './blog.service';
import { CreateBlogDto } from './dto/blog.dto';

@Controller('blog')
export class BlogController {

    constructor(private service:BlogService){}

    @Get('blog')
    async getBlogs(@Req() Req,@Res()res){

        res.status(HttpStatus.OK).json({
            message: "Blogs",
            data: await this.service.getBlogs()
        })

    }
    @Delete('blog/:id')
    async deleteBlog(@Req() req,@Res() res){
        res.status(HttpStatus.OK).json({
            message: "Blog Deleted",
            data: await this.service.deleteBlog(req.params.id)
        })
    }
    
    @Get('blog/:id')
    async getBlogById(@Req() req,@Res() res){
            
            res.status(HttpStatus.OK).json({
                message: "Blog",
                data: await this.service.getBlogById(req.params.id)
            })
    }


    @Post('blog')
    async createBlog(@Body() createBlogDto :CreateBlogDto,@Req() req,@Res() res){

        res.status(HttpStatus.CREATED).json({
            message: "Blog Created",
            data: await this.service.createBlog(createBlogDto)
        })

    }

}
