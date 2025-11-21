import { useState } from "react"
import Botoes from "./Botoes"

export default function Valor() {
  const [ nome, setNome ] = useState('')

  function alterar(nome: string) {
    setNome(nome)
  }
  return (
    <div>
      <span className="p-4 rounded-md text-8xl font-black">{nome}</span>
      <Botoes alterarNome={alterar} />
    </div>
  )
}
