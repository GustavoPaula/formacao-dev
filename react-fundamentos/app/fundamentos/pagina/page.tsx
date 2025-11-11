import Cabecalho from "@/components/Cabecalho";
import Conteudo from "@/components/Conteudo";
import Menu from "@/components/Menu";
import Rodape from "@/components/Rodape";

export default function Page() {
  return (
    <div className={`
      flex flex-col h-screen
      p-5 gap-5
    `}>
      <Cabecalho 
        titulo="Página fundamentos"
        subtitulo="Estou na pasta app"
      />
      <div className={`
        flex flex-1 gap-5
      `}>
        <Menu />
        <Conteudo>
          <ul className="list-disc">
            <li>Gustavo</li>
            <li>Laura</li>
            <li>Killua</li>
            <li>Lili</li>
          </ul>
        </ Conteudo>
      </div>
      <Rodape 
        esquerda="Feito com amor por Formação.DEV" 
        direita={`Desenvolvido em ${new Date().getFullYear()}`}
      />
    </div>
  )
}