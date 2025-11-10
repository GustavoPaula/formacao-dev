export default function MenuItem(props: any) {
  return (
    <div className={`
      px-4 py-2
      bg-zinc-900 text-xl w-full rounded-md
    `}>
      {props.texto}
    </div>
  );
}