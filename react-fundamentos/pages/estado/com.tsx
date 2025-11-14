import Pagina from "@/components/Pagina";
import { useState } from "react";
import { IconMinus, IconPlus } from "@tabler/icons-react";

export default function PaginaComEstado() {
  const [numero, setNumero] = useState(0)
  const [delta, setDelta] = useState(0)

  function decrementarDelta() {
    setDelta(delta - 1)
  }

  function incrementarDelta() {
    setDelta(delta + 1)
  }
  
  function decrementar() {
    setNumero(numero - delta)
  }

  function incrementar() {
    setNumero(numero + delta)
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
        <div className="flex gap-4 justify-center items-center">
          <button onClick={decrementarDelta} className="bg-blue-400 rounded-full p-4">
            <IconMinus size={40} stroke={1} />
          </button>
          <span>{delta}</span>
          <button onClick={incrementarDelta} className="bg-blue-800 rounded-full p-4">
            <IconPlus size={40} stroke={1} />
          </button>
        </div>
      </div>
    </Pagina>
  )
}