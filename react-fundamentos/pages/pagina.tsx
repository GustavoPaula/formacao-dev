import Pagina from "@/components/Pagina"
import "@/app/globals.css"

export default function Page() {
  return (
    <Pagina titulo="Minha aplicação Web" subtitulo="Componente Página na pasta pages" >
      <ul className="list-disc">
        <li>React</li>
        <li>Next</li>
        <li>JS</li>
        <li>TS</li>
      </ul>
    </Pagina >
  )
}