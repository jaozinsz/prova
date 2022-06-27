import React from 'react'
import { useState } from 'react'
import { inserirVilao } from '../../../api/src/repository/vilaoRepository.js'
import { Link } from 'react-router-dom';

export default function inserirVilao() {
    const [insert, setInsert] = useState('');


    async function inserirVilao(){
        if(!insert.trim()){
            alert('Digite um nome valido')
        }

        else{
            const resposta = await inserirVilao(insert);
            setInsert('');
            alert('Anime cadastrado com sucesso')
        }
    }

    return (

        <div className='site'>
            <input className='pp' type="text" value={insert} onChange={(e) => setInsert(e.target.value)}/>
            <button onClick={inserirVilao}>post</button> 
            <Link to='/'>Voltar</Link>
         </div>
    )
}
