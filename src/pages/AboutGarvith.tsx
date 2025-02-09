function AboutGarvith() {
  return (
    <>
      <div className=" pb-[70px]">
        <div className="h-[500px] w-full">
          <img
            src="src/assets/images/about-banner.jpg"
            alt=""
            className="object-cover h-full w-full"
          />
        </div>
        <div className="pt-[70px]">
          <div className=" text-outline">
            Gopal Garvith
          </div>
          <p className="main-text ">
            About
          </p>
        </div>
        <div className="bg-light-gray max-w-[1140px] mx-auto rounded-2xl p-10 text-base font-medium">
          <p className="text-center">
            Gopal "Garvith" – A Poet of Beauty and Expression
          </p>
          <br />
          <p>
            Gopal "Garvith" is a passionate poet known for his mastery of
            Shringar Ras, the poetry of beauty and emotions. Born on February
            10, 2000, in Gautampura, Indore, Madhya Pradesh, his love for
            literature and public speaking emerged at an early age.
          </p>{" "}
          <br />
          <p>
            He completed his schooling at a government school in Gautampura and
            earned a Bachelor's degree in Computer Science from Government
            College, Badnagar. Currently, he is pursuing a Master's in
            Journalism at Vikram University.
          </p>
          <br />
          <p>
            His journey into poetry began during school days, where he loved
            delivering speeches and reciting poems on special occasions like
            Independence Day and Republic Day. Initially, he wrote speeches for
            debate competitions, but soon, his words started flowing into
            poetry. His first poem, written in 12th grade, was dedicated to
            Maharana Pratap.
          </p>
          <br />
          <p>
            With guidance from his mentor, poet Pankaj Prajapat Ji, he refined
            his writing. His first major poetry recitation (Kavyapath) took
            place at a Kavi Sammelan in Lord Rama School during his college
            years, and from there, he never looked back.
          </p>
          <br />
          <p>
            Gopal "Garvith" has performed on prestigious stages across multiple
            states, including Chhattisgarh, Delhi, Uttar Pradesh, and Rajasthan,
            spreading the love for Hindi poetry and emotions among audiences. He
            has also had the honor of performing alongside legendary poets like
            Dr. Hariom Pawar, Sudip Bhola, and Shashikant Yadav, shining among
            the biggest stars of Kavi Sammelans.
          </p>
          <p>
            He also excelled in oratory, participating in the prestigious Youth
            Festival organized by the Ministry of Higher Education, where he
            represented his college, district, and university, eventually
            competing at the state and zonal levels.
          </p>
          <br />
          <p>
            His dedication to poetry and Hindi literature earned him the
            Kavyadeep Samman from Matribhasha Unnayan Sansthan and recognition
            at Delhi Dastak. His journey continues, as he shares his poetic
            voice with the world, celebrating the richness of language and
            expression.
          </p>
          <br />
        </div>
        <img
          src="src/assets/images/quotes.png"
          alt=""
          className="w-[85px] opacity-30 mx-auto"
        />
        <div className=" w-fit mx-auto">
          <p className="text-4xl font-semibold text-[#16202f] text-justify max-w-5xl mx-auto leading-[66px] py-8">
            {[
              "उस हृदय का धाम होने के लिए।",
              "एक सिया का राम होने के लिए।",
              "है किए कितने जतन मैने सुनो।",
              "आपका उपनाम होने के लिए।",
            ].map((line, i) => (
              <span key={i} className={`typed-line delay-${i + 1} block`}>
                {line}
              </span>
            ))}
          </p>
        </div>
        <p className="text-center">✍🏻 गोपाल 'गर्वित'</p>
      </div>
    </>
  );
}
export default AboutGarvith;
