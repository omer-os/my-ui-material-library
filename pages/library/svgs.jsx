import { useState } from "react";









export const icons = [
  {
    name: "menu-btn",
    svg: (
      <svg
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        id="menu"
        className="w-8 h-8 text-cool-gray-800 dark:text-cool-gray-200 group-hover:text-purple-600 group-focus:text-purple-600 dark:group-hover:text-purple-50 dark:group-focus:text-purple-50"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 6h16M4 12h16M4 18h16"
        ></path>
      </svg>
    ),
  },
  {
    name: "arrow-left",
    svg: (
      <svg
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        id="arrow-left"
        className="w-8 h-8 text-cool-gray-800 dark:text-cool-gray-200 group-hover:text-purple-600 group-focus:text-purple-600 dark:group-hover:text-purple-50 dark:group-focus:text-purple-50"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M10 19l-7-7m0 0l7-7m-7 7h18"
        ></path>
      </svg>
    ),
  },
  {
    name: "chevron-left",
    svg: (
      <svg
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        id="chevron-left"
        className="w-8 h-8 text-cool-gray-800 dark:text-cool-gray-200 group-hover:text-purple-600 group-focus:text-purple-600 dark:group-hover:text-purple-50 dark:group-focus:text-purple-50"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M15 19l-7-7 7-7"
        ></path>
      </svg>
    ),
  },
  {
    name: "arrow-right",
    svg: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M14 5l7 7m0 0l-7 7m7-7H3"
        ></path>
      </svg>
    ),
  },
  {
    name: "chevron-right",
    svg: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 5l7 7-7 7"
        ></path>
      </svg>
    ),
  },
  {
    name: "arrow-circle-right",
    svg: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
        ></path>
      </svg>
    ),
  },
  {
    name: "arrow-bottom",
    svg: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M19 14l-7 7m0 0l-7-7m7 7V3"
        ></path>
      </svg>
    ),
  },
  {
    name: "arrow-top",
    svg: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M5 10l7-7m0 0l7 7m-7-7v18"
        ></path>
      </svg>
    ),
  },
  {
    name: "back-space",
    svg: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M3 12l6.414 6.414a2 2 0 001.414.586H19a2 2 0 002-2V7a2 2 0 00-2-2h-8.172a2 2 0 00-1.414.586L3 12z"
        ></path>
      </svg>
    ),
  },
  {
    name: "dots-vertical",
    svg: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
        ></path>
      </svg>
    ),
  },
  {
    name: "dots-horizontal",
    svg: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
        ></path>
      </svg>
    ),
  },
  {
    name: "fire",
    svg: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
        ></path>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
        ></path>
      </svg>
    ),
  },
  {
    name: "flag",
    svg: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9"
        ></path>
      </svg>
    ),
  },
  {
    name: "folder",
    svg: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
        ></path>
      </svg>
    ),
  },
  {
    name: "search",
    svg: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        ></path>
      </svg>
    ),
  },
  {
    name: "cross",
    svg: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M6 18L18 6M6 6l12 12"
        ></path>
      </svg>
    ),
  },
  {
    name: "check",
    svg: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M5 13l4 4L19 7"
        ></path>
      </svg>
    ),
  },
  {
    name: "chevron-down",
    svg: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M19 9l-7 7-7-7"
        ></path>
      </svg>
    ),
  },
  {
    name: "chevron-up",
    svg: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M5 19l7-7 7 7"
        ></path>
      </svg>
    ),
  },
  {
    name: "video-camera",
    svg: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
        ></path>
      </svg>
    ),
  },
  {
    name: "video-off",
    svg: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M21 7.205l-9.79 9.646a5.5 5.5 0 01-7.176 0L3 7.205M5.5 10.995A5.5 5.5 0 015 7h.5a.5.5 0 01.5.5V17a.5.5 0 00.5.5H5v-1h.5a.5.5 0 01.5.5V17a1.5 1.5 0 001.5-1.5h.5a.5.5 0 01.5.5v1h.5a.5.5 0 01.5.5v1a.5.5 0 01-.5.5H9v-1a.5.5 0 01.5-.5h.5a.5.5 0 01.5.5v5a.5.5 0 01-.5.5H9a1.5 1.5 0 00-1.5 1.5h-.5a.5.5 0 01-.5-.5v-5a.5.5 0 01.5-.5h.5a.5.5 0 01.5.5v1h.5a.5.5 0 01.5.5v5a.5.5 0 01-.5.5H9v-1a.5.5 0 01.5-.5h.5a.5.5 0 01.5.5v1h5a1.5 1.5 0 001.5-1.5h-.5a.5.5 0 01-.5-.5v-5a.5.5 0 01.5-.5h.5a.5.5 0 01.5.5v5a.5.5 0 01-.5.5H15v-1a.5.5 0 01.5-.5h.5a.5.5 0 01.5.5v1h5a"
        ></path>
      </svg>
    ),
  },
  {
    name: "user",
    svg: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
        ></path>
      </svg>
    ),
  },
  {
    name: "user-plus",
    svg: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"
        ></path>
        <circle cx="8.5" cy="7" r="4"></circle>
        <line x1="20" y1="8" x2="20" y2="14"></line>
        <line x1="23" y1="11" x2="17" y2="11"></line>
      </svg>
    ),
  },
  {
    name: "volume-up",
    svg: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
        ></path>
      </svg>
    ),
  },
];














export default function svgs() {
  const [SearchText, setSearchText] = useState("");
  const [ListOfIds, setListOfIds] = useState([]);

  return (
    <div className="sm:py-[2em] py-[.5em] px-5">
      <div className="flex sm:w-4/5 mx-auto flex-col">
        <div className="w-full mb-5 relative">
          <input
            onChange={(e) => setSearchText(e.target.value)}
            value={SearchText}
            type="text"
            className="bg-slate-900 pl-10 w-full text-white border border-slate-500 px-4 py-2 rounded-xl"
            placeholder="Search for icons"
          />

          <div className="div absolute top-3 left-3">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="white"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>
        </div>
        <div className="grid gap-5 sm:py-5 py-2 h-[70vh] pr-2 overflow-y-scroll  lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 ">
          {icons
            .filter((icon) => {
              return icon.name.toLowerCase().includes(SearchText.toLowerCase());
            })
            .map((icon) => (
              <div
                key={icon.name}
                className="flex min-h-[100px] cursor-pointer active:scale-95 active:bg-slate-700 transition-all ease p-2 border-2 border-slate-800 rounded-xl flex-col items-center justify-center w-full h-full"
              >
                <div
                  className="w-max text-white"
                  onClick={() => {
                    console.log(icon.svg.id);
                  }}
                >
                  {icon.svg}
                </div>
                <div className="text-white text-sm text-center">
                  {icon.name}
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
