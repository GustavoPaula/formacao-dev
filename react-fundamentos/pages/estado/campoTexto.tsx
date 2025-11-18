import Pagina from "@/components/Pagina";
import { useState } from "react";

export default function PaginaCampoTexto() {
  const [valor, setValor] = useState("")

  function alterar() {
    setValor(`${Math.random()}`)
  }

  function alterarValor(e: any) {
    setValor(e.target.value)
  }

  return (
    <Pagina titulo="Página campo de texto" subtitulo="Capítulo de estado">
      <div className="flex flex-col gap-5 items-start">
        <input 
          type="text" 
          onChange={alterarValor}
          className="bg-black px-4 py-2 text-white rounded-md" 
          value={valor} 
        />
        <button 
          className="bg-purple-400 p-2 rounded-md"
          onClick={alterar}
        >Alterar</button>
      </div>
    </Pagina>
  )
}