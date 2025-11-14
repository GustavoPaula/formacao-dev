import Pagina from "@/components/Pagina";
import "../../app/globals.css"
import { useState } from "react";

export default function PaginaComEstado() {
  const [numero, setNumero] = useState(0)

  function incrementar() {
    setNumero(numero +1)
  }

  return (
    <Pagina titulo="Com estado" subtitulo="Capítulo Estado">
      <div className="flex flex-col gap-2">
        <div>
          <span>Valor: </span>
          <span>{numero}</span>
        </div>
        <button onClick={incrementar} className="bg-blue-500 p-2">
          Incrementar
        </button>
      </div>
    </Pagina>
  )
}