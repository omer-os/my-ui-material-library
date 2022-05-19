import LeftSideBar from "./LeftSideBar";
import NavBar from "./NavBar";

export default function Layout({ children }) {
  return (
    <>
      <div className="px-1 h-screen w-screen overflow-hidden grid grid-cols-[230px_1fr] gap-2 grid-rows-[auto_1fr]">
        <LeftSideBar />
        <NavBar />
        <div className="main overflow-y-scroll">{children}</div>
      </div>
    </>
  );
}
