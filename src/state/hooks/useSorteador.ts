import shuffle from "just-shuffle";
import { useSetRecoilState } from "recoil";
import { resultadoDoAmigoSecreto } from "../atom";
import { realizarSorteio } from "../helpers/realizaSorteio";
import { useListaDeParticipantes } from "./useListaDeParticipantes"

export const useSorteador = () => {

    const participantes = useListaDeParticipantes();
    const setResultado = useSetRecoilState(resultadoDoAmigoSecreto);
    return ()=> {

       const resultado = realizarSorteio(participantes);
        setResultado(resultado);
    }
}