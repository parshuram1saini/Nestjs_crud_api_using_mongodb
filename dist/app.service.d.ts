import { User, UserDocument } from './userd.model';
import { Model } from 'mongoose';
export declare class AppService {
    private readonly userModel;
    constructor(userModel: Model<UserDocument>);
    createUser(user: User): Promise<User>;
    getUser(): Promise<void | (User & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    updateUser(id: any, data: any): Promise<User>;
    deleteUser(id: any): Promise<User & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
}
