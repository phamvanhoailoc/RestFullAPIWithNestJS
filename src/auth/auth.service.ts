import { Injectable } from "@nestjs/common";
import {User, Note} from "@prisma/client"
import { PrismaService } from "src/prisma/prisma.service";
import { AuthDTO } from "./dto";
import * as argon from 'argon2'
@Injectable({})

export class AuthService{

    constructor(private prismaService: PrismaService){}
    async register(authDTO: AuthDTO){
        const hashedPassword = await argon.hash(authDTO.password)
        try{
            const user = await this.prismaService.user.create({
                data:{
                    email: authDTO.email,
                    hashedPassword: hashedPassword,
                    firstName: '',
                    lastName: ''
                },
                //only select id, email, createdAt
                select:{
                    id: true,
                    email: true,
                    createdAt : true
                }
            })
        return user

        }catch(err){
            return {
                err
            }
        }
    }
    login(){
        return {
            message: 'this is login'
        }
    }

}