import Valor from "@/components/comunicacao/indireta/Valor";
import Pagina from "@/components/Pagina";

export default function Indireta() {
  return (
    <Pagina titulo="Página Comunicação direta" subtitulo="Capítulo de Comunicação">
      <div className="flex flex-col gap-5 items-start">
        <Valor />     
      </div>
    </Pagina>
  )
}
