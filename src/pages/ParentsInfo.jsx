// src/pages/ParentsInfo.jsx
import React, { useMemo, useState, useEffect } from "react";

// 1) Put your EXACT words inside these content strings. Do not edit the wording.
const sections = [
  {
    id: "parents-association",
    title: "Parents' Association",
    content:
      "We are fortunate to have a very active Parents Association. They are a vital part of the school community. They organise many successful fundraising events throughout the year including Bingo, the Last Man Standing, the Annual School Walk and Communion and Confirmation receptions.",
  },
  {
    id: "parental-involvement",
    title: "Parental Involvement",
    content:
      "As a Catholic school, we believe that the school is not an isolated unit but a union of many people who come together to give it its life and meaning.\n\nThe triple partnership of home, school and parish is essential if the school is to live up to its Mission Statement. We aim to establish this relationship through:\n\n- Encouraging a shared commitment to the success of each individual child\n- Encouraging an ethos of understanding and openness in home-school-parish relationships\n- Helping parents to develop a positive role in complementing and supporting the work of the school in educating their children\n\nParental involvement in the life of the school is encouraged in many ways:\n\n- Through parent/partnership groups working in school\n- Fundraising/ parent helpers\n- Involvement in assemblies, celebrations, concerts, and school Masses\n- Involvement in sacramental preparation\n- School fetes, sports, and gala days\n\nWe are committed to methods of evaluating and improving channels of communication between school and parents. Our evaluation shall be ongoing and continuous, as we make every effort to make parents feel welcome and valued at all times.",
  },
  {
    id: "home-school-liaison",
    title: "Home / School Liaison",
    content:
      "Frequent communication is of vital importance in developing and nurturing cooperation between home and school. Please refer to the school's Communication Policy in the Policy Section of our website.\n\nIn our school, communication between parents and teachers may take one of the following forms:\n\n- **Individual Consultation:** This occurs where a parent has asked to meet a teacher or has been invited to visit the school to exchange information or to discuss matters of concern. (A note to the class teacher, or phone call, requesting such an appointment is always necessary).\n- **Appointment with Principal:** Parents wishing to meet with the Principal should make an appointment by contacting/telephoning the school.\n- **Parent/Teacher Meetings:** Held annually in October or November.\n\nMeetings are also held in connection with preparation for the Sacraments of Penance, First Holy Communion, and Confirmation throughout the year.\n\nA child’s parents are the most effective teacher he/she will ever have. The home environment determines to a great extent the child’s progress in school. To achieve a high standard of learning, a high level of cooperation between teachers, parents, and children is needed.",
  },
  {
    id: "routines-info",
    title: "Routines and General Information",
    content:
      "- School starts  at 9.20 am.  The school staff offer supervision from 9:10 am onwards. The Board of Management does not accept responsibility for any child/ children on the school premises before 9:10am .It is important that the children develop the habit of being punctual for school.\n- There is a short break at 11.00am. Lunch break is from 1.00pm. until 1.30pm.. The children should have a small snack at 11.00am. and something more substantial at lunchtime. No child will be allowed home during lunchtime without a written letter, signed by both parents, giving their child permission to leave the school and that they accept all responsibility for the child once he/she leaves the school.\n- If a child forgets any item, or one has to be delivered, please leave the item with the secretary and it will be delivered at break time.\n- As part of our Healthy Eating Policy, fizzy drinks, sweets, chocolate or any \"junk foods” are not allowed on the school premises.\n- Scoil Bhreac Chluain has achieved Green Flag Status and consequently every effort should be made to make the school and it’s environs a litter free area. Children and staff are encouraged to reduce, re-use and recycle.\n- Junior and Senior Infants are dismissed at 2.00pm. Infants are not allowed to go home unaccompanied. All other pupils are dismissed at 3.00pm.\n- At 3.00pm. pupils are expected to leave the schools grounds in an orderly fashion and report home promptly. The school cannot accept responsibility for looking after any children after this time, this includes children attending after school activities.\n- All children should enter the school through the main gates. No child is allowed to cross or walk along the front walls of the school.\n- In the event of a pupil being absent through illness or for any other reason, the class teacher should be informed by email on the pupil’s return to school. If it is anticipated that the absence will be of lengthy duration, the class teacher or Principal should be informed by note or telephone as soon as possible.\n- When it is necessary for a pupil to leave school early, a note must be sent to the class teacher. Parents/guardians are asked to call personally to the classroom to collect the child. Any person collecting a child on behalf of the parent will only be permitted to take the child if the parent has contacted the school beforehand. All children leaving the school early should be signed out using the sign out record book in the office and the cabin.  Please accept that it is only in the interest of the safety of your child that these procedures are in force.\n- If sending money into the school, for any reason please place it in an envelope and put the child’s name, class and the date on the cover. As the need arises, parents will receive notices with regard to school matters and events.\n- Please supply your child/ children with a change of clothes e.g. socks, underwear and tracksuit pants. Place these items in a bag with your child's / children's name on it.",
  },
];

// ---------- helpers: escape + highlighters + verbatim renderer ----------

const escapeHtml = (s) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

