import { connection } from "./connection";
import {Dog} from '../entities';


const collection = connection.db('dog-express').collection<Dog>('dog');


export const dogRepository = {
    findAll() {
        return collection.find().toArray();
    },
    async persist(dog:Dog) {
        const result = await collection.insertOne(dog);
        dog._id = result.insertedId;
        return dog;
    }
}