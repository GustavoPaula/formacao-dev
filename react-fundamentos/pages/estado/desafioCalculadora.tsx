import Pagina from "@/components/Pagina";
import { useState } from "react";

export default function DesafioCalculadora() {
  const [valorPrimeiroInput, setValorPrimeiroInput] = useState(0)
  const [valorSegundoInput, setValorSegundoInput] = useState(0)

  const alterarPrimeiroInput = (e: any) => {
    setValorPrimeiroInput(parseInt(e.target.value))
  }

  const alterarSegundoInput = (e: any) => {
    setValorSegundoInput(parseInt(e.target.value))
  }

  return (
    <Pagina titulo="Desafio Calculadora" subtitulo="Capítulo de estado">
      <div className="flex gap-5">
        <input className="bg-black px-4 py-2 text-white rounded-md" type="number" onChange={alterarPrimeiroInput} />
        <input className="bg-black px-4 py-2 text-white rounded-md" type="number" onChange={alterarSegundoInput} />
      </div>
      <div className="flex flex-col py-4 gap-4">
        <span>{valorPrimeiroInput} + {valorSegundoInput} = {valorPrimeiroInput + valorSegundoInput} </span>
        <span>{valorPrimeiroInput} - {valorSegundoInput} = {valorPrimeiroInput - valorSegundoInput} </span>
        <span>{valorPrimeiroInput} * {valorSegundoInput} = {valorPrimeiroInput * valorSegundoInput} </span>
        <span>{valorPrimeiroInput} / {valorSegundoInput} = {valorPrimeiroInput / valorSegundoInput} </span>
      </div>
    </Pagina>
  )
}