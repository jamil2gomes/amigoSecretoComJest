import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useListaDeParticipantes } from '../../state/hooks/useListaDeParticipantes'
import './estilo.css';


export default function Rodape() {

    const participantes = useListaDeParticipantes();
    let navigate = useNavigate();

    const handleClick = () => {
        navigate('/sorteio');
    }

  return (
    <footer className='rodape-configuracoes'>
        <button className='botao' disabled={participantes.length < 3} onClick={handleClick}>
            Iniciar brincadeira
        </button>
        <img src="/imagens/sacolas.png" alt="Sacolas de compras" />
    </footer>
  )
}
