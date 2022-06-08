import React from "react";
import Layout from "../components/Layout";

export default function Error() {
  return (
      <div className="flex h-[60vh] gap-2 xs:flex-row flex-col items-center justify-center">
        <div className="text-slate-300 xs:border-r border-slate-700 pr-2 text-3xl">404</div>
        <div className="text-white">
            <div className="text-2xl font-bold">Page Not Found</div>
        </div>
      </div>
  );
}
