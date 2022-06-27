import {Router} from "express";
import { inserirVilao, ListarTodos } from "../repository/vilaoRepository.js";


const server = Router();

server.get('/vilao', async (req, resp ) => {
    try {
        
        const resposta = await ListarTodos()
        resp.status(200).send(resposta)

        resp.send(resposta)
    } catch (err) {
        resp.status(404).send({
            erro:err.message
        })
        
    }
})

server.post('/vilao', async (req, resp) => {

    try {
        const vilao = req.body;

        if(!vilao.nome)
        throw new Error ("Coloque o nome do vilão");

        if(!vilao.maldade)
        throw new Error ("Coloque as maldades dele");

        resp.send(vilao)

    } catch (err) {
        resp.status(404).send({
            erro: err.message
        })
        
    }
})

export default server;