import 'dotenv/config'

import express from 'express'
import cors from 'cors'


import usercontrol from './controller/vilaoController.js'


const server = express();
server.use(cors());
server.use(express.json());

server.use(usercontrol);



server.listen(process.env.PORT, () => console.log(`API conectado na PORTA ${process.env.PORT}`));