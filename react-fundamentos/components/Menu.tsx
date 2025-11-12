import MenuItem from "./MenuItem";

export default function Menu() {
  return (
    <div className={`
      flex flex-col justify-start items-center w-52
      text-3xl p-2 gap-2
    `}>
      <MenuItem texto="Pagina #1" url="/fundamentos/pagina" />
      <MenuItem texto="Pagina #2" url="/pagina" />
    </div>
  );
}