import Botoes from "@/components/comunicacao/direta/Botoes";
import Pagina from "@/components/Pagina";

export default function Direta() {
  return (
    <Pagina titulo="Página Comunicação direta" subtitulo="Capítulo de Comunicação">
      <div className="flex flex-col gap-5 items-start">
        <Botoes />
      </div>
    </Pagina>
  )
}
