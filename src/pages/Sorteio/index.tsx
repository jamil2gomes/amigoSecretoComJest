import React from 'react'
import { useListaDeParticipantes } from '../../state/hooks/useListaDeParticipantes'

export default function Sorteio() {

    const participantes = useListaDeParticipantes();
  return (
    <section>
        <form action="">
            <select name="participanteDaVez" id='participanteDaVez'>
                {
                    participantes.map((participante)=>(
                        <option key={participante}>{participante}</option>
                    ))
                }
            </select>
        </form>
    </section>
  )
}
