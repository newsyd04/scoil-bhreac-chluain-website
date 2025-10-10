// src/pages/HomePage.jsx
import React, { useState, useEffect, useRef, useMemo } from "react";
import { Link } from "react-router-dom";
import slide2 from "../assets/bg-1.jpg";
import slide3 from "../assets/slide3.jpg";
import Calendar from "react-calendar";
import shapesbg from "../assets/shapes-bg.png";
import "react-calendar/dist/Calendar.css";
import fallback from "../assets/fallback.jpg";
import crest from "../assets/crest_SBC.png";

const API_BASE = "https://webdev-backends.onrender.com";

function formatDate(d) {
  try {
    return new Date(d).toLocaleDateString(undefined, {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  } catch {
    return "";
  }
}

function excerpt(text = "", len = 160) {
  const clean = String(text).replace(/\s+/g, " ").trim();
  if (clean.length <= len) return clean;
  return clean.slice(0, len).trim() + "…";
}

const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const baseUrl = import.meta.env.BASE_URL;

  // === Slides (simple + dependable) ===
  const slides = [
    {
      image: slide3,
      headline: "Welcome to Scoil Bhreac Chluain",
      sub: "A caring, inclusive community for every child.",
      alt: "Pupils in a classroom smiling",
    },
    {
      image: slide2,
      headline: "Learning, Play, and Growth",
      sub: "Explore our latest news and calendar.",
      alt: "Children playing in the yard",
    },
  ];

  const [idx, setIdx] = useState(0);
  const timer = useRef(null);

  // Latest posts state
  const [latestPosts, setLatestPosts] = useState([]);
  const [postsLoading, setPostsLoading] = useState(true);
  const [postsError, setPostsError] = useState("");

  // Autoplay
  useEffect(() => {
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    timer.current = setInterval(
      () => setIdx((p) => (p + 1) % slides.length),
      7000
    );
    return () => clearInterval(timer.current);
  }, [slides.length]);

  // Fetch latest posts
  useEffect(() => {
    const ac = new AbortController();
    (async () => {
      setPostsLoading(true);
      setPostsError("");
      try {
        const res = await fetch(`${API_BASE}/school/posts`, {
          signal: ac.signal,
        });
        const data = await res.json();
        if (!res.ok) throw new Error(data?.message || "Error fetching posts");
        const sorted = [...data].sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );
        setLatestPosts(sorted.slice(0, 2));
      } catch (e) {
        if (e.name !== "AbortError")
          setPostsError("Could not load latest posts.");
      } finally {
        setPostsLoading(false);
      }
    })();
    return () => ac.abort();
  }, []);

  const shapes = useMemo(() => {
    const generated = [];
    const attempts = 500;

    for (let i = 0; i < 8; i++) {
      let placed = false;
      let tries = 0;

      while (!placed && tries < attempts) {
        const top = Math.random() * 85;
        const left = Math.random() * 85;
        const size = Math.floor(Math.random() * 60) + 40;
        const char = Math.random() > 0.5 ? "X" : "O";
        const rotate = Math.random() * 45 - 22.5;

        const buffer = 20;
        const overlaps = generated.some((s) => {
          const dx = s.left - left;
          const dy = s.top - top;
          const dist = Math.sqrt(dx * dx + dy * dy);
          return dist < (s.size / 2 + size / 2 + buffer) / 2;
        });

        if (!overlaps) {
          generated.push({ id: i, top, left, size, char, rotate });
          placed = true;
        }

        tries++;
      }
    }

    return generated;
  }, []);

  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* ================= Hero ================= */}
      <section aria-label="School highlights" className="relative isolate">
        <div className="relative w-full bg-gray-900">
          <div className="relative h-[78svh] min-h-[360px] md:h-[60vh] lg:h-[78vh] overflow-hidden">
            {slides.map((s, i) => (
              <div
                key={i}
                className={`absolute inset-0 transition-opacity duration-700 ${
                  i === idx ? "opacity-100" : "opacity-0"
                }`}
                aria-hidden={i !== idx}
              >
                <img
                  src={s.image}
                  alt={s.alt}
                  className="h-full w-full object-cover object-[center_30%]"
                  loading={i === 0 ? "eager" : "lazy"}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              </div>
            ))}
          </div>

          {/* Wave SVG */}
          <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-0">
            <svg
              className="relative block w-full h-20 md:h-32 text-blue-900"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              viewBox="0 0 1440 320"
            >
              <path
                fill="white"
                d="M0,160L48,176C96,192,192,224,288,208C384,192,480,128,576,128C672,128,768,192,864,202.7C960,213,1056,171,1152,138.7C1248,107,1344,85,1392,74.7L1440,64V320H0Z"
              />
            </svg>
          </div>

          {/* Hero content */}
          <div className="absolute inset-0 flex items-end md:items-center pb-[calc(env(safe-area-inset-bottom,0)+1.25rem)] z-20">
            <div className="mx-auto w-full max-w-6xl px-4">
              <div className="max-w-2xl">
                <div className="rounded-2xl bg-black/35 backdrop-blur-sm p-4 md:bg-transparent md:backdrop-blur-0 md:p-0">
                  <h1 className="text-[clamp(1.75rem,6vw,2.75rem)] md:text-5xl font-extrabold font-sketch text-white leading-[1.1] tracking-tight">
                    {slides[idx].headline}
                  </h1>
                  <p className="mt-2 md:mt-4 text-[clamp(0.95rem,3.6vw,1.125rem)] text-white/90">
                    {slides[idx].sub}
                  </p>
                  <div className="mt-5 flex flex-col sm:flex-row gap-3">
                    <a
                      href="./about-us"
                      className="inline-flex justify-center rounded-full px-6 py-3 bg-white text-sbc-blue font-semibold shadow hover:shadow-md transition"
                    >
                      Learn About Us
                    </a>
                    <a
                      href="./policies"
                      className="inline-flex justify-center rounded-full px-6 py-3 bg-white/10 text-white ring-1 ring-white/40 hover:bg-white/20 transition"
                    >
                      View School Policies
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= Welcome Box ================= */}
      <section className="relative z-20 -mt-12 sm:-mt-16 md:-mt-24 py-14 sm:py-16 md:py-20 px-4 sm:px-6 overflow-hidden">
        {/* shapes background - hidden on mobile */}
        <img
          src={shapesbg}
          alt=""
          className="absolute top-0 left-0 w-full h-full md:h-[120%] object-cover saturate-[0.86] -z-10 hidden sm:block"
        />

        <div className="relative mx-auto max-w-4xl text-center bg-blue-900/95 rounded-lg sm:rounded-xl py-8 sm:py-10 md:py-14 px-5 sm:px-8 shadow-lg flex flex-col items-center gap-6">
          <div className="backdrop-blur-md bg-white/70 rounded-3xl p-3">
            <img src={crest} className="h-44" />
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white font-sketch leading-snug">
            Welcome to Scoil Bhreac Chluain!
          </h2>
          <p className="mt-5 text-base sm:text-lg md:text-xl leading-relaxed text-white/90">
            At Scoil Bhreac Chluain, we are dedicated to providing a nurturing and
            inclusive environment where every child can thrive.
            We believe in the importance of community and work closely with parents to
            ensure the best outcomes for our pupils.
          </p>
        </div>
      </section>

      {/* ================= News + Calendar ================= */}
      <section className="z-0 relative py-12 md:py-16 bg-gray-50">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Latest News */}
            <div className="lg:col-span-2">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl md:text-4xl text-black font-extrabold font-sketch tracking-tight">
                  Latest News
                </h2>
                <Link
                  to="/latest"
                  className="text-blue-700 font-semibold hover:underline"
                >
                  View all →
                </Link>
              </div>

              {postsLoading ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[0, 1].map((i) => (
                    <div
                      key={i}
                      className="animate-pulse bg-white border border-gray-200 rounded-xl p-5 shadow-sm"
                    >
                      <div className="h-40 bg-gray-200 rounded-md mb-4" />
                      <div className="h-5 bg-gray-200 rounded w-3/4 mb-2" />
                      <div className="h-4 bg-gray-200 rounded w-full mb-1" />
                      <div className="h-4 bg-gray-200 rounded w-5/6" />
                    </div>
                  ))}
                </div>
              ) : postsError ? (
                <p className="text-red-600">{postsError}</p>
              ) : latestPosts.length === 0 ? (
                <p className="text-gray-600">No recent posts yet. Check back soon.</p>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {latestPosts.map((post) => (
                    <article
                      key={post._id}
                      className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition overflow-hidden"
                    >
                      <div className="aspect-[16/9] w-full overflow-hidden bg-gray-100">
                        <img
                          src={post.imageUrl || fallback}
                          alt={post.title || "Post image"}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div className="p-5">
                        <div className="flex items-start justify-between gap-3">
                          <h3 className="text-xl font-bold text-gray-800">
                            {post.title}
                          </h3>
                          <span className="text-xs text-gray-500 whitespace-nowrap">
                            {formatDate(post.createdAt)}
                          </span>
                        </div>
                        <p className="mt-2 text-gray-700">
                          {excerpt(post.content, 160)}
                        </p>
                        <div className="mt-3 flex items-center justify-between">
                          <span className="text-xs text-gray-400">{post.type}</span>
                          <Link
                            to={`/post/${post._id}`}
                            className="text-blue-700 font-semibold hover:underline"
                          >
                            Read more →
                          </Link>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              )}
            </div>

            {/* Calendar */}
            <aside className="bg-white border border-gray-200 rounded-xl shadow-sm p-6">
              <h2 className="text-2xl md:text-4xl font-extrabold text-center mb-4">
                School Calendar
              </h2>
              <p className="text-gray-600 text-center mb-4">
                Check important dates and upcoming events.
              </p>
              <Calendar
                onChange={() => {}}
                value={new Date()}
                className="rounded-lg border border-gray-200 shadow-sm mx-auto"
              />
            </aside>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="relative py-14 md:py-16 bg-sbc-blue text-white overflow-hidden">
        <div className="absolute inset-0 -z-0">
          {shapes.map((shape) => (
            <span
              key={shape.id}
              className="absolute text-white font-bold select-none"
              style={{
                top: `${shape.top}%`,
                left: `${shape.left}%`,
                fontSize: `${shape.size}px`,
                opacity: 0.15,
                transform: `rotate(${shape.rotate}deg)`,
              }}
            >
              {shape.char}
            </span>
          ))}
        </div>

        <div className="relative z-10 mx-auto max-w-6xl px-4 text-center">
          <h2 className="text-2xl md:text-4xl font-sketch font-extrabold">
            Ready to Join Us?
          </h2>
          <p className="mt-3 md:mt-4 text-base md:text-lg leading-relaxed max-w-2xl mx-auto text-white/90">
            Explore what makes Scoil Bhreac Chluain the perfect place for your child’s
            growth and education. Get in touch or visit us to learn more.
          </p>
          <Link
            to="/contact"
            className="mt-6 inline-block bg-white text-sbc-blue px-8 py-4 rounded-full text-lg font-semibold shadow hover:shadow-md transition"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
