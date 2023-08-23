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
        const user = await this.prismaService.user.create({
            data:{
                email: authDTO.email,
                hashedPassword: hashedPassword,
                firstName: '',
                lastName: ''
            }
        })
        return user
    }
    login(){
        return {
            message: 'this is login'
        }
    }

}