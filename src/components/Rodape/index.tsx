import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useListaDeParticipantes } from '../../state/hooks/useListaDeParticipantes'

export default function Rodape() {

    const participantes = useListaDeParticipantes();
    let navigate = useNavigate();

    const handleClick = () => {
        navigate('/sorteio');
    }

  return (
    <footer>
        <button disabled={participantes.length < 3} onClick={handleClick}>
            Iniciar brincadeira
        </button>
    </footer>
  )
}
