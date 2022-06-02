import shuffle from "just-shuffle";

export function realizarSorteio(participantes:string[])
{
    const total = participantes.length;
        const embaralhado = shuffle(participantes);
        const resultado = new Map<string, string>();

        for (let index = 0; index < total; index++) {
            
            const indiceDoAmigo = index === (total-1) ? 0 : index +1;
            resultado.set(embaralhado[index], embaralhado[indiceDoAmigo]);  
        }

        return resultado;
}