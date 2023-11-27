import { Controller, HttpCode, Param } from '@nestjs/common';
import { Get } from '@nestjs/common';

@Controller('posts')
export class PostsController {
    @Get(':text')
    @HttpCode(200)
    test(@Param() params : any) : string {
        return params.text
    } 
}
