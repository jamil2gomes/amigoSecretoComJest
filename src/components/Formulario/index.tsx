import { useRef, useState } from "react";
import { useAdicionarParticipante } from "../../state/hooks/adicionarParticipante";
import { useMensagemErro } from "../../state/hooks/useMensagemErro";
import './estilo.css';

const Formulario = () => {

    const[nome, setNome] = useState("");
    const refInput = useRef<HTMLInputElement>(null);
    const mensagemErro  = useMensagemErro();
    const adicionarParticipante = useAdicionarParticipante();

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        adicionarParticipante(nome);
        setNome('');
        refInput.current?.focus();
    }

    return (
       <>
        <div className="grupo-input-btn">
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
        </div>
        {mensagemErro && <p className="alerta erro" role={'alert'}>{mensagemErro}</p>}
       </>
    )
}

export default Formulario;