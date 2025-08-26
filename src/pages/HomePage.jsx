// src/pages/HomePage.jsx
import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import slide1 from "../assets/slide1.jpg";
import slide2 from "../assets/slide2.jpg";
import slide3 from "../assets/slide3.jpg";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

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
  useEffect(() => window.scrollTo(0, 0), []);
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

  // Autoplay (gentle, and stops on reduced motion)
  useEffect(() => {
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    timer.current = setInterval(() => setIdx((p) => (p + 1) % slides.length), 7000);
    return () => clearInterval(timer.current);
  }, [slides.length]);

  // Fetch + show two most recent posts
  useEffect(() => {
    const ac = new AbortController();
    (async () => {
      setPostsLoading(true);
      setPostsError("");
      try {
        const res = await fetch(`${API_BASE}/school/posts`, { signal: ac.signal });
        const data = await res.json();
        if (!res.ok) throw new Error(data?.message || "Error fetching posts");
        // sort desc by createdAt, take top 2
        const sorted = [...data].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        setLatestPosts(sorted.slice(0, 2));
      } catch (e) {
        if (e.name !== "AbortError") setPostsError("Could not load latest posts.");
      } finally {
        setPostsLoading(false);
      }
    })();
    return () => ac.abort();
  }, []);

  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* ================= Hero ================= */}
      <section aria-label="School highlights" className="relative isolate">
        <div className="relative w-full bg-gray-900">
          {/* Option A: Taller mobile hero using svh + better focal point */}
          <div className="relative h-[78svh] min-h-[360px] md:h-[60vh] lg:h-[68vh] overflow-hidden">
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

          {/* Option A + B: Bottom-aligned content on mobile with a glass card */}
          <div className="absolute inset-0 flex items-end md:items-center pb-[calc(env(safe-area-inset-bottom,0)+1.25rem)]">
            <div className="mx-auto w-full max-w-6xl px-4">
              <div className="max-w-2xl">
                {/* Option B: subtle glass card only on mobile */}
                <div className="rounded-2xl bg-black/35 backdrop-blur-sm p-4 md:bg-transparent md:backdrop-blur-0 md:p-0">
                  {/* Option E: fluid type via clamp + tighter leading */}
                  <h1 className="text-[clamp(1.75rem,6vw,2.75rem)] md:text-5xl font-extrabold text-white leading-[1.1] tracking-tight">
                    {slides[idx].headline}
                  </h1>
                  <p className="mt-2 md:mt-4 text-[clamp(0.95rem,3.6vw,1.125rem)] text-white/90">
                    {slides[idx].sub}
                  </p>
                  <div className="mt-5 flex flex-col sm:flex-row gap-3">
                    <a
                      href={`${baseUrl}/Admission-Application-Form.pdf`}
                      className="inline-flex justify-center rounded-full px-6 py-3 bg-white text-sbc-blue font-semibold shadow hover:shadow-md transition"
                    >
                      Download Application
                    </a>
                    <a
                      href={`${baseUrl}/Annual-Admissions-Notice-2024-2025.pdf`}
                      className="inline-flex justify-center rounded-full px-6 py-3 bg-white/10 text-white ring-1 ring-white/40 hover:bg-white/20 transition"
                    >
                      Admissions Notice
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= News + Calendar ================= */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Latest News */}
            <div className="lg:col-span-2">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl md:text-4xl font-extrabold">Latest News</h2>
                <Link to="/latest" className="text-blue-700 font-semibold hover:underline">
                  View all →
                </Link>
              </div>

              {/* Loading / Error / Posts */}
              {postsLoading ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[0, 1].map((i) => (
                    <div key={i} className="animate-pulse bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
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
                        {/* If your API returns an image url, swap src below to post.image */}
                        <img
                          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%2Fid%2FOIP.zKwVZge32-pSqnPVJUKTcQHaEK%3Fpid%3DApi&f=1&ipt=0d7c40385835e45f9902f8049dbaf63f93a5ef297e548c63b222e34d1f8ccb11"
                          alt={post.title || "Post image"}
                          className="h-full w-full object-cover"
                          loading="lazy"
                        />
                      </div>
                      <div className="p-5">
                        <div className="flex items-start justify-between gap-3">
                          <h3 className="text-xl font-bold text-gray-800">{post.title}</h3>
                          <span className="text-xs text-gray-500 whitespace-nowrap">
                            {formatDate(post.createdAt)}
                          </span>
                        </div>
                        <p className="mt-2 text-gray-700">{excerpt(post.content, 160)}</p>
                        <div className="mt-3 flex items-center justify-between">
                          <span className="text-xs text-gray-400">{post.type}</span>
                          <Link to="/latest" className="text-blue-700 font-semibold hover:underline">
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
      <section className="py-14 md:py-16 bg-sbc-blue text-white">
        <div className="mx-auto max-w-6xl px-4 text-center">
          <h2 className="text-2xl md:text-4xl font-extrabold">Ready to Join Us?</h2>
          <p className="mt-3 md:mt-4 text-base md:text-lg leading-relaxed max-w-2xl mx-auto text-white/90">
            Explore what makes Scoil Bhreac Chluain the perfect place for your child’s growth and
            education. Get in touch or visit us to learn more.
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
