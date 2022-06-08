import React from "react";
import { SearchBtn } from "./LeftSideBar";

export default function NavBar({ OpenLeftSide, setOpenLeftSide }) {
  return (
    <div className="flex items-center md:col-start-2 gap-4 sm:px-5 px-2  sm:py-3 py-2 bg-slate-900 backdrop-blur-xl border border-slate-800 md:justify-end justify-between overflow-x-hidden ">
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
            className="css-1170n61"
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
        <div className="text-lg overflow-hidden xs:block hidden sm:font-bold">
          Ui-Materials
        </div>
      </div>

      <div className="flex items-center gap-3">
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

        <div className="cursor-pointer p-2 rounded-xl hover:text-slate-600 transiton-all border border-slate-700 hover:bg-blue-600/10 active:scale-95 fill-blue-500">
          <svg
            focusable="false"
            aria-hidden="true"
            viewBox="0 0 24 24"
            data-testid="GitHubIcon"
            width={20}
            height={20}
          >
            <path d="M12 1.27a11 11 0 00-3.48 21.46c.55.09.73-.28.73-.55v-1.84c-3.03.64-3.67-1.46-3.67-1.46-.55-1.29-1.28-1.65-1.28-1.65-.92-.65.1-.65.1-.65 1.1 0 1.73 1.1 1.73 1.1.92 1.65 2.57 1.2 3.21.92a2 2 0 01.64-1.47c-2.47-.27-5.04-1.19-5.04-5.5 0-1.1.46-2.1 1.2-2.84a3.76 3.76 0 010-2.93s.91-.28 3.11 1.1c1.8-.49 3.7-.49 5.5 0 2.1-1.38 3.02-1.1 3.02-1.1a3.76 3.76 0 010 2.93c.83.74 1.2 1.74 1.2 2.94 0 4.21-2.57 5.13-5.04 5.4.45.37.82.92.82 2.02v3.03c0 .27.1.64.73.55A11 11 0 0012 1.27"></path>
          </svg>
        </div>
        <div className="cursor-pointer p-2 rounded-xl hover:text-slate-600 transiton-all border border-slate-700 hover:bg-blue-600/10 active:scale-95 fill-blue-500">
          <svg
            class="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall css-1k33q06"
            focusable="false"
            aria-hidden="true"
            viewBox="0 0 24 24"
            width={20}
            height={20}
            data-testid="SettingsOutlinedIcon"
          >
            <path d="M19.43 12.98c.04-.32.07-.64.07-.98 0-.34-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.09-.16-.26-.25-.44-.25-.06 0-.12.01-.17.03l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.06-.02-.12-.03-.18-.03-.17 0-.34.09-.43.25l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98 0 .33.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.09.16.26.25.44.25.06 0 .12-.01.17-.03l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.06.02.12.03.18.03.17 0 .34-.09.43-.25l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zm-1.98-1.71c.04.31.05.52.05.73 0 .21-.02.43-.05.73l-.14 1.13.89.7 1.08.84-.7 1.21-1.27-.51-1.04-.42-.9.68c-.43.32-.84.56-1.25.73l-1.06.43-.16 1.13-.2 1.35h-1.4l-.19-1.35-.16-1.13-1.06-.43c-.43-.18-.83-.41-1.23-.71l-.91-.7-1.06.43-1.27.51-.7-1.21 1.08-.84.89-.7-.14-1.13c-.03-.31-.05-.54-.05-.74s.02-.43.05-.73l.14-1.13-.89-.7-1.08-.84.7-1.21 1.27.51 1.04.42.9-.68c.43-.32.84-.56 1.25-.73l1.06-.43.16-1.13.2-1.35h1.39l.19 1.35.16 1.13 1.06.43c.43.18.83.41 1.23.71l.91.7 1.06-.43 1.27-.51.7 1.21-1.07.85-.89.7.14 1.13zM12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"></path>
          </svg>
        </div>
      </div>
    </div>
  );
}
