"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PROFILE, CONTACT } from "@/data/site";

const ArrowIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M7 17 17 7m-10 0h10v10" />
  </svg>
);

export default function Contact() {
  const sectionRef = useRef(null);
  const eyebrowRef = useRef(null);
  const headlineRef = useRef(null);
  const emailRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      const eyebrowChars = eyebrowRef.current?.querySelectorAll(".ct-char") ?? [];
      const headlineChars = headlineRef.current?.querySelectorAll(".ct-char") ?? [];
      gsap.from(eyebrowChars, {
        opacity: 0,
        y: 40,
        duration: 1,
        stagger: 0.05,
        ease: "power3.out",
        scrollTrigger: {
          trigger: eyebrowRef.current,
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
      });
      gsap.from(headlineChars, {
        opacity: 0,
        y: 200,
        duration: 1.4,
        stagger: 0.05,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headlineRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });
      gsap.from([emailRef.current, ctaRef.current], {
        autoAlpha: 0,
        y: 50,
        duration: 1,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: emailRef.current,
          start: "top 95%",
          toggleActions: "play none none reverse",
        },
      });
    }, sectionRef.current);
    return () => ctx.revert();
  }, []);

  const splitChars = (text) =>
    text.split("").map((char, i) => (
      <span key={i} className="ct-char" style={{ display: "inline-block" }}>
        {char === " " ? " " : char}
      </span>
    ));

  return (
    <section id="contact-section" ref={sectionRef}>
      <div id="ct-eyebrow" ref={eyebrowRef}>
        {splitChars(CONTACT.eyebrow)}
      </div>
      <h2 id="ct-headline" ref={headlineRef}>
        {splitChars(CONTACT.headline)}
      </h2>
      <a id="ct-email" href={`mailto:${PROFILE.email}`} ref={emailRef}>
        {PROFILE.email}
      </a>
      <div id="ct-actions" ref={ctaRef}>
        <a id="ct-btn" href={PROFILE.linkedin} target="_blank" rel="noreferrer">
          <span>CONNECT ON LINKEDIN</span>
          <ArrowIcon />
        </a>
        <a id="ct-btn-secondary" href={PROFILE.resume} target="_blank" rel="noreferrer" download>
          <span>DOWNLOAD CV</span>
          <ArrowIcon />
        </a>
      </div>
    </section>
  );
}
