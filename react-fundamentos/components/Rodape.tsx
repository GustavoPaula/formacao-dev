interface RodapeProps {
  esquerda: string
  direita: string
}

export default function Rodape(props: RodapeProps) {
  return (
    <div className={`
        flex justify-between items-center
        h-16 text-base px-10 bg-zinc-900
        border-t border-zinc-800 text-zinc-500
      `}>
        <h1>{props.esquerda}</h1>
        <h1>{props.direita}</h1>
    </div>
  )
}