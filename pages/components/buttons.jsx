export const Library = {
  RippleButton: {
    js: `const RippleButton = ({ children, onClick }) => {
      const [coords, setCoords] = useState({ x: -1, y: -1 });
      const [isRippling, setIsRippling] = useState(false);
    
      useEffect(() => {
        if (coords.x !== -1 && coords.y !== -1) {
          setIsRippling(true);
          setTimeout(() => setIsRippling(false), 300);
        } else setIsRippling(false);
      }, [coords]);
    
      useEffect(() => {
        if (!isRippling) setCoords({ x: -1, y: -1 });
      }, [isRippling]);
    
      return (
        <button
          className="ripple-button"
          onClick={(e) => {
            const rect = e.target.getBoundingClientRect();
            setCoords({ x: e.clientX - rect.left, y: e.clientY - rect.top });
            onClick && onClick(e);
          }}
        >
          {isRippling ? (
            <span
              className="ripple"
              style={{
                left: coords.x,
                top: coords.y,
              }}
            />
          ) : (
            ""
          )}
          <span className="content">{children}</span>
        </button>
      );
    };`,
    css: `.ripple-button {
      border-radius: 4px;
      border: none;
      padding: 10px 15px;
      background: #1976d2;
      color: #fff;
      overflow: hidden;
      position: relative;
      cursor: pointer;
    }
    .ripple-button > .ripple {
      width: 20px;
      height: 20px;
      position: absolute;
      background: #63a4ff;
      display: block;
      content: "";
      border-radius: 9999px;
      opacity: 1;
      animation: 0.9s ease 1 forwards ripple-effect;
    }
    @keyframes ripple-effect {
      0% {
        transform: scale(1);
        opacity: 1;
      }
      50% {
        transform: scale(10);
        opacity: 0.375;
      }
      100% {
        transform: scale(35);
        opacity: 0;
      }
    }
    .ripple-button > .content {
      position: relative;
      z-index: 2;
    }`,
  },
};

import { useEffect, useState } from "react";
const RippleButton = ({ children, onClick }) => {
  const [coords, setCoords] = useState({ x: -1, y: -1 });
  const [isRippling, setIsRippling] = useState(false);

  useEffect(() => {
    if (coords.x !== -1 && coords.y !== -1) {
      setIsRippling(true);
      setTimeout(() => setIsRippling(false), 300);
    } else setIsRippling(false);
  }, [coords]);

  useEffect(() => {
    if (!isRippling) setCoords({ x: -1, y: -1 });
  }, [isRippling]);

  return (
    <button
      className="ripple-button"
      onClick={(e) => {
        const rect = e.target.getBoundingClientRect();
        setCoords({ x: e.clientX - rect.left, y: e.clientY - rect.top });
        onClick && onClick(e);
      }}
    >
      {isRippling ? (
        <span
          className="ripple"
          style={{
            left: coords.x,
            top: coords.y,
          }}
        />
      ) : (
        ""
      )}
      <span className="content">{children}</span>
    </button>
  );
};
const ComponentFrame = ({ children, css, js }) => {
  return (
    <div className="flex flex-col p-2 gap-2 bg-gray-800 w-max border border-gray-700">
      <div>{children}</div>
      <div className="btns p-1 gap-3 text-xs flex">
        <div
          onClick={() => {
            navigator.clipboard.writeText(css);
          }}
          className="copy-css hover:underline cursor-pointer text-gray-500 flex gap-1 items-center"
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"
            />
          </svg>
          css
        </div>
        <div
          onClick={() => {
            navigator.clipboard.writeText(js);
          }}
          className="copy-js hover:underline cursor-pointer text-gray-500 flex gap-1 items-center"
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"
            />
          </svg>
          js
        </div>
      </div>
    </div>
  );
};

export default function buttons() {
  return (
    <div className="text-white">
      <div className="text-3xl px-4 font-bold">Buttons</div>
      <ComponentFrame css={Library.RippleButton.css} js={Library.RippleButton.js}>
        <RippleButton>Ripple Button</RippleButton>
      </ComponentFrame>
    </div>
  );
}





