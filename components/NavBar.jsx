import React from "react";
import { SearchBtn } from "./LeftSideBar";

export default function NavBar({ OpenLeftSide, setOpenLeftSide }) {
  return (
    <div
      className="flex items-center col-start-2 gap-4 sm:px-5 px-2  sm:py-3 py-2 bg-slate-900 backdrop-blur-xl border border-slate-800
    md:justify-end
    justify-between
    overflow-x-hidden
    "
    >
      <div className="right-side relative md:-right-full md:opacity-0 right-0 opacity-1 transition-all duratin-400 flex gap-2">
        <button
          className="border active:scale-95 transition-all duration-300 border-slate-800 p-1 flex justify-center items-cenetr rounded cursor-ointer hover:bg-slate-700
        scale-30
        "
          onClick={() => setOpenLeftSide(!OpenLeftSide)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 16 16"
            fill="none"
            class="css-1170n61"
          >
            <rect
              x="1"
              y="5"
              width="14"
              height="1.5"
              rx="1"
              fill="#007FFF"
            ></rect>
            <rect
              x="1"
              y="9"
              width="14"
              height="1.5"
              rx="1"
              fill="#007FFF"
            ></rect>
          </svg>
        </button>
        <div className="text-lg sm:block hidden font-bold">Ui-Materials</div>
        <div className="logo flex justify-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 36 32"
            fill="none"
            className="css-1170n61"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M30.343 21.976a1 1 0 00.502-.864l.018-5.787a1 1 0 01.502-.864l3.137-1.802a1 1 0 011.498.867v10.521a1 1 0 01-.502.867l-11.839 6.8a1 1 0 01-.994.001l-9.291-5.314a1 1 0 01-.504-.868v-5.305c0-.006.007-.01.013-.007.005.003.012 0 .012-.007v-.006c0-.004.002-.008.006-.01l7.652-4.396c.007-.004.004-.015-.004-.015a.008.008 0 01-.008-.008l.015-5.201a1 1 0 00-1.5-.87l-5.687 3.277a1 1 0 01-.998 0L6.666 9.7a1 1 0 00-1.499.866v9.4a1 1 0 01-1.496.869l-3.166-1.81a1 1 0 01-.504-.87l.028-16.43A1 1 0 011.527.86l10.845 6.229a1 1 0 00.996 0L24.21.86a1 1 0 011.498.868v16.434a1 1 0 01-.501.867l-5.678 3.27a1 1 0 00.004 1.735l3.132 1.783a1 1 0 00.993-.002l6.685-3.839zM31 7.234a1 1 0 001.514.857l3-1.8A1 1 0 0036 5.434V1.766A1 1 0 0034.486.91l-3 1.8a1 1 0 00-.486.857v3.668z"
              fill="#007FFF"
            ></path>
          </svg>
        </div>
      </div>

      <div className="flex items-center gap-3">
        {" "}
        <button
          type="button"
          className="flex items-center 
          md:w-[20em] 
          sm:w-auto
          overflow-hidden
          w-[3em]
          h-[3em]
          transition-all duration-300
          text-xs leading-6 text-slate-400 rounded-md ring-1 ring-slate-900/10 shadow-sm py-1.5 pl-1.5 sm:pl-2 pr-3 hover:ring-slate-300 bg-slate-800 highlight-white/5 hover:bg-slate-700"
        >
          <svg
            width="24"
            height="24"
            fill="none"
            aria-hidden="true"
            className="mr-3 scale-95 flex-none"
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
        {/* <div className="cursor-pointer hover:text-slate-600 transiton-all  text-sm">
          search
        </div> */}
        <div className="cursor-pointer hover:text-slate-600 transiton-all sm:block hidden  text-sm">
          docs
        </div>
        <div className="cursor-pointer hover:text-slate-600 transiton-all sm:block hidden  text-sm">
          github
        </div>
      </div>
    </div>
  );
}
