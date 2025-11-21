interface BotoesProps {
  alterarNome(nome: string): void
}

export default function Botoes(props: BotoesProps) {
  return (
    <div className="flex gap-5 p-4 rounded-md m-2">
      <button onClick={() => props.alterarNome('João')} className="bg-purple-400 p-2 rounded-md">João</button>
      <button onClick={() => props.alterarNome('Pedro')} className="bg-purple-400 p-2 rounded-md">Pedro</button>
      <button onClick={() => props.alterarNome('Maria')} className="bg-purple-400 p-2 rounded-md">Maria</button>
    </div>
  )
}
