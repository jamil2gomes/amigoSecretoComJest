import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { useListaDeParticipantes } from '../../state/hooks/useListaDeParticipantes';
import { RecoilRoot } from 'recoil';
import Rodape from '.';



jest.mock('../../state/hooks/useListaDeParticipantes', ()=>{
    return{
        useListaDeParticipantes: jest.fn(),
    }
 })

 const mockNavegacao = jest.fn();

 jest.mock('react-router-dom', ()=>{
    return{
        useNavigate: ()=>mockNavegacao,
    }
 })

 const mockSorteio = jest.fn();

 jest.mock('../../state/hooks/useSorteador', ()=>{
    return{
        useSorteador: ()=>mockSorteio,
    }
 })
describe('quando não existem participantes suficientes', ()=>{
    beforeEach(()=>{
        (useListaDeParticipantes as jest.Mock).mockReturnValue([])
    })
    test('deve ter o botao desabilitado ', () => {
        render(
            <RecoilRoot>
                <Rodape/>
            </RecoilRoot>
        );

        const botao = screen.getByRole('button');

        expect(botao).toBeDisabled();
    });
})

describe('quando existem participantes suficientes', ()=>{
    beforeEach(()=>{
        (useListaDeParticipantes as jest.Mock).mockReturnValue(['Ana', 'Jamil', 'João'])
    })
    test('o botão deve estar desabilitado ', () => {
        render(
            <RecoilRoot>
                <Rodape/>
            </RecoilRoot>
        );

        const botao = screen.getByRole('button');
        
        expect(botao).not.toBeDisabled();
    });


    test('a brincadeira pode ser iniciada ', () => {
        render(
            <RecoilRoot>
                <Rodape/>
            </RecoilRoot>
        );

        const botao = screen.getByRole('button');

        fireEvent.click(botao);
        
        expect(mockNavegacao).toHaveBeenCalledTimes(1);
        expect(mockNavegacao).toHaveBeenCalledWith('/sorteio');
        expect(mockSorteio).toHaveBeenCalledTimes(1);
    });
})