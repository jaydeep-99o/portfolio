"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { EXPERIENCE, PROJECTS } from "@/data/site";

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" width="100%" height="100%" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M7 17 17 7m-9 0h9v9" />
  </svg>
);

const Row = ({ item, index }) => {
  const hasLink = Boolean(item.href);
  const Wrapper = hasLink ? "a" : "div";
  return (
    <li className="pj-row">
      <Wrapper
        className={`pj-link${hasLink ? "" : " pj-link--static"}`}
        {...(hasLink ? { href: item.href, target: "_blank", rel: "noreferrer" } : {})}
      >
        <span className="pj-num">{String(index + 1).padStart(2, "0")}</span>
        {item.image && (
          <img
            src={item.image}
            alt={item.name}
            className="w-20 h-14 sm:w-28 sm:h-18 object-contain shrink-0 bg-white/5 border border-white/10 rounded-xl"
          />
        )}
        <div className="pj-meta">
          <span className="pj-name">{item.name}</span>
          {item.role && <span className="pj-role">{item.role}</span>}
          {item.note && <span className="pj-note">{item.note}</span>}
          {item.highlights && (
            <ul className="pj-points">
              {item.highlights.map((point) => (
                <li key={point} className="pj-note">
                  {point}
                </li>
              ))}
            </ul>
          )}
        </div>
        <span className="pj-kind">{item.kind}</span>
        <span className="pj-arrow">
          {hasLink ? <ArrowIcon /> : <span className="pj-dot">•</span>}
        </span>
      </Wrapper>
    </li>
  );
};

export default function Projects() {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.from(sectionRef.current.querySelectorAll(".pj-row"), {
        opacity: 0,
        y: 60,
        duration: 0.9,
        stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 80%", once: true },
      });
    }, sectionRef.current);
    return () => ctx.revert();
  }, []);

  return (
    <section id="projects-section" ref={sectionRef}>
      <div id="experience" className="pj-head">
        <span className="pj-label">EXPERIENCE</span>
        <h2 className="pj-title">where i&apos;ve shipped</h2>
      </div>
      <ul className="pj-list">
        {EXPERIENCE.map((job, i) => (
          <Row key={job.name} item={job} index={i} />
        ))}
      </ul>

      <div id="work" className="pj-head pj-head--secondary">
        <span className="pj-label">PROJECTS</span>
        <h2 className="pj-title">selected work</h2>
      </div>
      <ul className="pj-list">
        {PROJECTS.map((p, i) => (
          <Row key={p.name} item={p} index={i} />
        ))}
      </ul>
    </section>
  );
}
