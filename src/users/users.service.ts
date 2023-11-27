import { Injectable } from "@nestjs/common";
import { createUserDto } from "./dto/users-dto";
import { InjectRepository } from "@nestjs/typeorm";
import { UserEntity } from "./entities/user.entity";
import { Repository } from "typeorm";

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(UserEntity) private readonly userRepo : Repository<UserEntity>
    ) {}
    
    async register(newUserObject : createUserDto) {

        const userExists = await this.userRepo.find({where: {
            email: newUserObject.email
        }})

        if(userExists.length > 0) {
            return 'Duplicate user !'
        } else {
            const user = await this.userRepo.save({
                name: newUserObject.email,
                email: newUserObject.email,
                password: newUserObject.password,
                grade: newUserObject.grade
            }) 
        }

        let data
        await this.userRepo.query('SELECT * FROM user_entity').then(resp => {
            console.log(resp)
            data = resp
        })
        return JSON.stringify(data)
    }

    async getAll() {
        let data
        await this.userRepo.query('SELECT * FROM user_entity').then(resp => {
            console.log(resp)
            data = resp
        })
        return JSON.stringify(data)
    }

}