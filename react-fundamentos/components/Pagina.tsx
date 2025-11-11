import Cabecalho from "./Cabecalho";
import Conteudo from "./Conteudo";
import Menu from "./Menu";
import Rodape from "./Rodape";

export default function Pagina(props: any) {
  return (
    <div className="flex h-screen p-4 gap-4">
      <Menu />
      <div className="flex flex-col flex-1 gap-5">
        <Cabecalho 
          titulo={props.titulo}
          subtitulo={props.subtitulo}
          className="h-24 bg-linear-to-r from-blue-700 to-zinc-900"
        />
        <Conteudo>
          {props.children}
        </Conteudo>
        <Rodape 
          esquerda="Feito com amor por Formação.DEV" 
          direita={`Desenvolvido em ${new Date().getFullYear()}`}
        />
      </div>
    </div>
  )
}