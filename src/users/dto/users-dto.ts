import { IsEmail, IsStrongPassword, Length } from "class-validator"

export class createUserDto {
    @Length(5)
    name : string

    @IsEmail()
    email : string

    @IsStrongPassword()
    password : string

    @Length(5)
    grade : string
    
}