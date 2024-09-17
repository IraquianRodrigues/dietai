import Fastify from "fastify";
import cors from "@fastify/cors"
import dotenv from "dotenv"
import {routes} from './routes'



const app = Fastify({logger: true})
dotenv.config()

// -- caso tenha alguma erro na api --
app.setErrorHandler((error, request, reply) => {
    reply.code(400).send({message: error.message})
})


// -- inicializar nosso servidor --
const start = async () => {
    app.register(cors);
    app.register(routes)

    // -- subir o servidor na porta desejada --
    try{
      await app.listen({port: 3333, host: "0.0.0.0"}) 
      console.log("servidor rodando no http://localhost:3333") 
    }catch(err){
        console.log(err)
    }
}

start()