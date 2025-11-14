import Pagina from "@/components/Pagina";
import "../../app/globals.css"
import { useState } from "react";
import { IconMinus, IconPlus } from "@tabler/icons-react";

export default function PaginaComEstado() {
  const [numero, setNumero] = useState(0)

  function incrementar() {
    setNumero(numero + 1)
  }

  function decrementar() {
    setNumero(numero - 1)
  }

  return (
    <Pagina titulo="Com estado" subtitulo="Capítulo Estado">
      <div className="flex flex-col w-full h-full justify-center items-center gap-5">
        <span className="font-black text-9xl">{numero}</span>
        <div className="flex gap-5">
          <button onClick={decrementar} className="bg-purple-400 p-4 rounded-full">
            <IconMinus size={80} stroke={1} />
          </button>
          <button onClick={incrementar} className="bg-purple-800 p-4 rounded-full">
            <IconPlus size={80} stroke={1} />
          </button>
        </div>
      </div>
    </Pagina>
  )
}