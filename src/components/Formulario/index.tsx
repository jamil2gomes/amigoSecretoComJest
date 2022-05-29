import { useRef, useState } from "react";
import { useAdicionarParticipante } from "../../state/hooks/adicionarParticipante";


const Formulario = () => {

    const[nome, setNome] = useState("");
    const refInput = useRef<HTMLInputElement>(null);

    const adicionarParticipante = useAdicionarParticipante();
    const handleSubmit = (e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        adicionarParticipante(nome);
        setNome('');
        refInput.current?.focus();
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
            ref={refInput}
            type='text' 
            placeholder="Insira os nomes dos participantes"
            value={nome}
            onChange={e=>setNome(e.target.value)}
            />
            <button disabled={!nome}>Adicionar</button>
        </form>
    )
}

export default Formulario;