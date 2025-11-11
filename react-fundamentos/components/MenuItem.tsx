import Link from "next/link";

interface MenuItemProps {
  url: string
  texto: string
}

export default function MenuItem(props: MenuItemProps) {
  return (
    <Link href={props.url} className={`
      px-4 py-2
      bg-zinc-900 text-xl w-full rounded-md
    `}>
      {props.texto}
    </Link>
  );
}