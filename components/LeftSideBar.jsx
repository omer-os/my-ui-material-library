import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
export const SearchBtn = () => {
  return (
    <button
      type="button"
      className="hidden w-full lg:flex items-center text-sm leading-6 text-slate-400 rounded-md ring-1 ring-slate-900/10 shadow-sm py-1.5 pl-2 pr-3 hover:ring-slate-300 dark:bg-slate-800 dark:highlight-white/5 dark:hover:bg-slate-700"
    >
      <svg
        width="24"
        height="24"
        fill="none"
        aria-hidden="true"
        className="mr-3 flex-none"
      >
        <path
          d="m19 19-3.5-3.5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <circle
          cx="11"
          cy="11"
          r="6"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></circle>
      </svg>
      Quick search...
      <span className="ml-auto pl-3 flex-none text-xs font-semibold">Ctrl K</span>
    </button>
  );
};
export const ListItem = ({ children, link }) => {
  return (
    <Link href={link}>
      <a
        className={`px-2 hover:bg-gray-700 cursor-pointer active:scale-95 py-1 text-sm rounded`}
      >
        {children}
      </a>
    </Link>
  );
};

export default function LeftSideBar() {
  const router = useRouter();
  const [SelectedItem, setSelectedItem] = useState("");
  useEffect(() => {
    setSelectedItem(router.pathname);
  }, [router.pathname]);

  return (
    <div className="grid grid-cols-1 text-white grid-rows-[auto_auto_1fr] left-side row-span-2

    ">
      <div className="logo sm:block hidden text-xl py-2 px-4 font-bold">OmarChatin</div>
      <div className="search-bar py-3 px-4">
        <SearchBtn />
      </div>

      <div className="flex flex-col gap-2 pt-2 px-4 text-white overflow-y-scroll">
        <div className="text-sm text-gray-400 capitalize">inputs</div>
        <ListItem link="/library/buttons">buttons</ListItem>
        <div className="text-sm text-gray-400 capitalize">components</div>
        <ListItem link="/library/navbars">navbars</ListItem>
        <div className="text-sm text-gray-400 capitalize">svgs</div>
        <ListItem link="/library/svgs">svgs</ListItem>
      </div>
    </div>
  );
}
