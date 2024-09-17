import { FastifyRequest, FastifyReply } from "fastify";
import { CreateNutrionService } from "../services/CreateNutrionService";

export interface DataProps {
    name: string
    weight: string
    height: string 
    age: string
    gender: string
    objective: string
    level: string
}

class CreateNutrionController{
    async handle(request:FastifyRequest, reply: FastifyReply){
        const{name, weight, height, age, gender, objective, level} = request.body as DataProps

        const createNutrition = new CreateNutrionService()

        const nutrition = await createNutrition.execute({
            name,
            weight,
            objective,
            age,
            gender,
            level,
            height
        })

        reply.send(nutrition)
    }
}

export {CreateNutrionController}

