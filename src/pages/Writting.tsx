import { useEffect, useState } from "react";
import { tabs, tabContent } from "../store/poetry";

function PoetryTabs() {
  const [selectedTab, setSelectedTab] = useState<string | null>("muktak");
  const [selectedTabContent, setSelectedTabContent] = useState<
    { title: string; description: string[] }[]
  >([]);
  const [selectedContentId, setSelectedContentId] = useState<number | null>(
    null
  );

  // Update selectedTabContent when tab changes
  useEffect(() => {
    setSelectedTabContent(tabContent[selectedTab] || []);
    setSelectedContentId(null); // Reset selected content when switching tabs
  }, [selectedTab]);

  return (
    <>
      <div className="pt-[70px]  max-w-6xl  mx-auto">
        <div className="pb-10">
          <div className="text-8xl font-bold text-outline text-center">
            Gopal Garvith
          </div>
          <p className="text-deep-blue text-6xl font-bold text-center relative bottom-7 ">
            Writting
          </p>
          <p className="text-center mb-3 text-[22px] font-semibold tracking-[0.2px] max-w-4xl mx-auto">
            Thank you for all the love! Keep supporting and enjoy our Writting!"
            ❤️
          </p>
        </div>
        {/* Tab Headers */}
        <div className="flex justify-evenly items-center gap-x-2  border shadow-xl rounded-xl mx-5 my-10 p-1">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`cursor-box tab w-full text-center font-medium cursor-pointer hover:bg-deep-blue hover:text-white p-4 rounded-xl ${
                selectedTab === tab.id ? "bg-deep-blue text-white" : ""
              }`}
              onClick={() => setSelectedTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Show Selected Content */}
        {selectedContentId !== null ? (
          <div className="text-center text-2xl font-bold md:p-12 p-5 bg-[#EFF4FB] rounded-[20px] mx-5 my-14">
            <button
              onClick={() => setSelectedContentId(null)}
              className="text-left w-full text-bright-red font-medium px-4 py-2 rounded-lg"
            >
              {/* <img src="src/assets/images/back-arrow.svg" alt="" /> */}
              Go Back
            </button>
            <p>{selectedTabContent[selectedContentId].title}</p>
            <div className="mt-4 text-lg space-y-2">
              {selectedTabContent[selectedContentId].description.map(
                (line, index) => (
                  <p key={index} className="text-gray-700">
                    {line}
                  </p>
                )
              )}
            </div>
          </div>
        ) : (
          // Show All Content if no item is selected
          <div className="my-14 text-center text-lg font-medium space-y-3 md:p-12 p-5 bg-[#EFF4FB] rounded-[20px] mx-5">
            {selectedTabContent.map((line, index) => (
              <p
                key={index}
                className="leading-relaxed p-2 bg-white border border-[#E4E4E4] rounded-[10px] md:text-2xl text-lg font-bold cursor-pointer hover:bg-gray-200"
                onClick={() => setSelectedContentId(index)}
              >
                {line.title}
              </p>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
export default PoetryTabs;
