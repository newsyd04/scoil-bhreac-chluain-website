import React from "react";
import { useEffect } from "react";

const AboutPage = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const staffMembers = [
    { name: "Mary Murphy", title: "Principal", image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fisobarscience-1bfd8.kxcdn.com%2Fwp-content%2Fuploads%2F2020%2F09%2Fdefault-profile-picture1.jpg&f=1&nofb=1&ipt=16c4f69f00caa12820ed5e58afdea3582c086a204a901abb7d890a9a7987a5c2" },
    { name: "Anne Foley", title: "Deputy Principal", image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fisobarscience-1bfd8.kxcdn.com%2Fwp-content%2Fuploads%2F2020%2F09%2Fdefault-profile-picture1.jpg&f=1&nofb=1&ipt=16c4f69f00caa12820ed5e58afdea3582c086a204a901abb7d890a9a7987a5c2" },
    { name: "Tricia Kennedy", title: "School Secretary", image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fisobarscience-1bfd8.kxcdn.com%2Fwp-content%2Fuploads%2F2020%2F09%2Fdefault-profile-picture1.jpg&f=1&nofb=1&ipt=16c4f69f00caa12820ed5e58afdea3582c086a204a901abb7d890a9a7987a5c2" },
    { name: "Caitríona Uí Ghráinne", title: "Naoináin Bheaga/ Mhóra", image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fisobarscience-1bfd8.kxcdn.com%2Fwp-content%2Fuploads%2F2020%2F09%2Fdefault-profile-picture1.jpg&f=1&nofb=1&ipt=16c4f69f00caa12820ed5e58afdea3582c086a204a901abb7d890a9a7987a5c2" },
    { name: "Michelle Russell", title: "Rang 1/2", image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fisobarscience-1bfd8.kxcdn.com%2Fwp-content%2Fuploads%2F2020%2F09%2Fdefault-profile-picture1.jpg&f=1&nofb=1&ipt=16c4f69f00caa12820ed5e58afdea3582c086a204a901abb7d890a9a7987a5c2" },
    { name: "Gail Ní Shúilleabháin", title: "Rang 3/4", image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fisobarscience-1bfd8.kxcdn.com%2Fwp-content%2Fuploads%2F2020%2F09%2Fdefault-profile-picture1.jpg&f=1&nofb=1&ipt=16c4f69f00caa12820ed5e58afdea3582c086a204a901abb7d890a9a7987a5c2" },
    { name: "Aoife Thanner", title: "Rang 3/4", image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fisobarscience-1bfd8.kxcdn.com%2Fwp-content%2Fuploads%2F2020%2F09%2Fdefault-profile-picture1.jpg&f=1&nofb=1&ipt=16c4f69f00caa12820ed5e58afdea3582c086a204a901abb7d890a9a7987a5c2" },
    { name: "Niamh Finn", title: "Rang 5/6", image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fisobarscience-1bfd8.kxcdn.com%2Fwp-content%2Fuploads%2F2020%2F09%2Fdefault-profile-picture1.jpg&f=1&nofb=1&ipt=16c4f69f00caa12820ed5e58afdea3582c086a204a901abb7d890a9a7987a5c2" },
  ];

  const groupMembers = [
    {
      name: "Mary Murphy, Anne Foley and Mary Dorgan",
      title: "SET Team",
      image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F036%2F280%2F651%2Foriginal%2Fdefault-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-illustration-vector.jpg&f=1&nofb=1&ipt=968804e089275771be11c2179112c076746df85d36cd6bfbace9f38a6d59364f",
    },
    {
      name: "Mary Falvey, Mairead Flahive, Róisín O' Connor, Mary Sayers, Edwina Knightly, Ciara Murphy",
      title: "SNA Team",
      image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F036%2F280%2F651%2Foriginal%2Fdefault-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-illustration-vector.jpg&f=1&nofb=1&ipt=968804e089275771be11c2179112c076746df85d36cd6bfbace9f38a6d59364f",
    },
    {
      name: "Clár Ui Mhurchadha",
      title: "EAL Teacher",
      image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F036%2F280%2F651%2Foriginal%2Fdefault-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-illustration-vector.jpg&f=1&nofb=1&ipt=968804e089275771be11c2179112c076746df85d36cd6bfbace9f38a6d59364f",
    },
    {
      name: "Susan Brosnan",
      title: "Bus Escort",
      image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F036%2F280%2F651%2Foriginal%2Fdefault-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-illustration-vector.jpg&f=1&nofb=1&ipt=968804e089275771be11c2179112c076746df85d36cd6bfbace9f38a6d59364f",
    },
    {
      name: "Martin Knightly",
      title: "School Caretaker",
      image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F036%2F280%2F651%2Foriginal%2Fdefault-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-illustration-vector.jpg&f=1&nofb=1&ipt=968804e089275771be11c2179112c076746df85d36cd6bfbace9f38a6d59364f",
    },
  ];

  const BOMMembers = [
    { name: "John Hanafin", title: "Chairperson", image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F036%2F280%2F651%2Foriginal%2Fdefault-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-illustration-vector.jpg&f=1&nofb=1&ipt=968804e089275771be11c2179112c076746df85d36cd6bfbace9f38a6d59364f" },
    { name: "Fr. Michael Moynihan", title: "Patron's Nominee", image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F036%2F280%2F651%2Foriginal%2Fdefault-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-illustration-vector.jpg&f=1&nofb=1&ipt=968804e089275771be11c2179112c076746df85d36cd6bfbace9f38a6d59364f" },
    { name: "Mary Murphy", title: "School Principal", image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F036%2F280%2F651%2Foriginal%2Fdefault-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-illustration-vector.jpg&f=1&nofb=1&ipt=968804e089275771be11c2179112c076746df85d36cd6bfbace9f38a6d59364f" },
    { name: "Caitríona Uí Ghráinne", title: "Teachers' Nominee", image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F036%2F280%2F651%2Foriginal%2Fdefault-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-illustration-vector.jpg&f=1&nofb=1&ipt=968804e089275771be11c2179112c076746df85d36cd6bfbace9f38a6d59364f" },
    { name: "Annemarie Curran", title: "Parents' Nominee", image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F036%2F280%2F651%2Foriginal%2Fdefault-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-illustration-vector.jpg&f=1&nofb=1&ipt=968804e089275771be11c2179112c076746df85d36cd6bfbace9f38a6d59364f" },
    { name: "Emmet Kennedy", title: "Parents' Nominee", image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F036%2F280%2F651%2Foriginal%2Fdefault-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-illustration-vector.jpg&f=1&nofb=1&ipt=968804e089275771be11c2179112c076746df85d36cd6bfbace9f38a6d59364f" },
    { name: "Trish Moriarty", title: "Community Nominee", image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F036%2F280%2F651%2Foriginal%2Fdefault-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-illustration-vector.jpg&f=1&nofb=1&ipt=968804e089275771be11c2179112c076746df85d36cd6bfbace9f38a6d59364f" },
    { name: "P.J. Foley", title: "Community Nominee", image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F036%2F280%2F651%2Foriginal%2Fdefault-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-illustration-vector.jpg&f=1&nofb=1&ipt=968804e089275771be11c2179112c076746df85d36cd6bfbace9f38a6d59364f" },
  ];

  return (
    <div className="min-h-screen px-4 bg-gray-50 flex flex-col items-center">
      {/* About Section */}
      <section className="w-full max-w-6xl p-8 bg-white rounded-2xl shadow-lg my-12">
        <header className="text-center mb-8">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-2">About Us</h2>
          <p className="text-gray-500 text-lg">
            Welcome to Scoil Bhreac Chluain, a vibrant school dedicated to fostering excellence in education and community values.
          </p>
        </header>
        <div className="text-center mb-12">
          <p className="mb-4">
            At Scoil Bhreac Chluain, we are committed to creating a nurturing environment where every student can achieve their full potential.
            <br />
            Our school has a proud tradition of serving the community with passionate staff, innovative teaching methods, and state-of-the-art
            facilities.
            <hr className="mt-12"/>
          </p>
        </div>

        <header className="text-center mb-8">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-2">Meet Our Staff</h2>
          <p className="text-gray-500 text-lg">Dedicated professionals who bring passion and excellence to their roles every day.</p>
        </header>

        {/* Individual Staff Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-12">
          {staffMembers.map((staff, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center space-y-4 bg-gray-100 rounded-lg p-6 shadow-md hover:shadow-lg transition"
            >
              <img src={staff.image} alt={staff.name} className="w-24 h-24 rounded-full object-cover" />
              <div>
                <h3 className="text-lg font-bold text-gray-900">{staff.name}</h3>
                <p className="text-gray-500">{staff.title}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Group Section */}
        <div className="mb-12">
          <h3 className="text-2xl font-extrabold text-gray-900 text-center mb-6">Specialized Teams</h3>
          <div className="space-y-8">
            {groupMembers.map((group, index) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row items-center text-center sm:text-left bg-gray-100 rounded-lg p-6 shadow-md hover:shadow-lg transition"
              >
                <img src={group.image} alt={group.title} className="w-24 h-24 rounded-full object-cover mb-4 sm:mb-0 sm:mr-6" />
                <div>
                  <h4 className="text-lg font-bold text-gray-900">{group.title}</h4>
                  <p className="text-gray-500">{group.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* BOM Members Grid */}
        <div>
          <h3 className="text-2xl font-extrabold text-gray-900 text-center mb-6">Board of Management Members</h3>
          <div className="space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-12">
            {BOMMembers.map((staff, index) => (
                <div
                key={index}
                className="flex flex-col items-center text-center space-y-4 bg-gray-100 rounded-lg p-6 shadow-md hover:shadow-lg transition"
                >
                <img src={staff.image} alt={staff.name} className="w-24 h-24 rounded-full object-cover" />
                <div>
                    <h3 className="text-lg font-bold text-gray-900">{staff.name}</h3>
                    <p className="text-gray-500">{staff.title}</p>
                </div>
                </div>
            ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
