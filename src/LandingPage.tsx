import "./landing.css";
import { useState, useEffect } from "react";
import {
  landingTranslations,
  type Language,
  type IconName,
} from "./i18n/landing";

export default function LandingPage() {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem("landing-language");

    if (saved === "cs" || saved === "en") {
      return saved;
    }

    const browserLang = navigator.language.toLowerCase();

    if (browserLang.startsWith("cs")) return "cs";

    return "en";
  });

  useEffect(() => {
    localStorage.setItem("landing-language", language);
  }, [language]);

  const t = landingTranslations[language];

  const [mobileIndex, setMobileIndex] = useState(0);
  const [webIndex, setWebIndex] = useState(0);

  const WEB_VISIBLE = 1;
  const [mobileVisible, setMobileVisible] = useState(3);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 980px)");

    const apply = () => setMobileVisible(mq.matches ? 1 : 3);
    apply();

    // Safari fallback: addListener/removeListener
    if (mq.addEventListener) {
      mq.addEventListener("change", apply);
      return () => mq.removeEventListener("change", apply);
    } else {
      mq.addListener(apply);
      return () => mq.removeListener(apply);
    }
  }, []);

  const mobileMaxIndex = Math.max(0, t.mobileScreens.length - mobileVisible);

  const webMaxIndex = Math.max(0, t.webScreens.length - WEB_VISIBLE);

  const mobileCanPrev = mobileIndex > 0;
  const mobileCanNext = mobileIndex < mobileMaxIndex;

  const webCanPrev = webIndex > 0;
  const webCanNext = webIndex < webMaxIndex;

  const mobilePrev = () => setMobileIndex((i) => Math.max(0, i - 1));
  const mobileNext = () =>
    setMobileIndex((i) => Math.min(mobileMaxIndex, i + 1));

  const webPrev = () => setWebIndex((i) => Math.max(0, i - 1));
  const webNext = () => setWebIndex((i) => Math.min(webMaxIndex, i + 1));

  return (
    <div className="lp">
      <div className="lp-bg" aria-hidden="true" />

      {/* NAV */}
      <header className="lp-nav">
        <div className="lp-nav__inner">
          <a className="lp-brand" href="#top" aria-label="StressFreeChef">
            <span className="lp-brand__text">
              Stress Free<span className="lp-accent"> Chef</span>
            </span>
          </a>

          <nav className="lp-nav__links" aria-label="Primary">
            {t.nav.map((it) => (
              <a key={it.href} href={it.href}>
                {it.label}
              </a>
            ))}
          </nav>

          <div className="lp-nav__cta">
            <a
              className="btn btn--ghost"
              href="https://www.stressfreechef.com/"
            >
              {t.webButton}
            </a>
            <a
              className="btn btn--primary"
              style={{ textAlign: "center" }}
              href="https://github.com/ArthurNovember/stressfreechef/releases/tag/v1.0.0"
              target="_blank"
            >
              {t.mobileButton}
            </a>
            <a
              className="btn btn--github btn--icon"
              href="https://github.com/ArthurNovember/stressfreechef"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub repository"
              title="GitHub repository"
            >
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                focusable="false"
                className="githubIcon"
              >
                <path
                  fill="currentColor"
                  d="M12 2C6.48 2 2 6.58 2 12.26c0 4.54 2.87 8.39 6.84 9.75.5.1.68-.22.68-.48 0-.24-.01-.88-.01-1.73-2.78.62-3.37-1.38-3.37-1.38-.45-1.18-1.11-1.49-1.11-1.49-.9-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.89 1.57 2.34 1.12 2.91.85.09-.67.35-1.12.63-1.38-2.22-.26-4.55-1.14-4.55-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05A9.3 9.3 0 0 1 12 7.72c.85 0 1.7.12 2.5.35 1.9-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.48-.01 2.82 0 .27.18.59.69.48A10.05 10.05 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z"
                />
              </svg>
            </a>
          </div>
          <div className="langSwitch" aria-label="Language switch">
            <button
              type="button"
              className={`langSwitch__btn ${language === "cs" ? "langSwitch__btn--active" : ""}`}
              onClick={() => setLanguage("cs")}
            >
              CZ
            </button>

            <button
              type="button"
              className={`langSwitch__btn ${language === "en" ? "langSwitch__btn--active" : ""}`}
              onClick={() => setLanguage("en")}
            >
              EN
            </button>
          </div>
        </div>
      </header>

      {/* MAIN */}
      <main className="lp-main" id="top">
        <section className="hero">
          <div className="hero__card">
            <div className="hero__grid">
              <div className="hero__copy">
                <h1
                  className={
                    language === "cs" ? "hero__title_cz" : "hero__title_en"
                  }
                >
                  {t.heroTitle.before}
                  <span className="hero__titleAccent">
                    {t.heroTitle.accent}
                  </span>
                  {t.heroTitle.after}
                </h1>

                <p className="hero__sub">{t.heroSub}</p>
              </div>

              <div className="hero__visual">
                <div className="mock">
                  <div className="mock__phone">
                    <img
                      src={
                        language === "cs"
                          ? "/images/hero-cs.png"
                          : "/images/hero-en.png"
                      }
                      alt="StressFreeChef app preview"
                      onError={(e) => {
                        e.currentTarget.src =
                          "https://i.imgur.com/p8wK354.jpeg";
                      }}
                    />
                  </div>

                  <div className="float float--tl">
                    <div className="float__title">
                      <Icon name="mic" />
                    </div>
                    <div className="float__text">{t.heroVoiceText}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section className="section" id="features">
          <div className="section__head">
            <div>
              <h2>{t.featuresTitle}</h2>
            </div>
          </div>

          <div className="grid">
            {t.features.map((f) => (
              <div className="card" key={f.title}>
                <div className="card__top">
                  <div className="iconWrap" aria-hidden="true">
                    <Icon name={f.icon} />
                  </div>
                </div>
                <h3 className="card__title">{f.title}</h3>
                <p className="card__desc">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section" id="screens">
          <div className="section__head">
            <div>
              <h2>{t.screensTitle}</h2>
            </div>
          </div>

          {/* MOBILE */}
          <div className="screensBlock">
            <div className="screensBlock__head">
              <h3 className="screensBlock__title">{t.mobileAppTitle}</h3>
            </div>

            <div className="screensCarousel">
              <button
                className="screensArrow screensArrow--left"
                type="button"
                onClick={mobilePrev}
                disabled={!mobileCanPrev}
                aria-label={t.prevMobileAria}
              >
                ‹
              </button>

              <div className="screensViewport">
                <div
                  className="screensTrack"
                  style={{
                    transform: `translateX(-${
                      (mobileIndex * 100) / mobileVisible
                    }%)`,
                  }}
                >
                  {t.mobileScreens.map((s) => (
                    <div
                      className="screensItem screensItem--mobile"
                      key={`${s.title}-${s.img}`}
                    >
                      <Screen variant="mobile" title={s.title} img={s.img} />
                    </div>
                  ))}
                </div>
              </div>

              <button
                className="screensArrow screensArrow--right"
                type="button"
                onClick={mobileNext}
                disabled={!mobileCanNext}
                aria-label={t.nextMobileAria}
              >
                ›
              </button>
            </div>
          </div>

          {/* WEB */}
          <div className="screensBlock">
            <div className="screensBlock__head">
              <h3 className="screensBlock__title">{t.webTitle}</h3>
            </div>

            <div className="screensCarousel">
              <button
                className="screensArrow screensArrow--left"
                type="button"
                onClick={webPrev}
                disabled={!webCanPrev}
                aria-label={t.prevWebAria}
              >
                ‹
              </button>

              <div className="screensViewport">
                <div
                  className="screensTrack"
                  style={{
                    transform: `translateX(-${
                      (webIndex * 100) / WEB_VISIBLE
                    }%)`,
                  }}
                >
                  {t.webScreens.map((s) => (
                    <div
                      className="screensItem screensItem--web"
                      key={`${s.title}-${s.img}`}
                    >
                      <Screen variant="web" title={s.title} img={s.img} />
                    </div>
                  ))}
                </div>
              </div>

              <button
                className="screensArrow screensArrow--right"
                type="button"
                onClick={webNext}
                disabled={!webCanNext}
                aria-label={t.nextWebAria}
              >
                ›
              </button>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section" id="faq">
          <div className="section__head">
            <div>
              <h2>{t.faqTitle}</h2>
            </div>
          </div>

          <div className="faq">
            {t.faq.map((item) => (
              <details className="faq__item" key={item.q}>
                <summary>{item.q}</summary>
                <div className="faq__answer">{item.a}</div>
              </details>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

/* ---------- small components ---------- */

function Screen({
  title,
  img,
  variant,
}: {
  title: string;
  img: string;
  variant: "mobile" | "web";
}) {
  return (
    <div
      className={`screen ${
        variant === "mobile" ? "screen--mobile" : "screen--web"
      }`}
    >
      <div className="screen__title">{title}</div>
      <div className="screen__img">
        <img
          src={img}
          alt={title}
          loading="lazy"
          onError={(e) => {
            e.currentTarget.src =
              "https://via.placeholder.com/1400x900?text=Screenshot+Placeholder";
          }}
        />
      </div>
    </div>
  );
}

function Icon({ name }: { name: IconName }) {
  switch (name) {
    case "mic":
      return (
        <svg viewBox="0 0 24 24" className="icon" aria-hidden="true">
          <path
            d="M12 14a3 3 0 0 0 3-3V6a3 3 0 1 0-6 0v5a3 3 0 0 0 3 3Zm7-3a1 1 0 1 0-2 0 5 5 0 0 1-10 0 1 1 0 1 0-2 0 7 7 0 0 0 6 6.92V20H9a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2h-2v-2.08A7 7 0 0 0 19 11Z"
            fill="currentColor"
          />
        </svg>
      );
    case "sparkles":
      return (
        <svg viewBox="0 0 24 24" className="icon" aria-hidden="true">
          <path
            fill="currentColor"
            d="M12 2l1.2 4.1L17.3 7 13.2 8.2 12 12.3 10.8 8.2 6.7 7l4.1-.9L12 2zm6 7l.9 3.1 3.1.9-3.1.9-.9 3.1-.9-3.1-3.1-.9 3.1-.9L18 9zm-12 3l.9 3.1 3.1.9-3.1.9L6 20l-.9-3.1L2 16l3.1-.9L6 12z"
          />
        </svg>
      );
    case "list":
      return (
        <svg viewBox="0 0 24 24" className="icon" aria-hidden="true">
          <path
            d="M7 6a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1ZM7 12a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1ZM8 17a1 1 0 1 0 0 2h12a1 1 0 1 0 0-2H8ZM4 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm0 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z"
            fill="currentColor"
          />
        </svg>
      );
    case "community":
      return (
        <svg viewBox="0 0 24 24" className="icon" aria-hidden="true">
          <path
            d="M16 11a3 3 0 1 0-2.82-4H10.82A3 3 0 1 0 8 11c.2 0 .39-.02.58-.05.5.34 1.09.55 1.72.55h3.4c.63 0 1.22-.21 1.72-.55.19.03.38.05.58.05Zm-10 1a4 4 0 0 0-4 4v2a1 1 0 1 0 2 0v-2a2 2 0 0 1 2-2h2.1a5.9 5.9 0 0 0-.56 2.5V20a1 1 0 1 0 2 0v-3.5A3.5 3.5 0 0 1 15.04 13H18a2 2 0 0 1 2 2v5a1 1 0 1 0 2 0v-5a4 4 0 0 0-4-4h-2.1c-.3 0-.59.03-.86.09-.33.06-.68.1-1.04.1h-3.4c-.36 0-.71-.04-1.04-.1A4.1 4.1 0 0 0 8.1 13H6Z"
            fill="currentColor"
          />
        </svg>
      );
    case "save":
      return (
        <svg viewBox="0 0 24 24" className="icon" aria-hidden="true">
          <path
            d="M6 3a2 2 0 0 0-2 2v17a1 1 0 0 0 1.6.8L12 18l6.4 4.8A1 1 0 0 0 20 22V5a2 2 0 0 0-2-2H6Zm12 2v15l-5.4-4.05a1 1 0 0 0-1.2 0L6 20V5h12Z"
            fill="currentColor"
          />
        </svg>
      );
    case "lang":
      return (
        <svg viewBox="0 0 24 24" className="icon" aria-hidden="true">
          <path
            d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm7.93 9H16.5a15.6 15.6 0 0 0-1.2-5.1A8.02 8.02 0 0 1 19.93 11ZM12 4c.8 0 2.13 1.7 2.9 7H9.1C9.87 5.7 11.2 4 12 4Zm-3.3 1.9A15.6 15.6 0 0 0 7.5 11H4.07a8.02 8.02 0 0 1 4.63-5.1ZM4.07 13H7.5a15.6 15.6 0 0 0 1.2 5.1A8.02 8.02 0 0 1 4.07 13ZM12 20c-.8 0-2.13-1.7-2.9-7h5.8C14.13 18.3 12.8 20 12 20Zm3.3-1.9A15.6 15.6 0 0 0 16.5 13h3.43a8.02 8.02 0 0 1-4.63 5.1Z"
            fill="currentColor"
          />
        </svg>
      );
    default:
      return null;
  }
}
