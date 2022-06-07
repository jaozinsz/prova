import {Router} from "express";
import { ListarTodos } from "../repository/vilaoRepository.js";


const server = Router();

server.get('/vilao', async (req, resp ) => {
    try {
         

        const resposta = await ListarTodos()

        resp.send(resposta)
    } catch (err) {
        resp.status(404).send({
            erro:err.message
        })
        
    }
})

server.post('/vilao', async (req, resp) => {
    try {
        
    } catch (err) {
        resp.status(404).send({
            erro:err.message
        })
        
    }
})

export default server;