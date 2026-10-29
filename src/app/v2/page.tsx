"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Lang, V2_CONTENT } from "@/data/v2-content";

// Minimal SVG icons matching Anand Mohanan's Tabler-style clean strokes
function GithubIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="size-5"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="size-5"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <line x1="8" y1="11" x2="8" y2="16" />
      <line x1="8" y1="8" x2="8" y2="8.01" />
      <line x1="12" y1="16" x2="12" y2="11" />
      <path d="M16 16v-3a2 2 0 0 0 -4 0" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="size-5"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
      <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
    </svg>
  );
}

function YoutubeIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="size-5"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <rect x="3" y="5" width="18" height="14" rx="4" />
      <path d="M10 9l5 3l-5 3z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="size-5"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <polyline points="3 7 12 13 21 7" />
    </svg>
  );
}

function SunIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="size-4"
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2" />
      <path d="M12 20v2" />
      <path d="M4.93 4.93l1.41 1.41" />
      <path d="M17.66 17.66l1.41 1.41" />
      <path d="M2 12h2" />
      <path d="M20 12h2" />
      <path d="M6.34 17.66l-1.41 1.41" />
      <path d="M19.07 4.93l-1.41 1.41" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="size-4"
    >
      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
    </svg>
  );
}

export default function V2PortfolioPage() {
  const [lang, setLang] = useState<Lang>("en");
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
    const savedLang = localStorage.getItem("v2_portfolio_lang");
    if (savedLang === "en" || savedLang === "jp") {
      setLang(savedLang);
    }
  }, []);

  const handleLangSwitch = (target: Lang) => {
    setLang(target);
    localStorage.setItem("v2_portfolio_lang", target);
  };

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  const content = V2_CONTENT[lang];

  return (
    <main className="max-w-[680px] mx-auto px-6 pt-11 pb-16 selection:bg-neutral-800 selection:text-white dark:selection:bg-neutral-200 dark:selection:text-black">
      {/* Header */}
      <header className="mb-16 v2-section-fade" style={{ animationDelay: "0.05s" }}>
        {/* Top Controls Bar */}
        <div className="flex items-center justify-between gap-3 mb-6">
          {/* Version Switcher */}
          <div
            className="inline-flex items-center border border-[#ece9e9] dark:border-[#323232] rounded-full p-1 bg-[#fbfefb] dark:bg-black text-xs"
            role="navigation"
            aria-label="Portfolio version switch"
          >
            <Link
              href="/"
              className="px-2.5 py-1 rounded-full text-xs font-medium opacity-60 hover:opacity-100 transition-opacity"
            >
              v1
            </Link>
            <span
              className="px-2.5 py-1 rounded-full text-xs font-semibold bg-[#282728] text-[#fbfefb] dark:bg-[#e6e6e6] dark:text-black cursor-default"
              aria-current="page"
            >
              v2
            </span>
          </div>

          <div className="flex items-center gap-2.5">
            {/* Theme Toggle Button */}
            {mounted && (
              <button
                type="button"
                onClick={toggleTheme}
                className="p-1.5 rounded-full border border-[#ece9e9] dark:border-[#323232] bg-[#fbfefb] dark:bg-black opacity-75 hover:opacity-100 transition-opacity flex items-center justify-center cursor-pointer"
                title={resolvedTheme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
                aria-label={resolvedTheme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
              >
                {resolvedTheme === "dark" ? <SunIcon /> : <MoonIcon />}
              </button>
            )}

            {/* Language Toggle Pill */}
            <div
              className="inline-flex items-center border border-[#ece9e9] dark:border-[#323232] rounded-full p-1 bg-[#fbfefb] dark:bg-black"
              role="group"
              aria-label="Language switcher"
            >
              <button
                type="button"
                onClick={() => handleLangSwitch("en")}
                className={`text-xs tracking-wider px-2.5 py-1 rounded-full cursor-pointer transition-all ${
                  lang === "en"
                    ? "bg-[#282728] text-[#fbfefb] dark:bg-[#e6e6e6] dark:text-black font-semibold opacity-100"
                    : "opacity-60 hover:opacity-100"
                }`}
                aria-pressed={lang === "en"}
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => handleLangSwitch("jp")}
                className={`text-xs tracking-wider px-2.5 py-1 rounded-full cursor-pointer transition-all ${
                  lang === "jp"
                    ? "bg-[#282728] text-[#fbfefb] dark:bg-[#e6e6e6] dark:text-black font-semibold opacity-100"
                    : "opacity-60 hover:opacity-100"
                }`}
                aria-pressed={lang === "jp"}
              >
                JP
              </button>
            </div>
          </div>
        </div>

        {/* Bio Info */}
        <h1 className="text-[2.5rem] font-bold tracking-tight mb-2 leading-tight">
          {content.name}
        </h1>
        <p className="text-[1.125rem] opacity-85 mb-1 leading-snug">
          {content.headline}
        </p>
        <p className="text-base opacity-60 mb-5">{content.location}</p>

        {/* Social Icons matching Anand's Tabler SVG icon set */}
        <div className="flex items-center gap-1 -ml-2 text-inherit">
          <a
            href="https://github.com/vijaymurugann"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg opacity-75 hover:opacity-100 hover:rotate-6 transition duration-150"
            title="Vijay Murugan on GitHub"
            aria-label="GitHub profile"
          >
            <GithubIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/vijay-murugan-sde/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg opacity-75 hover:opacity-100 hover:rotate-6 transition duration-150"
            title="Vijay Murugan on LinkedIn"
            aria-label="LinkedIn profile"
          >
            <LinkedInIcon />
          </a>
          <a
            href="https://x.com/vijaymurugannn"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg opacity-75 hover:opacity-100 hover:rotate-6 transition duration-150"
            title="Vijay Murugan on X"
            aria-label="X Twitter profile"
          >
            <XIcon />
          </a>
          <a
            href="https://www.youtube.com/@VijayAlpha"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg opacity-75 hover:opacity-100 hover:rotate-6 transition duration-150"
            title="Vijay Murugan on YouTube"
            aria-label="YouTube channel"
          >
            <YoutubeIcon />
          </a>
          <a
            href="mailto:mailtovijaymurugan@gmail.com"
            className="p-2 rounded-lg opacity-75 hover:opacity-100 hover:rotate-6 transition duration-150"
            title="Send an email to Vijay Murugan"
            aria-label="Send email"
          >
            <MailIcon />
          </a>
        </div>
      </header>

      {/* Section 1: Skills */}
      <section
        className="mb-16 v2-section-fade"
        style={{ animationDelay: "0.15s" }}
        aria-labelledby="skills-heading"
      >
        <h2
          id="skills-heading"
          className="text-xs font-semibold uppercase tracking-[0.1em] opacity-50 mb-3"
        >
          {content.skillsTitle}
        </h2>
        <div className="grid gap-1 sm:gap-1.5">
          {content.skills.map((category) => (
            <div
              key={category.label}
              className="grid grid-cols-1 sm:grid-cols-[140px_1fr] gap-x-4 gap-y-0.5 py-1 px-2 sm:px-3 -mx-2 sm:-mx-3 rounded-lg transition-all duration-200 hover:bg-neutral-500/10 hover:translate-x-1"
            >
              <h3 className="text-sm font-semibold opacity-70 leading-snug">
                {category.label}
              </h3>
              <p className="text-sm opacity-80 leading-snug">
                {category.value}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 2: Experience */}
      <section
        className="mb-16 v2-section-fade"
        style={{ animationDelay: "0.25s" }}
        aria-labelledby="experience-heading"
      >
        <h2
          id="experience-heading"
          className="text-xs font-semibold uppercase tracking-[0.1em] opacity-50 mb-6"
        >
          {content.expTitle}
        </h2>
        <div className="flex flex-col gap-10">
          {content.jobs.map((job) => (
            <article
              key={job.title}
              className="pb-10 border-b border-[#ece9e9] dark:border-[#323232] last:border-b-0 transition-transform duration-200 hover:-translate-y-0.5"
            >
              <div className="mb-3">
                <h3 className="text-[1.125rem] font-semibold mb-1">
                  {job.title}
                </h3>
                <span className="text-sm opacity-60">{job.meta}</span>
              </div>
              <p className="text-base leading-[1.6] opacity-80">{job.desc}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Section 3: Projects */}
      <section
        className="mb-16 v2-section-fade"
        style={{ animationDelay: "0.35s" }}
        aria-labelledby="projects-heading"
      >
        <h2
          id="projects-heading"
          className="text-xs font-semibold uppercase tracking-[0.1em] opacity-50 mb-6"
        >
          {content.projectsTitle}
        </h2>
        <div className="flex flex-col gap-5">
          {content.projects.map((project) => (
            <div key={project.name} className="flex flex-col gap-1">
              <h3 className="text-base font-semibold">
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="v2-link-underline hover:opacity-90 transition-opacity"
                >
                  {project.name}
                </a>
              </h3>
              <p className="text-sm opacity-70 leading-relaxed">
                {project.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 4: Certifications */}
      <section
        className="mb-16 v2-section-fade"
        style={{ animationDelay: "0.45s" }}
        aria-labelledby="certifications-heading"
      >
        <h2
          id="certifications-heading"
          className="text-xs font-semibold uppercase tracking-[0.1em] opacity-50 mb-6"
        >
          {content.certTitle}
        </h2>
        <ul className="flex flex-col gap-3">
          {content.certifications.map((cert) => (
            <li
              key={cert.text}
              className="group relative pl-5 text-[0.9375rem] opacity-80 transition-all duration-200 hover:pl-6 hover:opacity-100"
            >
              <span className="absolute left-0 opacity-50 transition-transform duration-200 group-hover:translate-x-0.5">
                →
              </span>
              <a
                href={cert.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline underline-offset-4"
              >
                {cert.text}
              </a>
            </li>
          ))}
        </ul>
      </section>

      {/* Section 5: Education */}
      <section
        className="mb-16 v2-section-fade"
        style={{ animationDelay: "0.52s" }}
        aria-labelledby="education-heading"
      >
        <h2
          id="education-heading"
          className="text-xs font-semibold uppercase tracking-[0.1em] opacity-50 mb-6"
        >
          {content.eduTitle}
        </h2>
        <ul className="flex flex-col gap-4">
          {content.education.map((edu) => (
            <li
              key={edu.degree + edu.school}
              className="group relative pl-5 text-[0.9375rem] opacity-80 transition-all duration-200 hover:pl-6 hover:opacity-100"
            >
              <span className="absolute left-0 opacity-50 transition-transform duration-200 group-hover:translate-x-0.5">
                →
              </span>
              <a
                href={edu.href}
                target={edu.href === "#" ? undefined : "_blank"}
                rel={edu.href === "#" ? undefined : "noopener noreferrer"}
                className="hover:underline underline-offset-4"
              >
                <span className="font-medium">{edu.degree}</span> – {edu.school}{" "}
                <span className="opacity-60 text-xs">({edu.period})</span>
              </a>
            </li>
          ))}
        </ul>
      </section>

      {/* Section 6: Hackathons & Honors (Hidden for now) */}
      {/* 
      <section
        className="mb-16 v2-section-fade"
        style={{ animationDelay: "0.58s" }}
        aria-labelledby="hackathons-heading"
      >
        <h2
          id="hackathons-heading"
          className="text-xs font-semibold uppercase tracking-[0.1em] opacity-50 mb-6"
        >
          {content.hackTitle}
        </h2>
        <ul className="flex flex-col gap-4">
          {content.hackathons.map((hack) => (
            <li
              key={hack.title}
              className="group relative pl-5 text-[0.9375rem] opacity-80 transition-all duration-200 hover:pl-6 hover:opacity-100"
            >
              <span className="absolute left-0 opacity-50 transition-transform duration-200 group-hover:translate-x-0.5">
                →
              </span>
              <div>
                <div className="flex flex-wrap items-center gap-x-2">
                  {hack.href ? (
                    <a
                      href={hack.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium hover:underline underline-offset-4"
                    >
                      {hack.title}
                    </a>
                  ) : (
                    <span className="font-medium">{hack.title}</span>
                  )}
                  {hack.award && (
                    <span className="text-xs font-medium px-2 py-0.5 rounded border border-[#ece9e9] dark:border-[#323232] opacity-80">
                      {hack.award}
                    </span>
                  )}
                  <span className="text-xs opacity-60">· {hack.location}</span>
                </div>
                <p className="text-sm opacity-70 mt-1 leading-relaxed">
                  {hack.desc}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </section>
      */}

      {/* Section 6: Connect */}
      <section
        className="mb-16 v2-section-fade"
        style={{ animationDelay: "0.58s" }}
        aria-labelledby="connect-heading"
      >
        <h2
          id="connect-heading"
          className="text-xs font-semibold uppercase tracking-[0.1em] opacity-50 mb-6"
        >
          {content.connectTitle}
        </h2>
        <p className="text-[1.125rem] leading-[1.6] opacity-85">
          <span>{content.connectLead} </span>
          <a
            href="mailto:mailtovijaymurugan@gmail.com"
            className="underline underline-offset-[3px] mx-1 hover:opacity-70 transition-opacity font-medium"
          >
            {content.connectCta}
          </a>
          <span> {content.connectMid} </span>
          <a
            href="https://x.com/vijaymurugannn"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-[3px] mx-1 hover:opacity-70 transition-opacity font-medium"
          >
            {content.connectTail}
          </a>
        </p>
      </section>

      {/* Footer matching Anand Mohanan's footer */}
      <footer className="mt-16 pt-8 border-t border-[#ece9e9] dark:border-[#323232] text-sm opacity-50 flex items-center justify-between">
        <p>{content.footerCopy}</p>
        <div className="flex items-center gap-3 text-xs">
          <Link href="/" className="hover:underline underline-offset-2">
            ← {content.v1Label}
          </Link>
        </div>
      </footer>
    </main>
  );
}
