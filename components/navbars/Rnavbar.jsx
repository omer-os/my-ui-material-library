import React from "react";
import Link from "next/link";

export default function Rnavbar() {
  return (
    <div className="flex bg-slate-800 px-5 py-3 justify-between text-white items-center">
      <div className="left text-xl">omar chatin</div>

      <div className="right flex gap-5">
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
    </div>
  );
}
