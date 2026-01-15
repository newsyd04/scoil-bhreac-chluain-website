import React, { useEffect, useMemo, useState } from "react";

const GOOGLE_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSeSe2d11R1D9cL4oi-VzWrhdUt_8n7yBai-l6-PpRMQbdNkyw/viewform?usp=header";

const ALADDIN_PAYMENT_URL = "https://www.aladdin.ie/p/5552535895015424";

// If you embed a Google Form, you typically use the "Send" -> "< > Embed HTML" URL.
// That embed URL looks like: https://docs.google.com/forms/d/e/.../viewform?embedded=true
const toGoogleEmbedUrl = (url) =>
  url.includes("embedded=true")
    ? url
    : `${url}${url.includes("?") ? "&" : "?"}embedded=true`;

const rounds = [
  {
    title: "Round 1",
    dates: "Jan 24th / 25th",
    fixtures: [
      "Dublin v Donegal",
      "Galway v Mayo",
      "Kerry v Roscommon",
      "Monaghan v Armagh",
      "Meath v Derry",
      "Tyrone v Kildare",
      "Cork v Cavan",
      "Offaly v Louth",
    ],
  },
  {
    title: "Round 2",
    dates: "Jan 31st / Feb 1st",
    fixtures: [
      "Armagh v Galway",
      "Donegal v Kerry",
      "Mayo v Dublin",
      "Roscommon v Monaghan",
      "Kildare v Offaly",
      "Derry v Tyrone",
      "Louth v Cork",
      "Cavan v Meath",
    ],
  },
  {
    title: "Round 3",
    dates: "Feb 14th / 15th",
    fixtures: [
      "Kerry v Galway",
      "Dublin v Monaghan",
      "Donegal v Mayo",
      "Roscommon v Armagh",
      "Meath v Louth",
      "Kildare v Derry",
      "Offaly v Cork",
      "Tyrone v Cavan",
    ],
  },
  {
    title: "Round 4",
    dates: "Feb 21st / 22nd",
    fixtures: [
      "Dublin v Kerry",
      "Galway v Roscommon",
      "Monaghan v Mayo",
      "Armagh v Donegal",
      "Derry v Offaly",
      "Cork v Meath",
      "Louth v Tyrone",
      "Cavan v Kildare",
    ],
  },
  {
    title: "Round 5",
    dates: "Feb 28th / Mar 1st",
    fixtures: [
      "Kerry v Monaghan",
      "Mayo v Armagh",
      "Donegal v Galway",
      "Roscommon v Dublin",
      "Cavan v Louth",
      "Tyrone v Offaly",
      "Kildare v Meath",
      "Derry v Cork",
    ],
  },
  {
    title: "Round 6",
    dates: "Mar 14th / 15th",
    fixtures: [
      "Kerry v Mayo",
      "Dublin v Armagh",
      "Roscommon v Donegal",
      "Monaghan v Galway",
      "Cork v Kildare",
      "Meath v Tyrone",
      "Louth v Derry",
      "Offaly v Cavan",
    ],
  },
  {
    title: "Round 7",
    dates: "Mar 22nd",
    fixtures: [
      "Armagh v Kerry",
      "Galway v Dublin",
      "Mayo v Roscommon",
      "Monaghan v Donegal",
      "Derry v Cavan",
      "Kildare v Louth",
      "Offaly v Meath",
      "Tyrone v Cork",
    ],
  },
];

const ruleItems = [
  "Each week, pick one team playing that week to win, if your team wins, you go through; lose or draw and you’re out.",
  "You cannot pick the same team more than once.",
  "If your team’s game is postponed, you are automatically put through to the next round.",
  "If more than one participant remains at the end, the accumulated ‘scored for’ of their selected teams determines the winner.",
  "If the remaining players are knocked out in the same week, the player with the highest ‘scored for’ total wins.",
  "If ‘scored for’ points are equal, there will be joint winners.",
];

