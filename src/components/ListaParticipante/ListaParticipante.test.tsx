

import { render, screen } from '@testing-library/react';
import React from 'react';
import { RecoilRoot } from 'recoil';
import ListaParticipante from '.';
import { useListaDeParticipantes } from '../../state/hooks/useListaDeParticipantes';


jest.mock('../../state/hooks/useListaDeParticipantes', ()=>{
   return{
       useListaDeParticipantes: jest.fn(),
   }
})
describe('uma lista de participantes vazia', ()=>{
    beforeEach(()=>{
        (useListaDeParticipantes as jest.Mock).mockReturnValue([])
    })
    test('deve ser renderizada sem elementos',()=>{
        render( 
            <RecoilRoot>
                <ListaParticipante/>
            </RecoilRoot>);

        const itens = screen.queryAllByRole('listitem');
        expect(itens).toHaveLength(0);
    })
})

describe('uma lista de participantes', ()=>{
    const participantes = ['Jamil', 'Viviane'];

    beforeEach(()=>{
        (useListaDeParticipantes as jest.Mock).mockReturnValue(participantes)
    })


    test('deve ser renderizada sem elementos',()=>{
        render( 
            <RecoilRoot>
                <ListaParticipante/>
            </RecoilRoot>);

        const itens = screen.queryAllByRole('listitem');
        expect(itens).toHaveLength(participantes.length);
    })
})