import { useState } from "react";
import LeftSideBar from "./LeftSideBar";
import NavBar from "./NavBar";

export default function Layout({ children }) {
  const [OpenLeftSide, setOpenLeftSide] = useState(false);

  return (
    <>
      <div
        className="h-full overflow-hidden text-white bg-slate-900 grid 
        grid-rows-[1fr] 
        md:grid-cols-[minmax(220px,230px)_1fr]
        grid-cols-[1fr]
      "
      >
        <LeftSideBar
          OpenLeftSide={OpenLeftSide}
          setOpenLeftSide={setOpenLeftSide}
        />
        <div className="flex overflow-hidden h-full flex-col">
          <NavBar
            OpenLeftSide={OpenLeftSide}
            setOpenLeftSide={setOpenLeftSide}
          />
          <div className="main overflow-y-scroll">{children}</div>

          <div
            className={`absolute bg-black/40 transition-all duration-100 top-0 h-full md:w-0 w-full ${
              OpenLeftSide ? "left-0" : "-left-full"
            }`}
            onClick={() => setOpenLeftSide(false)}
          />
        </div>
      </div>
    </>
  );
}
