import { 
    Controller, 
    Get, 
    Post, 
    Body, 
    Param, 
    HttpStatus, 
    HttpCode, 
    Redirect, 
    Header, 
    UsePipes, 
    ValidationPipe 
} from '@nestjs/common';
import { UsersService } from './users.service';
import { createUserDto } from './dto/users-dto';


@Controller('users')
export class UsersController {
    constructor(private readonly usersService : UsersService) {}

    @Post('register')
    @UsePipes(new ValidationPipe())
    register(@Body() req : createUserDto) {
    	console.log('request got !')
        return this.usersService.register(req)
    }    

    @Get('all')
    getAll() : Promise<string> {
        return this.usersService.getAll()
    }

}








