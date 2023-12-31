import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class UserEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name : string

    @Column()
    email : string 

    @Column()
    password : string

    @Column()
    grade : string 
    
}