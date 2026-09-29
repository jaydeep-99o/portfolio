import React from "react";
import { ABOUT } from "@/data/site";

export default function SubHeader() {
  return (
    <div className="w-full flex flex-col items-start text-left px-4 md:px-0">
      <div className="w-full text-base md:text-lg lg:text-xl flex flex-col gap-3 leading-relaxed">
        {ABOUT.intro.map((para) => (
          <p key={para}>{para}</p>
        ))}
      </div>
      <div className="about-inline-services w-full mt-8 md:mt-12">
        <div className="about-inline-services__head">
          <span className="about-inline-services__label">CORE EXPERTISE</span>
        </div>
        <div className="about-inline-services__grid">
          {ABOUT.services.map((s) => (
            <article key={s.title} className="about-inline-services__item">
              <h4>{s.title}</h4>
              <p>{s.body}</p>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
