import { con } from './Connection.js';


export async function inserirVilao (vilao){
    const comando = 
    `insert into TB_VILAO (nm_vilao, ds_maldades, bt_super_poder)
    values(?,?,?)`

    const [linhas] = await con.query(comando, [vilao.nome, vilao.maldades, vilao.super_poder]);

    vilao.id = linhas.insertId;

    return vilao;

}


export async function ListarTodos (){
    const comando = 
    `SELECT id_vilao, 
    nm_vilao,
    ds_maldades,
    bt_super_poder
FROM TB_VILAO	
` 
const [linhas] = await con.query(comando)
return linhas;
}