const highlightInline = (text, query) => {
  const escaped = escapeHtml(text);
  if (!query) return escaped;
  const safe = query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  try {
    return escaped.replace(new RegExp(`(${safe})`, "gi"), '<mark class="pi-mark">$1</mark>');
  } catch {
    return escaped;
  }
};

const highlightParagraph = (text, query) =>
  highlightInline(text, query).replace(/\n/g, "<br/>");

/**
 * Render verbatim content smartly:
 * - Split into blocks by blank line.
 * - If all non-empty lines in a block start with "-" -> render as <ul><li>…</li></ul>
 * - Otherwise render as a <p> with <br/> for single newlines.
 * NOTE: Source strings are NOT mutated.
 */
function renderVerbatim(content, query) {
  const blocks = content.split(/\r?\n\r?\n/);

  return blocks.map((block, bIdx) => {
    const lines = block.split(/\r?\n/);
    const meaningful = lines.filter((l) => l.trim() !== "");
    const isDashList =
      meaningful.length > 0 && meaningful.every((l) => l.trim().startsWith("-"));

    if (isDashList) {
      return (
        <ul key={`b-${bIdx}`} className="verbatim list-outside ml-5">
          {meaningful.map((line, i) => {
            const item = line.replace(/^\s*-\s*/, ""); // strip leading "-"
            return (
              <li
                key={`li-${bIdx}-${i}`}
                className="mb-1"
                dangerouslySetInnerHTML={{ __html: highlightInline(item, query) }}
              />
            );
          })}
        </ul>
      );
    }

    return (
      <p
        key={`p-${bIdx}`}
        className="verbatim"
        dangerouslySetInnerHTML={{ __html: highlightParagraph(block, query) }}
      />
    );
  });
}

// --------------------------- component ---------------------------

const ParentsInfo = () => {
  const [q, setQ] = useState("");

  const toc = useMemo(() => sections.map(({ id, title }) => ({ id, title })), []);

  useEffect(() => {
    const onClick = (e) => {
      const a = e.target.closest("a[href^='#']");
      if (!a) return;
      const id = a.getAttribute("href");
      if (!id || !id.startsWith("#")) return;
      const el = document.querySelector(id);
      if (!el) return;
      e.preventDefault();
      const top = el.getBoundingClientRect().top + window.scrollY - 88;
      window.scrollTo({ top, behavior: "smooth" });
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

  return (
    <main className="bg-white text-gray-900">
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-10 pb-16">
        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            Parents’ Information
          </h1>
          <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-2">
              <label htmlFor="pi-search" className="sr-only">Search this page</label>
              <input
                id="pi-search"
                type="search"
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search this page…"
                className="w-full sm:w-72 rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              {q && (
                <button
                  onClick={() => setQ("")}
                  className="text-sm text-gray-600 hover:text-blue-700"
                >
                  Clear
                </button>
              )}
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={() => window.print()}
                className="rounded-full border border-gray-300 px-4 py-2 text-sm hover:bg-gray-50"
              >
                Print
              </button>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* TOC */}
          <aside className="lg:col-span-3">
            <details className="lg:hidden rounded-lg border border-gray-200">
              <summary className="cursor-pointer select-none px-4 py-3 font-semibold">
                On this page
              </summary>
              <nav className="px-4 pb-4">
                <ul className="space-y-2">
                  {toc.map(({ id, title }) => (
                    <li key={id}>
                      <a href={`#${id}`} className="text-sm text-blue-700 hover:underline">
                        {title}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </details>
            <nav className="hidden lg:block sticky top-24">
              <p className="text-sm font-semibold text-gray-900 mb-3">On this page</p>
              <ul className="space-y-2">
                {toc.map(({ id, title }) => (
                  <li key={id}>
                    <a href={`#${id}`} className="text-sm text-blue-700 hover:underline">
                      {title}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>

          {/* Content */}
          <article className="lg:col-span-9">
            <div className="rounded-2xl border border-gray-200 shadow-sm p-5 sm:p-7 lg:p-8">
              {sections.map((s) => (
                <section key={s.id} className="mb-8 last:mb-0">
                  <a id={s.id} className="block -mt-24 pt-24" />
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-xl font-extrabold text-gray-900">{s.title}</h3>
                    <button
                      onClick={() => {
                        const url = `${window.location.origin}${window.location.pathname}#${s.id}`;
                        navigator.clipboard?.writeText(url);
                      }}
                      className="shrink-0 text-xs text-gray-600 hover:text-blue-700"
                      aria-label={`Copy link to ${s.title}`}
                      title="Copy link"
                    >
                      Link
                    </button>
                  </div>

                  {/* Render verbatim content with bullets for lines starting with "-" */}
                  <div className="mt-3 text-[15px] leading-7 text-gray-800">
                    {renderVerbatim(s.content, q)}
                  </div>
                </section>
              ))}
            </div>
          </article>
        </div>
      </section>

      <style>{`
        .verbatim { white-space: normal; }
        .pi-mark { background: #fff3bf; padding: 0 2px; border-radius: 2px; }
        .verbatim li { margin: 0.25rem 0; padding-left: 0.5rem; list-style-type: disc; }
        @media print {
          header, aside, details { display: none !important; }
          a[id] { display: none; }
          .pi-mark { background: transparent; }
        }
      `}</style>
    </main>
  );
};

export default ParentsInfo;
