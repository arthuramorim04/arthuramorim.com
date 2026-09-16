"use client";

import { useEffect, useRef, useState } from "react";

export interface CarouselSlide {
  src: string;
  alt: string;
  caption: string;
}

export default function Carousel({ slides }: { slides: CarouselSlide[] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const slideRefs = useRef<Array<HTMLDivElement | null>>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  function currentIndex(): number {
    const track = trackRef.current;
    if (!track) return 0;
    const trackRect = track.getBoundingClientRect();
    const center = trackRect.left + trackRect.width / 2;
    let closest = 0;
    let closestDist = Infinity;
    slideRefs.current.forEach((slide, i) => {
      if (!slide) return;
      const r = slide.getBoundingClientRect();
      const dist = Math.abs(r.left + r.width / 2 - center);
      if (dist < closestDist) {
        closestDist = dist;
        closest = i;
      }
    });
    return closest;
  }

  function goTo(index: number) {
    const clamped = Math.max(0, Math.min(slides.length - 1, index));
    slideRefs.current[clamped]?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  }

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let ticking = false;
    function onScroll() {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        setActiveIndex(currentIndex());
        ticking = false;
      });
    }
    track.addEventListener("scroll", onScroll, { passive: true });
    return () => track.removeEventListener("scroll", onScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slides.length]);

  function handleKeyDown(e: React.KeyboardEvent<HTMLDivElement>) {
    if (e.key === "ArrowRight") {
      goTo(currentIndex() + 1);
      e.preventDefault();
    }
    if (e.key === "ArrowLeft") {
      goTo(currentIndex() - 1);
      e.preventDefault();
    }
  }

  return (
    <div className="carousel">
      <div className="carousel-track" ref={trackRef} tabIndex={0} onKeyDown={handleKeyDown}>
        {slides.map((slide, i) => (
          <div
            className="carousel-slide"
            key={slide.src}
            ref={(el) => {
              slideRefs.current[i] = el;
            }}
          >
            <div className="carousel-media">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={slide.src} alt={slide.alt} loading={i === 0 ? "eager" : "lazy"} />
            </div>
            <p className="carousel-caption">{slide.caption}</p>
          </div>
        ))}
      </div>
      <button className="carousel-btn carousel-prev" aria-label="Imagem anterior" onClick={() => goTo(currentIndex() - 1)}>
        ‹
      </button>
      <button className="carousel-btn carousel-next" aria-label="Próxima imagem" onClick={() => goTo(currentIndex() + 1)}>
        ›
      </button>
      <div className="carousel-dots">
        {slides.map((slide, i) => (
          <button
            key={slide.src}
            className={"carousel-dot" + (i === activeIndex ? " active" : "")}
            aria-label={`Ir para imagem ${i + 1}`}
            onClick={() => goTo(i)}
          />
        ))}
      </div>
    </div>
  );
}
