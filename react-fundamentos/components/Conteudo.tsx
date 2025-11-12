interface ConteudoProps {
  children: any
}

export default function Conteudo(props: ConteudoProps) {
  return (
    <div className={`
      flex flex-col items-start flex-1 pl-8 p-4
      bg-zinc-900 text-3xl
    `}>
      {props.children}
    </div>
  )
}