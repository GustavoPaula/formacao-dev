import { Icon360View, IconCode, IconFileCheck, IconHome, IconSitemap } from "@tabler/icons-react";
import MenuItem from "./MenuItem";

export default function Menu() {
  return (
    <div className={`
      flex flex-col justify-start w-72
      text-3xl p-2 gap-2
    `}>
      <span className="text-sm text-zinc-500 pl-3 pt-4">Fundamentos</span>
      <MenuItem icone={<IconFileCheck />} texto="Pagina #1" url="/fundamentos/pagina" />
      <MenuItem icone={<IconSitemap />} texto="Pagina #2" url="/pagina" />

      <span className="text-sm text-zinc-500 pl-3 pt-4">Estado</span>
      <MenuItem icone={<IconCode />} texto="Componente sem estado" url="/estado/sem" />
    </div>
  );
}