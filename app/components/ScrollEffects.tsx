"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * Global progressive-enhancement behavior shared by every page: mobile nav
 * toggle, reveal-on-scroll, side dot navigation and the top scroll progress
 * bar. Operates directly on the DOM (querySelector) so it works the same
 * regardless of which page rendered the markup, and no-ops silently on
 * pages that don't have a given element (e.g. project detail pages have no
 * dots-nav or nav-toggle).
 */
export default function ScrollEffects() {
  const pathname = usePathname();

  useEffect(() => {
    const navToggle = document.getElementById("navToggle");
    const navLinks = document.getElementById("navLinks");
    function closeNav() {
      navLinks?.classList.remove("open");
      navToggle?.setAttribute("aria-expanded", "false");
    }
    function toggleNav() {
      const isOpen = navLinks?.classList.toggle("open");
      navToggle?.setAttribute("aria-expanded", isOpen ? "true" : "false");
    }
    navToggle?.addEventListener("click", toggleNav);
    const navLinkAnchors = navLinks ? Array.from(navLinks.querySelectorAll("a")) : [];
    navLinkAnchors.forEach((link) => link.addEventListener("click", closeNav));

    const revealEls = Array.from(document.querySelectorAll(".reveal"));
    let revealObserver: IntersectionObserver | undefined;
    if ("IntersectionObserver" in window) {
      revealObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("visible");
              revealObserver?.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.15 }
      );
      revealEls.forEach((el) => revealObserver?.observe(el));
    } else {
      revealEls.forEach((el) => el.classList.add("visible"));
    }

    const scrollButtons = Array.from(document.querySelectorAll<HTMLElement>(".scroll-arrow, .dot"));
    function handleScrollButtonClick(this: HTMLElement) {
      const target = this.dataset.target ? document.querySelector(this.dataset.target) : null;
      target?.scrollIntoView({ behavior: "smooth" });
    }
    scrollButtons.forEach((btn) => btn.addEventListener("click", handleScrollButtonClick));

    const dots = Array.from(document.querySelectorAll<HTMLElement>(".dot"));
    const sections = Array.from(document.querySelectorAll("main > section"));
    let dotObserver: IntersectionObserver | undefined;
    if ("IntersectionObserver" in window && dots.length) {
      dotObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const id = "#" + entry.target.id;
              dots.forEach((d) => d.classList.toggle("active", d.dataset.target === id));
            }
          });
        },
        { threshold: 0.55 }
      );
      sections.forEach((s) => dotObserver?.observe(s));
    }

    const progressBar = document.getElementById("progressBar");
    function updateProgress() {
      if (!progressBar) return;
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      progressBar.style.width = pct + "%";
    }
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);
    updateProgress();

    return () => {
      navToggle?.removeEventListener("click", toggleNav);
      navLinkAnchors.forEach((link) => link.removeEventListener("click", closeNav));
      revealObserver?.disconnect();
      scrollButtons.forEach((btn) => btn.removeEventListener("click", handleScrollButtonClick));
      dotObserver?.disconnect();
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, [pathname]);

  return null;
}
