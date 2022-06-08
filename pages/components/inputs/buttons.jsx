import Link from "next/link";
import React from "react";
import Layout from "../../../components/Layout";
import { buttons } from "../../../components/library/Files";

export const ButtonFrame = ({ children, javascript, css }) => {
  return (
    <div className="bg-slate-800/30 max-h-[7em]  rounded-xl p-3 border border-slate-700 flex flex-col">
      {children}
      <style>{css}</style>
      <div className="bottom mt-2 flex gap-3">
        <div
          onClick={() => {
            navigator.clipboard.writeText(javascript);
          }}
          className="text-gray-500 underline cursor-pointer hover:text-gray-300"
        >
          Js
        </div>
        <div
          onClick={() => {
            navigator.clipboard.writeText(css);
          }}
          className="text-gray-500 underline cursor-pointer hover:text-gray-300"
        >
          Css
        </div>
      </div>
    </div>
  );
};

export default function Buttons() {
  return (
    <>
      <div className="sm:px-[4em] px-[2em] py-[2em]   flex flex-col">
        <div className="text-2xl font-bold">Buttons</div>
        <div className="text-slate-400">
          Buttons allow users to take actions, and make choices, with a single
          tap.
        </div>
        <div className="text-xl font-bold mt-8 mb-2">
          List Of Availabe Buttons
        </div>
        <ul className="list-disc list-inside">
          <li>
            <a href="#ripple-button">Ripple Button</a>
          </li>
          <li>
            <a href="#outlined">Outlined</a>
          </li>
          <li>
            <a href="#disabled">Disables</a>
          </li>
        </ul>

        <br></br>
        <br></br>
        <br></br>
        <div className="grid gap-2 grid-cols-[repeat(auto-fit,minmax(10em,max-content))] auto-rows-auto">
          {buttons.map((button, index) => {
            return (
              <ButtonFrame
                key={index}
                javascript={button.html}
                css={button.css}
              >
                <div dangerouslySetInnerHTML={{ __html: button.html }} />
              </ButtonFrame>
            );
          })}
        </div>
      </div>
    </>
  );
}
