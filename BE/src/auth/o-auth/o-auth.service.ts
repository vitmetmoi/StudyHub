import { Injectable, NotFoundException } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { User } from 'src/users/entities/user.entity';
import { JwtService } from '@nestjs/jwt';
@Injectable()
export class OAuthService {
    constructor(
        @InjectModel('User') private userModel: Model<User>,
        private readonly jwtService: JwtService
    ) { }

    checkUserAccountService = async (oAuthDto) => {
        try {
            const decodedData = this.jwtService.decode(oAuthDto.credential);
            let userData: any;
            if (decodedData && decodedData.email) {
                userData = await this.userModel.findOne({ email: decodedData.email });
            }
            else {
                throw new NotFoundException;
            }

            if (!userData || !userData.email) {
                let newUser = {
                    email: decodedData.email,
                    userName: decodedData.name,
                    password: 'none'
                }
                let newAccount = await this.userModel.create(newUser);

                const tokenData = {
                    email: newAccount.email,
                    userName: newAccount.userName
                }

                let access_token = await this.jwtService.sign(tokenData);

                return {
                    token: access_token,
                    data: tokenData
                };
            }
            else {
                const tokenData = {
                    email: userData.email,
                    userName: userData.userName
                }

                let access_token = await this.jwtService.sign(tokenData);

                return {
                    token: access_token,
                    data: tokenData
                };
            }
        } catch (error) {
            console.log(error)
        }

    }
}
