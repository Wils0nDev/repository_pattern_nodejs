import { User } from "./user";
import { USER_COLLECTION } from "./user-coleccion";
import { UserRepository } from "./user.repository";

export class MongoUserRepository implements UserRepository{
    
   async getById(id: string): Promise<User | null> {
        console.log('Using mongo')
        const user = await USER_COLLECTION.find((user)=> user.id === id)
        return user ? new User(user.id, user.name): null;
    }
}