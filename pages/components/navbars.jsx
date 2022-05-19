import React from "react";
import Mnavbar from "../../components/navbars/Mnavbar";
import Rnavbar from "../../components/navbars/Rnavbar";

export default function index() {
  return (
    <div className="text-white py-5 px-10">
      <div className="text-3xl px-4 font-bold">NavBars</div>

      <div className="flex flex-col gap-5 p-2 bg-gray-900 border border-slate-500">
        <Rnavbar />
        <Mnavbar />
      </div>
    </div>
  );
}
