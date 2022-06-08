import LeftSideBar from "./LeftSideBar";
import NavBar from "./NavBar";

export default function Layout({ children }) {
  return (
    <>
      <div
        className="h-screen bg-slate-900 grid 
      grid-cols-[minmax(220px,230px)_1fr]
      grid-rows-[auto_1fr] text-white
      "
      >
        <LeftSideBar />
        <NavBar />
        <div className="main overflow-y-scroll">{children}</div>
      </div>
    </>
  );
}
