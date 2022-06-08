import React from "react";
import { SearchBtn } from "./LeftSideBar";

export default function NavBar() {
  return (
    <div className="flex items-center col-start-2 gap-4 px-5 justify-end py-3 bg-slate-900 backdrop-blur-xl border border-slate-800">
      <button
        type="button"
        className="lg:flex items-center w-2/6 text-sm leading-6 text-slate-400 rounded-md ring-1 ring-slate-900/10 shadow-sm py-1.5 pl-2 pr-3 hover:ring-slate-300 dark:bg-slate-800 dark:highlight-white/5 dark:hover:bg-slate-700"
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
        <span className="ml-auto pl-3 flex-none text-xs font-semibold">
          Ctrl K
        </span>
      </button>
      <div className="cursor-pointer hover:text-slate-600 transiton-all  text-sm">
        search
      </div>
      <div className="cursor-pointer hover:text-slate-600 transiton-all  text-sm">
        docs
      </div>
      <div className="cursor-pointer hover:text-slate-600 transiton-all  text-sm">
        github
      </div>
    </div>
  );
}
