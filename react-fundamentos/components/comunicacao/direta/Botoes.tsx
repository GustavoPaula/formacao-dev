import { useState } from "react";
import Valor from "./Valor";

export default function Botoes() {
  const [nome, setNome] = useState('')

  return (
    <div className="flex flex-col p-4 rounded-md m-2">
      <div className="flex gap-5">
        <button onClick={() => setNome('Maria')} className="bg-purple-400 p-2 rounded-md">Maria</button>
        <button onClick={() => setNome('Pedro')} className="bg-purple-400 p-2 rounded-md">Pedro</button>
        <button onClick={() => setNome('João')} className="bg-purple-400 p-2 rounded-md">João</button>
      </div>
      <Valor texto={nome} />
    </div>
  )
}
