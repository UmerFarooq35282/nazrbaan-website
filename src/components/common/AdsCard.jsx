import React from "react";

function AdsCard() {
  return (
    <section class="w-full my-6">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="bg-[rgb(18,16,69)] text-white rounded-2xl shadow-xl overflow-hidden md:p-10 flex flex-col md:flex-row items-center md:justify-between">
          {/* <!-- Text Section --> */}
          <div class="w-full md:w-3/5 text-right">
            <h1 class="text-2xl md:text-3xl font-extrabold mb-3">
              نظربان بلوچستان اردو اب واٹس ایپ پر
            </h1>
            <p class="text-sm md:text-base leading-7 text-gray-100 mb-5">
              نظربان بلوچستان کی خبروں اور فیچرز کو اپنے فون پر حاصل کریں — سب
              سے پہلے باخبر رہنے کے لیے ابھی سبسکرائب کریں۔
            </p>
            <button class="bg-white text-[rgb(18,16,69)] font-bold px-6 py-2 rounded-lg shadow-lg hover:bg-gray-200 transition-transform duration-300 hover:-translate-y-0.5">
              سبسکرائب کرنے کے لیے کلک کریں۔
            </button>
          </div>

          {/* <!-- Image Section --> */}
          <div class="hidden md:flex md:w-2/5 justify-center items-center relative">
            <img
              src="https://ichef.bbci.co.uk/ace/ws/640/cpsprodpb/60db/live/d2e85e40-75bc-11ef-8c1a-df523ba43a9a.png.webp"
              alt="WhatsApp Ad"
              class="w-64 h-auto object-contain drop-shadow-2xl absolute top-[-20px] md:top-[-30px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AdsCard;
