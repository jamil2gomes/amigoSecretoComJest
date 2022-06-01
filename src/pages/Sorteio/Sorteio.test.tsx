import { render, screen } from '@testing-library/react';
import React from 'react';
import { RecoilRoot } from 'recoil';
import Sorteio from '.';
import { useListaDeParticipantes } from '../../state/hooks/useListaDeParticipantes';

jest.mock('../../state/hooks/useListaDeParticipantes', ()=>{
    return{
        useListaDeParticipantes: jest.fn(),
    }
 })

describe('na pagina de sorteio', () =>{

    const participantes = [
        'Jamil',
        'Viviane',
        'Bruno'
    ]

    beforeEach(()=>{
        (useListaDeParticipantes as jest.Mock).mockReturnValue(participantes)
    })

    test('todos os participantes podem exibir o seu amigo secreto', ()=>{
        render(
            <RecoilRoot>
                <Sorteio/>
            </RecoilRoot>

        );

        const opcoes  = screen.queryAllByRole('option');

        expect(opcoes).toHaveLength(participantes.length)
    })
})