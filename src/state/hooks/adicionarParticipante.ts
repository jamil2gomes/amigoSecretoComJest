import { useSetRecoilState } from "recoil"
import { listaParticipantes } from "../atom"


export const useAdicionarParticipante = () => {
    const setLista = useSetRecoilState(listaParticipantes);

    return (nomeParticipante:string) => {
        return setLista(listaAtual => [...listaAtual, nomeParticipante]);
    }
}