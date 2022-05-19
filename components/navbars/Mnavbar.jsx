import Link from "next/link";
import { useState } from "react"; // import state

export default function Mnavbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex bg-slate-800 px-5 py-3 justify-between text-white items-center">
      <div className="left text-xl">omar chatin</div>

      <div className="middle flex gap-5">
        <Link href="/">
          <a className="text-white">Home</a>
        </Link>
        <Link href="/docs">
          <a className="text-white">docs</a>
        </Link>
        <Link href="/comtact">
          <a className="text-white">contact</a>
        </Link>
      </div>

      <div className="right">
        <div className="flex flex-col gap-[.3em] cursor-pointer hover:scalte-95" onClick={() => setIsOpen(!isOpen)}>
          <div className="w-8 h-[.2em] bg-white rounded-full"></div>
          <div className="w-8 h-[.2em] bg-white rounded-full"></div>
          <div className="w-8 h-[.2em] bg-white rounded-full"></div>
        </div>
      </div>
    </div>
  );
}
