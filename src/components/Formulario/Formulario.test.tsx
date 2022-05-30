import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react'
import Formulario from '.';
import { RecoilRoot } from 'recoil';
import { act } from 'react-dom/test-utils';


describe('o comportamento do Formulario.tsx', ()=>{

test('quando o input está vazio, novos participantes não podem ser adicionados',()=>{
    render( 
        <RecoilRoot>
            <Formulario/>
        </RecoilRoot>);

    const input = screen.getByPlaceholderText('Insira os nomes dos participantes');
    const button = screen.getByRole('button');

    expect(input).toBeInTheDocument();
    expect(button).toBeDisabled();
});

test('adicionar participante caso input esteja preenchido',()=>{
    render( 
    <RecoilRoot>
        <Formulario/>
    </RecoilRoot>);

    const input = screen.getByPlaceholderText('Insira os nomes dos participantes');
    const button = screen.getByRole('button');

    fireEvent.change(input,{
        target:{
            value:'Jamil'
        }
    });

    fireEvent.click(button);

    expect(input).toHaveFocus();
    expect(input).toHaveValue("");
});

test('nomes duplicados não podem ser adicionados na lista',()=>{
    render( 
    <RecoilRoot>
        <Formulario/>
    </RecoilRoot>);

    const input = screen.getByPlaceholderText('Insira os nomes dos participantes');
    const button = screen.getByRole('button');

    fireEvent.change(input,{
        target:{
            value:'Jamil'
        }
    });

    fireEvent.click(button);

    fireEvent.change(input,{
        target:{
            value:'Jamil'
        }
    });

    fireEvent.click(button);

    const mensagemErro = screen.getByRole("alert");

    expect(mensagemErro).toBeInTheDocument();
    expect(mensagemErro.textContent).toBe("Nomes duplicados não permitidos!");
    
});

test('mensagem de erro sumindo depois de um tempo',()=>{

    jest.useFakeTimers();
    render( 
    <RecoilRoot>
        <Formulario/>
    </RecoilRoot>);

    const input = screen.getByPlaceholderText('Insira os nomes dos participantes');
    const button = screen.getByRole('button');

    fireEvent.change(input,{
        target:{
            value:'Jamil'
        }
    });

    fireEvent.click(button);

    fireEvent.change(input,{
        target:{
            value:'Jamil'
        }
    });

    fireEvent.click(button);

    let mensagemErro = screen.queryByRole("alert");

    expect(mensagemErro).toBeInTheDocument();
    
   act(()=>{
    jest.runAllTimers();
   });
    
    mensagemErro = screen.queryByRole('alert');
    expect(mensagemErro).not.toBeInTheDocument();
    
});
})