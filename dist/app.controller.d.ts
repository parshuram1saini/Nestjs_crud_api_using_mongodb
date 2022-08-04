import { AppService } from './app.service';
import { User } from './userd.model';
import { UserUpdateDto } from './userUpdate.dto';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    createUser(userDto: User): Promise<User>;
    getUser(): Promise<void | (User & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    updateUser(id: string, updateData: UserUpdateDto): Promise<User>;
    deleteUser(id: string): Promise<User & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
}
