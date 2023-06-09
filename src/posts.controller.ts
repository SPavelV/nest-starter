import { Body, Controller, Delete, Param, Post, Put } from '@nestjs/common';
import PostService from './posts.service';
import CreatePostDto from './dto/createPost.dto';
import UpdatePostDto from './dto/updatePost.dto';

@Controller('posts')
export default class PostController {
  constructor(private readonly postsService: PostService) {}

  @Get()
  getAllPosts() {
    return this.postsService.getAllPosts();
  }

  @Get(':id')
  getPostById(@Param('id') id: string) {
    return this.postsService.getPostById(Number(id));
  }

  @Post()
  async cratePost(@Body() post: CreatePostDto) {
    return this.postsService.createPost(post);
  }

  @Put()
  async replacePost(@Param('id') id: string, @Body() post: UpdatePostDto) {
    return this.postsService.replacePost(Number(id), post);
  }

  @Delete(':id')
  async deletePost(@Param('id') id: string) {
    this.postsService.deletePost(Number(id));
  }
}
