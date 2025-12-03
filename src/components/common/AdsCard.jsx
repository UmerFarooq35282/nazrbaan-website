import React from "react";

function AdsCard({
  title = "نظربان بلوچستان اردو اب واٹس ایپ پر",
  description = "نظربان بلوچستان کی خبروں اور فیچرز کو اپنے فون پر حاصل کریں — سب سے پہلے باخبر رہنے کے لیے ابھی سبسکرائب کریں۔",
  buttonText = "سبسکرائب کرنے کے لیے کلک کریں۔",
  imageUrl = "https://ichef.bbci.co.uk/ace/ws/640/cpsprodpb/60db/live/d2e85e40-75bc-11ef-8c1a-df523ba43a9a.png.webp",
  linkUrl = "https://whatsapp.com/channel/0029VbApPeXElagmLdZQ2G3e",
}) {
  const handleButtonClick = () => {
    window.open(linkUrl, "_blank");
  };

  return (
    <section className="w-full my-6">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="bg-[rgb(18,16,69)] text-white rounded-2xl shadow-xl overflow-hidden md:p-10 flex flex-col md:flex-row items-center md:justify-between">
          {/* 🔹 Text Section */}
          <div className="w-full md:w-3/5 text-right">
            <h1 className="text-2xl md:text-3xl font-extrabold mb-3">
              {title}
            </h1>
            <p className="text-sm md:text-base leading-7 text-gray-100 mb-5">
              {description}
            </p>
            <button
              onClick={handleButtonClick}
              className="bg-white text-[rgb(18,16,69)] font-bold px-6 py-2 rounded-lg shadow-lg hover:bg-gray-200 transition-transform duration-300 hover:-translate-y-0.5"
            >
              {buttonText}
            </button>
          </div>

          {/* 🔹 Image Section */}
          <div className="hidden md:flex md:w-2/5 justify-center items-center relative">
            <img
              src={imageUrl}
              alt="Ad Visual"
              className="w-64 h-auto object-contain drop-shadow-2xl absolute top-[-20px] md:top-[-30px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AdsCard;
