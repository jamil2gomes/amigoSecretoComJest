import React from 'react';
import { realizarSorteio } from './realizaSorteio';



describe('dado um sorteio', () =>{

    const participantes = [
        'Jamil',
        'Viviane',
        'Bruno',
        'Breno'
    ]

   

    test('os participantes não podem tirar seus próprios nomes', ()=>{
      
        const sorteio = realizarSorteio(participantes);

        participantes.forEach(participante => {
            const amigoSecreto = sorteio.get(participante);
            expect(amigoSecreto).not.toEqual(participante);
        })
        
    })
})