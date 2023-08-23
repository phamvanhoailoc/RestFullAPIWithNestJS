import { Body, Controller, Get, Post, Req } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthDTO } from "./dto";


@Controller('auth')
export class AuthController{
    constructor(private authService : AuthService){}

    @Post("register")
    register(@Body() body: AuthDTO){
        console.log(body)
        return this.authService.register(body);
    }

    @Post("login")
    login(){
        return this.authService.login();

    }

}