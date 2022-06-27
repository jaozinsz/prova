import { con } from './Connection.js';


export async function inserirVilao (vilao){
    const comando = 
    `insert into TB_VILAO (nm_vilao, ds_maldades, bt_super_poder)
    values(?, ?, ?)`

    const [linhas] = await con.query(comando, [vilao.nome, vilao.maldade, vilao.super_poder])
    vilao.id = linhas.insertId;
    return vilao;

}


export async function ListarTodos (){
    const comando = 
    `SELECT 
    id_vilao        id, 
    nm_vilao        nome,
    ds_maldades     maldade,
    bt_super_poder  Poder
FROM TB_VILAO	
` 
const [linhas] = await con.query(comando)
return linhas;
}