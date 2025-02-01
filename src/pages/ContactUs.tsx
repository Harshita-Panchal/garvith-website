function ContactUs() {
  return (
    <>
      <div>
        <div className="py-[70px]">
          <div className="text-8xl font-bold text-outline text-center">
            Gopal Garvith
          </div>
          <p className="text-red-warm text-6xl font-bold text-center relative bottom-7 ">
            Contact Us
          </p>
          <p className="text-center mb-3 text-[22px] font-semibold tracking-[0.2px] max-w-4xl mx-auto">
            "Need assistance?
            <br />
            Reach out by phone 📞 or email ✉️ today!"
          </p>
        </div>
        <div className="bg-orange-peel py-24">
          <div className="max-w-[1140px] mx-auto grid grid-cols-3 gap-x-5 text-center min-h-[370px]">
            <div className="bg-red-warm rounded-2xl h-full mx-5 flex flex-col justify-center px-2.5">
              <h3 className="text-white text-3xl font-semibold mb-2">E-Mail</h3>
              <p className="text-white text-lg">Kavigauravsakshi@gmail.com</p>
            </div>
            <div className="bg-red-warm rounded-2xl h-full mx-5 flex flex-col justify-center px-2.5">
              <h3 className="text-white text-3xl font-semibold mb-2">
                Call Now
              </h3>
              <p className="text-white text-lg">+91 9876543210</p>
            </div>
            <div className="bg-red-warm rounded-2xl h-full mx-5 flex flex-col justify-center px-2.5">
              <h3 className="text-white text-3xl font-semibold mb-2">
                Location
              </h3>
              <p className="text-white text-lg">
                G3/C, 7th Street, Shree G Valley Colony, Bicholi Mardana,
                Indore, M.P.
              </p>
            </div>
          </div>
        </div>
        <div className=" py-[70px]">
          <img
            src="src/assets/images/quotes.png"
            alt=""
            className="w-[85px] opacity-30 mx-auto"
          />
          <p className="text-4xl font-semibold font-sahitya text-[#16202f] max-w-5xl mx-auto text-center leading-[66px] py-8">
            उस हृदय का धाम होने के लिए।
            <br /> एक सिया का राम होने के लिए। <br />
            है किए कितने जतन मैने सुनो। <br />
            आपका उपनाम होने के लिए।
            <br />
          </p>
          <p className="text-center">✍🏻 गोपाल 'गर्वित'</p>
        </div>
      </div>
    </>
  );
}
export default ContactUs;
