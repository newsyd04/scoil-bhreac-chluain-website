import React, { useEffect, useState } from "react";
import { Link, scroller } from "react-scroll"; // Smooth scrolling with offset

const ParentsInfo = () => {
  const [activeSection, setActiveSection] = useState("parents-association");

  const sections = [
    {
      id: "parents-association",
      title: "Parents' Association",
      content: `We are fortunate to have a very active Parents Association. They are a vital part of the school community. They organise many successful fundraising events throughout the year including Bingo, the Last Man Standing, the Annual School Walk and Communion and Confirmation receptions.`,
    },
    {
      id: "parental-involvement",
      title: "Parental Involvement",
      content: `
      As a Catholic school, we believe that the school is not an isolated unit but a union of many people who come together to give it its life and meaning.

      The triple partnership of home, school and parish is essential if the school is to live up to its Mission Statement. We aim to establish this relationship through:

      - Encouraging a shared commitment to the success of each individual child
      - Encouraging an ethos of understanding and openness in home-school-parish relationships
      - Helping parents to develop a positive role in complementing and supporting the work of the school in educating their children

      Parental involvement in the life of the school is encouraged in many ways:

      - Through parent/partnership groups working in school
      - Fundraising/ parent helpers
      - Involvement in assemblies, celebrations, concerts, and school Masses
      - Involvement in sacramental preparation
      - School fetes, sports, and gala days

      We are committed to methods of evaluating and improving channels of communication between school and parents. Our evaluation shall be ongoing and continuous, as we make every effort to make parents feel welcome and valued at all times.`,
    },
    {
      id: "home-school-liaison",
      title: "Home / School Liaison",
      content: `
      Frequent communication is of vital importance in developing and nurturing cooperation between home and school. Please refer to the school's Communication Policy in the Policy Section of our website.

      In our school, communication between parents and teachers may take one of the following forms:

      - **Individual Consultation:** This occurs where a parent has asked to meet a teacher or has been invited to visit the school to exchange information or to discuss matters of concern. (A note to the class teacher, or phone call, requesting such an appointment is always necessary).
      - **Appointment with Principal:** Parents wishing to meet with the Principal should make an appointment by contacting/telephoning the school.
      - **Parent/Teacher Meetings:** Held annually in October or November.

      Meetings are also held in connection with preparation for the Sacraments of Penance, First Holy Communion, and Confirmation throughout the year.

      A child’s parents are the most effective teacher he/she will ever have. The home environment determines to a great extent the child’s progress in school. To achieve a high standard of learning, a high level of cooperation between teachers, parents, and children is needed.`,
    },
    {
      id: "routines-info",
      title: "Routines and General Information",
      content: `
      - School starts  at 9.20 am.  The school staff offer supervision from 9:10 am onwards. The Board of Management does not accept responsibility for any child/ children on the school premises before 9:10am .It is important that the children develop the habit of being punctual for school.
      - There is a short break at 11.00am. Lunch break is from 1.00pm. until 1.30pm.. The children should have a small snack at 11.00am. and something more substantial at lunchtime. No child will be allowed home during lunchtime without a written letter, signed by both parents, giving their child permission to leave the school and that they accept all responsibility for the child once he/she leaves the school.
      - If a child forgets any item, or one has to be delivered, please leave the item with the secretary and it will be delivered at break time.
      - As part of our Healthy Eating Policy, fizzy drinks, sweets, chocolate or any "junk foods” are not allowed on the school premises.
      - Scoil Bhreac Chluain has achieved Green Flag Status and consequently every effort should be made to make the school and it’s environs a litter free area. Children and staff are encouraged to reduce, re-use and recycle.
      - Junior and Senior Infants are dismissed at 2.00pm. Infants are not allowed to go home unaccompanied. All other pupils are dismissed at 3.00pm.
      - At 3.00pm. pupils are expected to leave the schools grounds in an orderly fashion and report home promptly. The school cannot accept responsibility for looking after any children after this time, this includes children attending after school activities.
      - All children should enter the school through the main gates. No child is allowed to cross or walk along the front walls of the school.
      - In the event of a pupil being absent through illness or for any other reason, the class teacher should be informed by email on the pupil’s return to school. If it is anticipated that the absence will be of lengthy duration, the class teacher or Principal should be informed by note or telephone as soon as possible.
      - When it is necessary for a pupil to leave school early, a note must be sent to the class teacher. Parents/guardians are asked to call personally to the classroom to collect the child. Any person collecting a child on behalf of the parent will only be permitted to take the child if the parent has contacted the school beforehand. All children leaving the school early should be signed out using the sign out record book in the office and the cabin.  Please accept that it is only in the interest of the safety of your child that these procedures are in force.
      - If sending money into the school, for any reason please place it in an envelope and put the child’s name, class and the date on the cover. As the need arises, parents will receive notices with regard to school matters and events.
      - Please supply your child/ children with a change of clothes e.g. socks, underwear and tracksuit pants. Place these items in a bag with your child's / children's name on it.
    `
    },
  ];


  useEffect(() => {
    // Scroll-to-top behavior removed to prevent interference
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 } // Trigger when section is 60% visible
    );

    sections.forEach((section) => {
      const sectionElement = document.getElementById(section.id);
      if (sectionElement) observer.observe(sectionElement);
    });

    return () => {
      sections.forEach((section) => {
        const sectionElement = document.getElementById(section.id);
        if (sectionElement) observer.unobserve(sectionElement);
      });
    };
  }, [sections]);

  const scrollToSection = (id) => {
    scroller.scrollTo(id, {
      smooth: true,
      offset: -80, // Adjust this value for the sticky navbar height
      duration: 500,
    });
  };

    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8">
        {/* Sidebar Navigation for Desktop */}
        <aside className="hidden lg:block lg:w-1/4 bg-blue-50 p-6 rounded-lg shadow-md sticky top-20 h-fit">
          <h3 className="text-xl font-bold text-blue-600 mb-4">Quick Links</h3>
          <ul className="space-y-4">
            {sections.map((section) => (
              <li key={section.id}>
                <button
                  onClick={() => scrollToSection(section.id)}
                  className={`text-blue-600 hover:text-blue-800 transition cursor-pointer ${
                    activeSection === section.id ? "font-bold underline" : ""
                  }`}
                >
                  {section.title}
                </button>
              </li>
            ))}
          </ul>
        </aside>

        {/* Breadcrumb Navigation for Mobile */}
        <div className="lg:hidden bg-blue-50 p-4 rounded-lg shadow-md">
          <div className="text-sm text-blue-600 font-semibold flex flex-wrap items-center">
            {sections.map((section, index) => (
              <React.Fragment key={section.id}>
                <button
                  onClick={() => scrollToSection(section.id)}
                  className={`hover:underline cursor-pointer ${
                    activeSection === section.id ? "text-blue-800 font-bold" : ""
                  }`}
                >
                  {section.title}
                </button>
                {index < sections.length - 1 && (
                  <span className="mx-2 text-gray-500">{`>`}</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <main className="lg:w-3/4 bg-white rounded-xl shadow-lg p-8">
          <header className="text-center mb-12">
            <h1 className="text-4xl font-extrabold text-gray-900">
              Parents' Information
            </h1>
            <p className="text-lg text-gray-500 mt-4">
              Discover everything you need to know as a parent at Scoil Bhreac
              Chluain.
            </p>
            <hr className="mt-6" />
          </header>
          {sections.map((section) => (
            <section
              key={section.id}
              id={section.id}
              className="mb-12 pb-8 border-b last:border-none last:pb-0"
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-4 flex items-center">
                {section.title}
              </h2>
              <p className="text-gray-700 whitespace-pre-line leading-relaxed">
                {section.content}
              </p>
            </section>
          ))}
        </main>
      </div>
    </div>
  );
};

export default ParentsInfo;