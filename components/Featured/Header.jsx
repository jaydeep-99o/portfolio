import { a, useSpring } from "@react-spring/web";
import { Trail } from "./TrailText";
import React, { useEffect, useState } from "react";
import { ABOUT } from "@/data/site";

export default function Header() {
  const [open, set] = useState(false);
  useEffect(() => {
    set(true);
  }, []);
  const [horizontal, api] = useSpring(() => ({ from: { transform: "translateX(0%)" } }));
  const [first, second] = ABOUT.heading;

  return (
    <div
      className="w-full z-10 relative px-4 md:px-0 md:pl-6 font-semibold text-5xl sm:text-6xl md:text-[9rem] text-center md:text-left leading-[0.95] md:leading-none"
      style={{ letterSpacing: "-0.07em" }}
    >
      <Trail
        callback={(isOpen) =>
          api.start({ transform: `translateX(${isOpen ? "20%" : "0%"})` })
        }
      >
        <a.div
          className="flex justify-center md:justify-start flex-wrap md:flex-nowrap"
          style={horizontal}
        >
          {first.map((word) => (
            <div key={word}>{word}&nbsp;</div>
          ))}
        </a.div>
        <div className="flex justify-center md:justify-start flex-wrap md:flex-nowrap">
          {second.map((word) => (
            <div key={word}>{word}&nbsp;</div>
          ))}
        </div>
      </Trail>
    </div>
  );
}
