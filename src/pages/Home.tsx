import AboutUs from "../components/home/AboutUs";
import Award from "../components/home/Award";
import FollowersCounter from "../components/home/FollowersCounter";
function Home() {
  return (
    <>
      <AboutUs />
      <Award />
      <div className=" py-[70px]">
        <img
          src="src/assets/images/quotes.png"
          alt=""
          className="w-[85px] opacity-30 mx-auto"
        />
        <p className="text-4xl font-semibold text-[#16202f] max-w-5xl mx-auto text-center leading-[66px] py-8">
          उस हृदय का धाम होने के लिए।
          <br /> एक सिया का राम होने के लिए। <br />
          है किए कितने जतन मैने सुनो। <br />
          आपका उपनाम होने के लिए।
          <br />
        </p>
        <p className="text-center">✍🏻 गोपाल 'गर्वित'</p>
      </div>

      {/* Social Media */}
      <div>
        <div className="pt-[70px]">
          <div className="text-8xl font-bold text-outline text-center">
            Gopal Garvith
          </div>
          <p className="text-red-warm text-6xl font-bold text-center relative bottom-7 ">
            Social Media
          </p>
          <p className="text-center mb-3 text-xl">
            "Thank you so much for the love; may it continue to grow!" ❤️
          </p>
        </div>
        <FollowersCounter />
      </div>
    </>
  );
}

export default Home;
