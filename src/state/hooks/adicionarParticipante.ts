import { useRecoilValue, useSetRecoilState } from "recoil"
import { erroState, listaParticipantes } from "../atom"


export const useAdicionarParticipante = () => {
    const setLista = useSetRecoilState(listaParticipantes);
    const lista = useRecoilValue(listaParticipantes);
    const setErro = useSetRecoilState(erroState);

    return (nomeParticipante:string) => {
        if(lista.includes(nomeParticipante))
        {
            setErro('Nomes duplicados não permitidos!');
            return;
        }
        return setLista(listaAtual => [...listaAtual, nomeParticipante]);
    }
}