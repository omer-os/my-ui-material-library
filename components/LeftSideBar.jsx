import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

export const ComponentList = ({ name, children, items }) => {
  const [OpenChildren, setOpenChildren] = useState(false);
  const [SelectedComponent, setSelectedComponent] = useState("");
  const router = useRouter();
  return (
    <div className={`flex flex-col`}>
      <div
        className="flex uppercase font-semibold cursor-pointer hover:bg-blue-900/30 py-1 px-2 rounded  justify-between"
        onClick={() => setOpenChildren(!OpenChildren)}
      >
        {name}
        <div
          className={`w-4 fill-blue-600 transition-all duration-300 h-4 ${
            OpenChildren ? "rotate-90" : "-rotate-90"
          }`}
        >
          <svg
            className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium ItemButtonIcon css-1w9df0h"
            focusable="false"
            aria-hidden="true"
            viewBox="0 0 24 24"
            data-testid="KeyboardArrowRightRoundedIcon"
          >
            <path d="M9.29 15.88 13.17 12 9.29 8.12a.9959.9959 0 0 1 0-1.41c.39-.39 1.02-.39 1.41 0l4.59 4.59c.39.39.39 1.02 0 1.41L10.7 17.3c-.39.39-1.02.39-1.41 0-.38-.39-.39-1.03 0-1.42z"></path>
          </svg>
        </div>
      </div>
      {OpenChildren && (
        <div
          className={`list-colapse-animation relative overflow-hidden flex flex-col gap-1`}
        >
          {items.map((component) => {
            return (
              <Link href={`/${component.link}`} key={Math.random()}>
                <div className="pl-4 cursor-pointer py-1 px-3 rounded">
                  <a>{component.name}</a>
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default function LeftSideBar({ OpenLeftSide, setOpenLeftSide }) {
  const router = useRouter();
  const [SelectedItem, setSelectedItem] = useState("");
  const [Data, setData] = useState([]);
  useEffect(() => {
    setSelectedItem(router.pathname);
  }, [router.pathname]);
  useEffect(() => {
    fetch("/components.json")
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);

  return (
    <div
      className={`transition-all duration-300 flex flex-col row-start-1 text-white overflow-y-scroll left-side  md:w-auto sm:w-2/6 w-5/6 fixed md:relative top-0 md:shadow-none shadow-xl md:left-0 bottom-0 z-50 bg-slate-900 ${
        OpenLeftSide ? "left-0" : "-left-full"
      }`}
    >
      <Link href="/">
        <div className="Top py-3 flex items-center h-[3.4em] md:h-[3.9em] sm:px-4 px-2 border-b border-slate-800">
          <div className="logo border-slate-800 pr-2 mr-2 border-r ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="32"
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
          <div className="text-xl font-bold">
            <a className="text-xl font-bold">ui-materials</a>
          </div>
        </div>
      </Link>

      <div className="flex p-4 gap-4 flex-col">
        <div className="box p-1 rounded-xl flex justify-center capitalize font-bold cursor-pointer border border-blue-900 hover:bg-slate-800/40 transition-all duration-200 active:scale-95">
          <p>dashboard</p>
        </div>
      </div>

      <div className="flex text-xs flex-col gap-1 pt-2 px-4 text-white">
        <div className="flex gap-1 flex-col">
          {Data.map((item, index) => {
            return (
              <ComponentList
                items={item.items}
                key={Math.random()}
                name={item["category"]}
              ></ComponentList>
            );
          })}
        </div>
      </div>
    </div>
  );
}
