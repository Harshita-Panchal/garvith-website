// import React from "react";

const youtubeVideos = [
  {
    url: "https://www.youtube.com/watch?v=KDt9V9UkRWY",
  },
  {
    url: "https://www.youtube.com/watch?v=0rWZAHxpX0A",
  },
  {
    url: "https://www.youtube.com/watch?v=5p-jJskRSIE&t=25s",
  },
  {
    url: "https://www.youtube.com/watch?v=lpOY5gPUZOU",
  },
  {
    url: "https://www.youtube.com/watch?v=GtzTwc2guu0",
  },
];
// Function to extract the video ID
const extractVideoId = (url: string) => {
  const match = url.match(/[?&]v=([^&]+)/) || url.match(/youtu\.be\/([^?]+)/);
  return match ? match[1] : null;
};
function Performance() {
  return (
    <>
      <div>
        <div className="py-[70px]">
          <div className="text-8xl font-bold text-outline text-center">
            Gopal Garvith
          </div>
          <p className="text-deep-blue text-6xl font-bold text-center relative bottom-7 ">
            Videos
          </p>
          <p className="text-center mb-3 text-[22px] font-semibold tracking-[0.2px] max-w-4xl mx-auto">
            Thank you for all the love! Keep supporting and enjoy our video
            gallery!" ❤️🎥
          </p>
        </div>
        <div className="bg-light-gray py-14">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 p-4 max-w-[1140px] mx-auto">
            {youtubeVideos.map((video, index) => {
              const videoId = extractVideoId(video.url);
              return (
                videoId && (
                  <div key={index} className="flex justify-center">
                    <iframe
                      width="550"
                      height="310"
                      src={`https://www.youtube.com/embed/${videoId}`}
                      title={`YouTube Video ${index + 1}`}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="rounded-2xl"
                    ></iframe>
                  </div>
                )
              );
            })}
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
              "पुनः  नयनों को  भिगोया जाएगा।",
              "पूर्णकालिक  दुख संजोया जाएगा।",
              "अश्रुमोती  को   पतन  से रोक कर।",
              "फिर  कविता  में  पिरोया  जाएगा। ",
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
export default Performance;
