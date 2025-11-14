import { IconBrandReact } from "@tabler/icons-react";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex px-5 items-center gap-2.5 font-black h-16 bg-purple-700">
      <span><IconBrandReact size={30} stroke={1} /></span>
      <span className="text-2xl">React</span>
    </Link>
  )
}