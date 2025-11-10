import Cabecalho from "@/components/Cabecalho";
import "../app/globals.css"
import Conteudo from "@/components/Conteudo";
import Rodape from "@/components/Rodape"
import Menu from "@/components/Menu";
 
export default function Pagina() {
  const ano = new Date().getFullYear()
  return (
    <div className={`
      flex flex-col h-screen
      p-5 gap-5
    `}>
      <Cabecalho 
        titulo="Minha página"
        subtitulo="Estou na pasta pages"
      />
      <div className={`
          flex flex-1 gap-5
        `}>
        <Menu />
        <Conteudo />
      </div>
      <Rodape 
        esquerda="Feito com amor por Formação.DEV" 
        direita={`Desenvolvido em ${ano}`}
      />
    </div>
  )
}