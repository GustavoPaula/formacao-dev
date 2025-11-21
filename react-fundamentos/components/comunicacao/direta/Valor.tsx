interface BotoesProps {
  texto: string
}

export default function Valor(props: BotoesProps) {
  return (
    <div className="p-4 rounded-md text-8xl font-black">
      {props.texto}
    </div>
  )
}
