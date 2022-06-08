const buttons = [
  {
    name: "ShadowButton",
    css: `.button-15 {
            background-image: linear-gradient(#42A1EC, #0070C9);
            border: 1px solid #0077CC;
            border-radius: 4px;
            box-sizing: border-box;
            color: #FFFFFF;
            cursor: pointer;
            direction: ltr;
            display: block;
            font-family: "SF Pro Text","SF Pro Icons","AOS Icons","Helvetica Neue",Helvetica,Arial,sans-serif;
            font-size: 17px;
            font-weight: 400;
            letter-spacing: -.022em;
            line-height: 1.47059;
            min-width: 100%;
            overflow: visible;
            padding: 4px 15px;
            text-align: center;
            vertical-align: baseline;
            user-select: none;
            -webkit-user-select: none;
            touch-action: manipulation;
            white-space: nowrap;
          }
          .button-15:disabled {
            cursor: default;
            opacity: .3;
          }
          .button-15:hover {
            background-image: linear-gradient(#51A9EE, #147BCD);
            border-color: #1482D0;
            text-decoration: none;
          }
          .button-15:active {
            background-image: linear-gradient(#3D94D9, #0067B9);
            border-color: #006DBC;
            outline: none;
          }
          .button-15:focus {
            box-shadow: rgba(131, 192, 253, 0.5) 0 0 0 3px;
            outline: none;
          }`,
    html: `<button className="button-15">ShadowButton</button>`,
  },
  {
    name: "GlowOnHoverButton",
    css: `.glow-on-hover {
      width: 100%;
      height: 50px;
      padding: 0 10px;
      border: none;
      outline: none;
      color: #fff;
      background: #111;
      cursor: pointer;
      position: relative;
      z-index: 0;
      border-radius: 10px;
  }
  
  .glow-on-hover:before {
      content: '';
      background: linear-gradient(45deg, #ff0000, #ff7300, #fffb00, #48ff00, #00ffd5, #002bff, #7a00ff, #ff00c8, #ff0000);
      position: absolute;
      top: -2px;
      left:-2px;
      background-size: 400%;
      z-index: -1;
      filter: blur(5px);
      width: calc(100% + 4px);
      height: calc(100% + 4px);
      animation: glowing 20s linear infinite;
      opacity: 0;
      transition: opacity .3s ease-in-out;
      border-radius: 10px;
  }
  
  .glow-on-hover:active {
      color: #000
  }
  
  .glow-on-hover:active:after {
      background: transparent;
  }
  
  .glow-on-hover:hover:before {
      opacity: 1;
  }
  
  .glow-on-hover:after {
      z-index: -1;
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      background: #111;
      left: 0;
      top: 0;
      border-radius: 10px;
  }
  
  @keyframes glowing {
      0% { background-position: 0 0; }
      50% { background-position: 400% 0; }
      100% { background-position: 0 0; }
  }
  `,
    html: `<button className="glow-on-hover" type="button">Button</button>`,
  },
  {
    name: "HoverBorderAnimation",
    css: `.center {
      min-width: 180px;
      height: 60px;
      position: relative;
    }
    .btn {
      width: 180px;
      height: 60px;
      cursor: pointer;
      background: transparent;
      border: 1px solid #91C9FF;
      outline: none;
      transition: 1s ease-in-out;
    }
    
    .center .btn svg {
      position: absolute;
      left: 0;
      top: 0;
      fill: none;
      stroke: #fff;
      stroke-dasharray: 150 480;
      stroke-dashoffset: 150;
      transition: 1s ease-in-out;
    }
    
    .btn:hover {
      transition: 1s ease-in-out;
      background: #4F95DA;
    }
    
    .btn:hover svg {
      stroke-dashoffset: -480;
    }
    
    .btn span {
      color: white;
      font-size: 18px;
      font-weight: 100;
    }`,
    html: `  <div className="container">
    <div className="center">
      <button className="btn">
        <svg style="width:180px" height="60px" viewBox="0 0 180 60" className="border">
          <polyline points="179,1 179,59 1,59 1,1 179,1" className="bg-line" />
          <polyline points="179,1 179,59 1,59 1,1 179,1" className="hl-line" />
        </svg>
        <span>HOVER ME</span>
      </button>
    </div>
  </div>
`,
  },
];

export default buttons;
