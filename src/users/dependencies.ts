import { MongoUserRepository } from "./mongo-user-repository";
import { UserController } from "./user-controller";
import { UserByIdFinder } from './user-by-id-finder';
import { ElasticUserRepository } from "./elastic-user-repository";

const mongoUserRepository = new MongoUserRepository();
const elasticUserRepository = new ElasticUserRepository()
const  userByIdFinder=new UserByIdFinder(elasticUserRepository)
export const userController = new UserController(userByIdFinder);

