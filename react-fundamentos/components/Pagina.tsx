import Cabecalho from "./Cabecalho";
import Conteudo from "./Conteudo";
import Menu from "./Menu";
import Rodape from "./Rodape";

export default function Pagina(props: any) {
  return (
    <div className={`
      flex flex-col h-screen
      p-5 gap-5
    `}>
      <Cabecalho 
        titulo={props.titulo}
        subtitulo={props.subtitulo}
      />
      <div className={`
        flex flex-1 gap-5
      `}>
        <Menu />
        <Conteudo>
          {props.children}
        </Conteudo>
      </div>
      <Rodape 
        esquerda="Feito com amor por Formação.DEV" 
        direita={`Desenvolvido em ${new Date().getFullYear()}`}
      />
    </div>
  )
}