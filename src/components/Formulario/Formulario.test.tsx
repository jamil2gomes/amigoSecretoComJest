import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react'
import Formulario from '.';
import { RecoilRoot } from 'recoil';

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