import React, { useRef, useState } from "react";
import { a, useSpring } from "@react-spring/web";
import Menu from "./Menu";

const MenuButton = () => {
  const [isOpen, open] = useState(false);
  const offset = 10;
  const [dots, dotsApi] = useSpring(() => ({ from: { transform: `rotate(0deg)` } }));
  const [menu, menuApi] = useSpring(() => ({ from: { y: offset, opacity: 1 } }));
  const [close, closeApi] = useSpring(() => ({ from: { y: offset, opacity: 0 } }));

  const handleClick = () => {
    menuApi.stop();
    closeApi.stop();
    menuApi.start({ y: !isOpen ? -offset : offset, opacity: !isOpen ? 0 : 1 });
    closeApi.start({ y: !isOpen ? -offset : offset, opacity: !isOpen ? 1 : 0 });
  };

  const closeMenu = () => {
    if (!isOpen) return;
    open(false);
    dotsApi.start({ transform: `rotate(0deg)` });
    handleClick();
  };

  const handleWindowClick = (event) => {
    if (ref.current && !ref.current.contains(event.target)) closeMenu();
  };

  const ref = useRef();

  return (
    <>
      <Menu open={isOpen} onOutsideClick={handleWindowClick} onClose={closeMenu} />
      <div
        className={`nav_btn_lg py-6 flex items-center justify-center cursor-pointer transition-colors ${
          isOpen ? "bg-bg-alt" : "bg-brgray hover:bg-bg-alt"
        }`}
        ref={ref}
        onMouseEnter={() => !isOpen && dotsApi.start({ transform: `rotate(90deg)` })}
        onMouseLeave={() => !isOpen && dotsApi.start({ transform: `rotate(0deg)` })}
        onClick={() => {
          open(!isOpen);
          handleClick();
        }}
      >
        <div className="flex flex-col h-6 items-center justify-center">
          <a.div style={menu}>MENU&nbsp;&nbsp;</a.div>
          <a.div style={close}>CLOSE&nbsp;&nbsp;</a.div>
        </div>
        <a.div style={dots}>•&nbsp;•</a.div>
      </div>
    </>
  );
};

export default MenuButton;
