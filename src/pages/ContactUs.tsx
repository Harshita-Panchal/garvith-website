function ContactUs() {
  return (
    <>
      <div>
        <div className="py-[70px]">
          <div className="text-8xl font-bold text-outline text-center">
            Gopal Garvith
          </div>
          <p className="text-deep-blue text-6xl font-bold text-center relative bottom-7 ">
            Contact Us
          </p>
          <p className="text-center mb-3 text-[22px] font-semibold tracking-[0.2px] max-w-4xl mx-auto">
            "Need assistance?
            <br />
            Reach out by phone 📞 or email ✉️ today!"
          </p>
        </div>
        <div className="bg-light-gray py-24">
          <div className="max-w-[1140px] mx-auto grid grid-cols-3 gap-x-5 text-center min-h-[370px]">
            <div className="bg-deep-blue rounded-2xl h-full mx-5 flex flex-col justify-center px-2.5">
              <h3 className="text-white text-3xl font-semibold mb-2">E-Mail</h3>
              <p className="text-white text-lg">gopalgarvit1718@gmail.com</p>
            </div>
            <div className="bg-deep-blue rounded-2xl h-full mx-5 flex flex-col justify-center px-2.5">
              <h3 className="text-white text-3xl font-semibold mb-2">
                Call Now
              </h3>
              <p className="text-white text-lg">+91 6264576510</p>
            </div>
            <div className="bg-deep-blue rounded-2xl h-full mx-5 flex flex-col justify-center px-2.5">
              <h3 className="text-white text-3xl font-semibold mb-2">
                Location
              </h3>
              <p className="text-white text-lg">
              1st left, 5, Radhe Krishna colony, gautampura, block depalpur, district Indore, M.P.
              </p>
            </div>
          </div>
        </div>
        <div className=" py-[70px]">
          <img
            src="/images/quotes.png"
            alt=""
            className="w-[85px] opacity-30 mx-auto"
          />
          <p className="md:text-4xl text-2xl font-semibold text-brownish-gray max-w-5xl mx-auto text-center md:leading-[66px] py-8">
            {[
              "प्रेम का  सार  बन  के तू आए ।",
              "हर्ष का  द्वार  बन  के  तू आए।",
              "जब भी में जन्म इस धरा पर लूँ।",
              "मित्र  हर  बार  बन  के  तू आए।",
            ].map((line, i) => (
              <span key={i} className={`typed-line delay-${i + 1} block`}>
                {line}
              </span>
            ))}
          </p>
          <p className="text-center">✍🏻 गोपाल 'गर्वित'</p>
        </div>
      </div>
    </>
  );
}
export default ContactUs;
