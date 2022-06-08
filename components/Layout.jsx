import { useState } from "react";
import LeftSideBar from "./LeftSideBar";
import NavBar from "./NavBar";

export default function Layout({ children }) {
  const [OpenLeftSide, setOpenLeftSide] = useState(false);

  return (
    <>
      <div
        className="h-screen text-white bg-slate-900 grid 
        grid-rows-[auto_1fr] 
        md:grid-cols-[minmax(220px,230px)_1fr]
        grid-cols-[auto_1fr]
      "
      >
        <LeftSideBar
          OpenLeftSide={OpenLeftSide}
          setOpenLeftSide={setOpenLeftSide}
        />
        <NavBar OpenLeftSide={OpenLeftSide} setOpenLeftSide={setOpenLeftSide} />
        <div className="main overflow-y-scroll">{children}</div>
      </div>
    </>
  );
}
