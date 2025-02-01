function AboutGarvith() {
  return (
    <>
      <div className=" py-[70px]">
        <img
          src="src/assets/images/quotes.png"
          alt=""
          className="w-[85px] opacity-30 mx-auto"
        />
        <div className=" w-fit mx-auto">
          {/* <p className=" typed-out text-4xl font-semibold font-sahitya text-[#16202f] max-w-5xl mx-auto text-center leading-[66px] py-8 nowrap">
            उस हृदय का धाम होने के लिए।
            <br />
            एक सिया का राम होने के लिए।
            <br />
            है किए कितने जतन मैने सुनो।
            <br />
            आपका उपनाम होने के लिए।
            <br />
          </p> */}
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
