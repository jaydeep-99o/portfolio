"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import GradualBlur from "./GradualBlur";

// Fixed blur along the bottom edge of the viewport. Hidden at the very top of
// the page (over the hero) and once the footer scrolls into view.
//
// This owns its own ref and effect so it runs after this node hydrates. When
// the page component held the ref, its effect ran before the Suspense
// boundary hydrated, found a null ref, and never hid the blur.
export default function PageBlur() {
  const ref = useRef(null);

  useEffect(() => {
    const blur = ref.current;
    const footer = document.getElementById("main-footer");
    if (!blur || !footer) return;
    const setVisible = (visible) => gsap.to(blur, { autoAlpha: visible ? 1 : 0, duration: 0.3 });
    const updateBlurState = () => {
      const isAtTop = window.scrollY < 20;
      const footerInView = footer.getBoundingClientRect().top < window.innerHeight;
      setVisible(!isAtTop && !footerInView);
    };
    updateBlurState();
    window.addEventListener("scroll", updateBlurState);
    return () => window.removeEventListener("scroll", updateBlurState);
  }, []);

  return (
    <div
      ref={ref}
      style={{
        position: "fixed",
        inset: 0,
        pointerEvents: "none",
        zIndex: 99999,
        opacity: 0,
        visibility: "hidden",
      }}
    >
      <GradualBlur
        position="bottom"
        height="6rem"
        strength={2}
        divCount={6}
        curve="bezier"
        opacity={0.9}
      />
    </div>
  );
}
