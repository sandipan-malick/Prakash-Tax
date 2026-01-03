export default function Team() {
  // Example team data
  const team = [
    {
      name: "Prakash Chandra Dalui",
      role: "Owner",
      image: "/images/owner.jpg",
    },
    {
      name: "Samya Dutta",
      role: "Team Member",
      image: "/images/samya.jpg",
    },
    {
      name: "Sayan Santra",
      role: "Team Member",
      image: "/images/sayan.jpg",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Meet Our Team</h2>
        <p className="text-gray-600 mb-12">
          Dedicated professionals providing trusted tax and documentation services.
        </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition"
            >
              <div className="w-40 h-40 mx-auto rounded-full overflow-hidden mb-4">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-gray-500">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
