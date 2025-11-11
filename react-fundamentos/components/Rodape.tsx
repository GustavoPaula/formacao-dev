export default function Rodape(props: any) {
  return (
    <div className={`
        flex text-3xl justify-between items-center
        h-16 rounded-lg p-5
        bg-cyan-600
      `}>
        <h1>{props.esquerda}</h1>
        <h1>{props.direita}</h1>
    </div>
  )
}