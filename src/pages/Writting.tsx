import { useState } from "react";

const tabs = [
  { id: "muktak", label: "मुक्तक" },
  { id: "kavita", label: "कविता" },
  { id: "geet", label: "गीत" },
  { id: "ghazal", label: "ग़ज़ल" },
  { id: "nazm", label: "नज़्म" },
  { id: "shayari", label: "शायरी" },
];

const tabContent: { [key: string]: string | string[] } = {
  muktak: [
    "आपका  उपनाम  होने के लिए|",
    "फिर  कविता  में  पिरोया  जाएगा। ",
    "जो  मेंरे  खातिर  ताज  बनाने  वाले थे।",
    "रूखमणी  साथ  पूजी  नही  जा  सकी।",
    "अगर हर देश वासी का हृदय श्री राम हो जाये।",
    "मेरे इजहार  से पहले  ही तुम इजहार कर दो ना।।",
    "हर  मंदिर  में  मन्नत  के  धागे  तुमको  मिल जाएंगे",
    "जिंदगी  के  चार  भी  बाकी  नही।",
    "टोकरी   में   सवार   आया  है।",
    "ये वही  आवाज  है पहचान  लो।",
    "पूर्णिमा की रात गंगा घाट पर।",
    "पर्स  में  रख्खी  हुई  तस्वीर  को।",
    "अब  बराबर  बात  है  मेरे  लिए।",
    "चार धामों  से  कुछ नही होगा।",
    "मित्र  हर  बार  बन  के  तू आए।",
  ],
  kavita: ["यह कविता का कंटेंट है।", "मित्र  हर  बार  बन  के  तू आए।"],
  geet: ["यह गीत का कंटेंट है।", "मित्र  हर  बार  बन  के  तू आए।"],
  ghazal: ["यह ग़ज़ल का कंटेंट है।", "मित्र  हर  बार  बन  के  तू आए।"],
  nazm: ["यह नज़्म का कंटेंट है।", "मित्र  हर  बार  बन  के  तू आए।"],
  shayari: ["यह शायरी का कंटेंट है।", "मित्र  हर  बार  बन  के  तू आए।"],
};

function PoetryTabs() {
  const [selectedTab, setSelectedTab] = useState("muktak");
  return (
    <>
      <div className="pt-[70px]  max-w-6xl  mx-auto">
        <div className="pb-10">
          <div className="text-8xl font-bold text-outline text-center">
            Gopal Garvith
          </div>
          <p className="text-primary-blue text-6xl font-bold text-center relative bottom-7 ">
            Writting
          </p>
          <p className="text-center mb-3 text-[22px] font-semibold tracking-[0.2px] max-w-4xl mx-auto">
            Thank you for all the love! Keep supporting and enjoy our Writting!"
            ❤️
          </p>
        </div>
        {/* Tab Headers */}
        <div className="flex justify-evenly items-center gap-x-2  border shadow-2xl rounded-xl  my-10 p-1">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`cursor-box tab w-full text-center font-medium cursor-pointer hover:bg-primary-blue hover:text-white p-4 rounded-xl ${
                selectedTab === tab.id ? "bg-primary-blue text-white" : ""
              }`}
              onClick={() => setSelectedTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content Line by Line */}
        <div className="mt-4 text-center text-lg font-medium space-y-2">
          {(Array.isArray(tabContent[selectedTab])
            ? (tabContent[selectedTab] as string[]) // Type assertion
            : [tabContent[selectedTab] as string]
          ).map((line, index) => (
            <p key={index} className="leading-relaxed">
              {line}
            </p>
          ))}
        </div>
      </div>
    </>
  );
}
export default PoetryTabs;