const LastManStanding = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Embed on >= sm screens, link out on mobile
  const [embedForm, setEmbedForm] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 640px)");

    const update = () => setEmbedForm(mq.matches);
    update();

    if (mq.addEventListener) mq.addEventListener("change", update);
    else mq.addListener(update);

    return () => {
      if (mq.removeEventListener) mq.removeEventListener("change", update);
      else mq.removeListener(update);
    };
  }, []);

  const embedUrl = useMemo(() => toGoogleEmbedUrl(GOOGLE_FORM_URL), []);

  return (
    <div className="min-h-screen bg-[#F9F8F4] py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <header className="mb-10">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-3">
            National League Last Man Standing 2026
          </h1>
          <p className="text-lg text-gray-700">
            Starting <span className="font-semibold">Saturday January 24th 2026</span> – in aid of{" "}
            <span className="font-semibold">Scoil Bhreac Chluain, Annascaul</span>.
          </p>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {/* Entry Fee */}
            <div className="relative overflow-hidden bg-white rounded-lg shadow p-5">
              <span
                className="absolute left-0 top-0 h-1.5 w-full opacity-90"
                style={{ backgroundColor: "#F5AB00" }}
                aria-hidden="true"
              />
              <p className="text-sm text-gray-500">Entry Fee</p>
              <p className="text-2xl font-bold text-gray-900">€10</p>
            </div>

            {/* Prize Pot */}
            <div className="relative overflow-hidden bg-white rounded-lg shadow p-5">
              <span
                className="absolute left-0 top-0 h-1.5 w-full opacity-90"
                style={{ backgroundColor: "#E45C7A" }}
                aria-hidden="true"
              />
              <p className="text-sm text-gray-500">Prize Pot</p>
              <p className="text-2xl font-bold text-gray-900">€500</p>
              <p className="text-xs text-gray-500 mt-1">MUST BE WON</p>
            </div>

            {/* Selections Due */}
            <div className="relative overflow-hidden bg-white rounded-lg shadow p-5">
              <span
                className="absolute left-0 top-0 h-1.5 w-full opacity-90"
                style={{ backgroundColor: "#6AA84F" }}
                aria-hidden="true"
              />
              <p className="text-sm text-gray-500">Selections Due</p>
              <p className="text-2xl font-bold text-gray-900">Jan 22nd 2026</p>
            </div>
          </div>


          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={embedForm ? "#enter" : GOOGLE_FORM_URL}
              target={embedForm ? undefined : "_blank"}
              rel={embedForm ? undefined : "noreferrer"}
              className="inline-flex items-center justify-center px-5 py-3 rounded-md bg-gray-900 text-white font-semibold hover:bg-gray-800 transition"
            >
              Enter (Google Form)
            </a>

            <a
              href={ALADDIN_PAYMENT_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center px-5 py-3 rounded-md bg-white text-gray-900 font-semibold border border-gray-200 hover:bg-gray-50 transition"
            >
              Pay €10 (Aladdin)
            </a>

            <a
              href="https://www.scoilbhreacchluain.ie/latest"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center px-5 py-3 rounded-md bg-white text-gray-900 font-semibold border border-gray-200 hover:bg-gray-50 transition"
            >
              Follow Progress
            </a>
          </div>
        </header>

        <section className="space-y-6">
          <article className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-2xl font-bold mb-2 text-gray-900">How it works</h2>
            <p className="text-gray-700 leading-relaxed">
              Each round, pick <span className="font-semibold">one team</span> playing that week to win. If your team
              wins, you survive to the next round. If they <span className="font-semibold">lose or draw</span>, you’re
              out. You can’t pick the same team twice, so choose wisely.
            </p>
          </article>
          
          <article className="mt-5 bg-white rounded-lg shadow p-5">
            <p className="font-semibold text-gray-900 mb-1">How to enter</p>
            <ol className="list-decimal pl-5 text-gray-700 space-y-1">
              <li>Fill in the Google Form with your details + team selections.</li>
              <li>Pay the €10 entry fee using the Aladdin payment link.</li>
              <li>That’s it, you’re in!</li>
            </ol>
            <p className="text-sm text-gray-600 mt-3">
              If you’ve paid but haven’t filled the form (or vice versa), your entry may be incomplete.
            </p>
          </article>

          <article className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">Rules & Guidelines</h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              {ruleItems.map((r) => (
                <li key={r}>{r}</li>
              ))}
            </ul>
          </article>

          <article id="enter" className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">Enter</h2>

            {embedForm ? (
              <div className="rounded-lg overflow-hidden border border-gray-200">
                <iframe
                  title="Last Man Standing 2026 Entry Form"
                  src={embedUrl}
                  className="w-full"
                  style={{ height: "min(1100px, 85vh)" }}
                  frameBorder="0"
                  loading="lazy"
                >
                  Loading…
                </iframe>
              </div>
            ) : (
              <div>
                <p className="text-gray-700 mb-3">
                  On mobile, the form opens in a new tab for a smoother experience.
                </p>
                <a
                  href={GOOGLE_FORM_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center px-4 py-2 rounded-md bg-gray-900 text-white font-semibold hover:bg-gray-800 transition"
                >
                  Open Google Form
                </a>
              </div>
            )}
          </article>

          <article className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">Fixtures by Round</h2>
            <div className="space-y-4">
              {rounds.map((round) => (
                <div key={round.title} className="border border-gray-200 rounded-lg">
                  <div className="px-4 py-3 bg-[#F9F8F4] rounded-t-lg">
                    <p className="font-semibold">{round.title}</p>
                    <p className="text-sm text-gray-600">{round.dates}</p>
                  </div>
                  <div className="px-4 py-4">
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-gray-700">
                      {round.fixtures.map((f) => (
                        <li key={f}>• {f}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </article>
        </section>
      </div>
    </div>
  );
};

export default LastManStanding;
