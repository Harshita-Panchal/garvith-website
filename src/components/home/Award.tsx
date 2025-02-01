const awards = [
  {
    image: "src/assets/images/testing-img.png",
    title: "Honoured by the Governor of Karnataka, Dr. Thawarchand Gehlot Ji",
    description:
      "Honoured under the Hindi Conference 2024 at Indian Air Force Training Command Headquarters, Bangalore.",
  },
  {
    image: "src/assets/images/testing-img.png",
    title: "Yuva Geetkar Award Rs. 51000/- by Yug Kavi Dr. Kumar Vishwas Ji",
    description:
      "Awarded 'Yuva Geetkar Award' (Rs. 51000/-) in September 2024 by Vishwas Trust run by Dr. Kumar Vishwas Ji.",
  },
  {
    image: "src/assets/images/testing-img.png",
    title: "Honored with 'MP Ke Nayak' Title by MP News Indore",
    description:
      "Honored by the Chief Minister of Madhya Pradesh, Dr. Mohan Yadav Ji, in October 2024.",
  },
];

function Home() {
  return (
    <>
      <div>
        <div className="pt-[70px]">
          <div className="text-8xl font-bold text-outline text-center">
            Gopal Garvith
          </div>
          <p className="text-secondary-orange text-6xl font-bold text-center relative bottom-7 ">
            Awards
          </p>
          <p className="text-center mb-3 text-xl">
            Apart from this, Garvith has also been decorated with these honors.
          </p>
        </div>
        <div className="bg-[#E0E2EE]">
          <div className="grid md:grid-cols-3 gap-6 py-10 max-w-[1140px] mx-auto">
            {awards.map((award) => (
              <div className="bg-white rounded-xl shadow-lg p-4 max-w-sm">
                <img
                  src={award.image}
                  alt={award.title}
                  className="rounded-t-xl w-full h-64 object-cover"
                />
                <div className="p-4 text-center">
                  <h2 className="text-lg font-bold text-primary-blue">
                    {award.title}
                  </h2>
                  <p className="text-gray-700 mt-2">{award.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="py-14"></div>
        <div className="bg-[#E0E2EE] py-24">
          <div className="grid md:grid-cols-3 gap-6 py-16 px-6 max-w-[1140px] mx-auto bg-white rounded-2xl shadow-[0_0_9px_2px_rgba(0,0,0,0.15)]">
            {awards.map((award) => (
              <div className=" p-4 max-w-sm">
                <img
                  src={award.image}
                  alt={award.title}
                  className="rounded-t-xl w-full h-64 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-lg font-bold text-secondary-orange">
                    {award.title}
                  </h2>
                  <p className=" font-medium mt-2">{award.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
      </div>
    </>
  );
}

export default Home;
