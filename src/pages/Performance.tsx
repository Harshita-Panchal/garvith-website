import React from "react";

const youtubeVideos = [
  {
    url: "https://youtu.be/lBvbNxiVmZA?si=oBWVZLel_LvBCwdJ",
  },
  {
    url: "https://youtu.be/lBvbNxiVmZA?si=oBWVZLel_LvBCwdJ",
  },
  {
    url: "https://youtu.be/lBvbNxiVmZA?si=oBWVZLel_LvBCwdJ",
  },
  {
    url: "https://youtu.be/lBvbNxiVmZA?si=oBWVZLel_LvBCwdJ",
  },
  {
    url: "https://youtu.be/lBvbNxiVmZA?si=oBWVZLel_LvBCwdJ",
  },
  {
    url: "https://youtu.be/lBvbNxiVmZA?si=oBWVZLel_LvBCwdJ",
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
          <p className="text-red-warm text-6xl font-bold text-center relative bottom-7 ">
            Videos
          </p>
          <p className="text-center mb-3 text-[22px] font-semibold tracking-[0.2px] max-w-4xl mx-auto">
            Thank you for all the love! Keep supporting and enjoy our video
            gallery!" ❤️🎥
          </p>
        </div>
        <div className="bg-orange-peel py-14">
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
export default Performance;
