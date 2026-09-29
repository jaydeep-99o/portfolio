"use client";
import { useRef, useMemo, memo } from "react";
import "./GradualBlur.css";

const DEFAULT_CONFIG = {
  position: "bottom",
  strength: 2,
  height: "6rem",
  divCount: 5,
  exponential: false,
  zIndex: 1000,
  animated: false,
  opacity: 1,
  curve: "linear",
};

const CURVE_FUNCTIONS = {
  linear: (p) => p,
  bezier: (p) => p * p * (3 - 2 * p),
};

function GradualBlur(props) {
  const containerRef = useRef(null);
  const config = useMemo(() => ({ ...DEFAULT_CONFIG, ...props }), [props]);

  const blurDivs = useMemo(() => {
    const divs = [];
    const increment = 100 / config.divCount;
    const curveFunc = CURVE_FUNCTIONS[config.curve] || CURVE_FUNCTIONS.linear;
    for (let i = 1; i <= config.divCount; i++) {
      const progress = curveFunc(i / config.divCount);
      const blurValue = 0.0625 * (progress * config.divCount + 1) * config.strength;
      const p1 = Math.round((increment * i - increment) * 10) / 10;
      const p2 = Math.round(increment * i * 10) / 10;
      const p3 = Math.round((increment * i + increment) * 10) / 10;
      const p4 = Math.round((increment * i + 2 * increment) * 10) / 10;
      let gradient = `transparent ${p1}%, black ${p2}%`;
      if (p3 <= 100) gradient += `, black ${p3}%`;
      if (p4 <= 100) gradient += `, transparent ${p4}%`;
      const direction =
        { top: "to top", bottom: "to bottom", left: "to left", right: "to right" }[
          config.position
        ] || "to bottom";
      divs.push(
        <div
          key={i}
          style={{
            position: "absolute",
            inset: 0,
            maskImage: `linear-gradient(${direction}, ${gradient})`,
            WebkitMaskImage: `linear-gradient(${direction}, ${gradient})`,
            backdropFilter: `blur(${blurValue.toFixed(3)}rem)`,
            WebkitBackdropFilter: `blur(${blurValue.toFixed(3)}rem)`,
            opacity: config.opacity,
          }}
        />
      );
    }
    return divs;
  }, [config]);

  return (
    <div
      ref={containerRef}
      style={{
        position: "absolute",
        pointerEvents: "none",
        height: config.height,
        width: "100%",
        bottom: config.position === "bottom" ? 0 : undefined,
        top: config.position === "top" ? 0 : undefined,
        zIndex: config.zIndex,
      }}
    >
      <div className="gradual-blur-inner">{blurDivs}</div>
    </div>
  );
}

export default memo(GradualBlur);
