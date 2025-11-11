export default function Conteudo(props: any) {
  return (
    <div className={`
      flex flex-col items-start flex-1 pl-8 p-4
      bg-emerald-500 text-3xl rounded-lg
    `}>
      {props.children}
    </div>
  )
}