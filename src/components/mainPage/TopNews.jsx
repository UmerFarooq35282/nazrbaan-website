import { Link } from "react-router-dom";

export const TopNews = () => {
  return (
    <>
      <section className="w-full mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
        {/* 🔹 Upper Sections wrapper */}
        <div className="flex flex-col gap-6 lg:flex-row-reverse">
          {/* 🔹 RightPart: 4 small cards (grid) */}
          <div className="w-full lg:w-1/2 grid grid-cols-2 gap-4 order-2 lg:order-1">
            {/* 📰 Card 1 */}
            <Link
              to={`newsDetail/1`}
              className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden hover:shadow-lg transition-transform duration-300 hover:scale-[1.02]"
            >
              <img
                src="/images/youh summit1.png"
                alt="Youth Summit"
                className="w-full h-48 md:h-56 lg:h-52 object-cover"
              />
              <div className="p-3 pb-1 flex flex-col gap-1">
                <h3 className="text-[18px] leading-7 font-[mainFont]">
                  کوئٹہ میں نوجوانوں کے لیے لیڈرشپ ڈیولپمنٹ پروگرام کا انعقاد
                  کوئٹہ کے ایک مقامی اسکول میں طلبہ کے لیے ایک روزہ تربیتی سیشن
                  منعقد کیا گیا
                </h3>
                <p className="text-sm text-gray-500 mt-1 mb-1">5 منٹ پہلے</p>
              </div>
            </Link>

            {/* 📰 Card 2 */}
            <Link
              to={`newsDetail/2`}
              className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden hover:shadow-lg transition-transform duration-300 hover:scale-[1.02]"
            >
              <img
                src="/images/youh summit3.png"
                alt="Youth Summit"
                className="w-full h-48 md:h-56 lg:h-52 object-cover"
              />
              <div className="p-3 pb-1 flex flex-col gap-1">
                <h3 className="text-[18px] leading-7 font-[mainFont]">
                  کوئٹہ میں نوجوانوں کے لیے لیڈرشپ ڈیولپمنٹ پروگرام کا انعقاد
                  کوئٹہ کے ایک مقامی اسکول میں طلبہ کے لیے ایک روزہ تربیتی سیشن
                  منعقد کیا گیا
                </h3>
                <p className="text-sm text-gray-500 mt-1 mb-1">5 منٹ پہلے</p>
              </div>
            </Link>

            {/* 📰 Card 3 (hidden ≤1021px) */}
            <Link
              to={`newsDetail/3`}
              className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden hover:shadow-lg transition-transform duration-300 hover:scale-[1.02] hidden md:block"
            >
              <img
                src="/images/meeting.jpg"
                alt="Meeting"
                className="w-full h-48 md:h-56 lg:h-52 object-cover"
              />
              <div className="p-3 pb-1 flex flex-col gap-1">
                <h3 className="text-[18px] leading-7 font-[mainFont]">
                  بلوچستان حکومت اور پی پی ایل کے درمیان شراکت، سوئی کی ترقی
                  کیلئے "ماسٹر پلان" پر پیش رفت...
                </h3>
                <p className="text-sm text-gray-500 mt-1 mb-1">5 منٹ پہلے</p>
              </div>
            </Link>

            {/* 📰 Card 4 (hidden ≤1021px) */}
            <Link
              to={`newsDetail/4`}
              className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden hover:shadow-lg transition-transform duration-300 hover:scale-[1.02] hidden md:block"
            >
              <img
                src="/images/quetta illegal construcion.png"
                alt="Illegal Construction"
                className="w-full h-48 md:h-56 lg:h-52 object-cover"
              />
              <div className="p-3 pb-1 flex flex-col gap-1">
                <h3 className="text-[18px] leading-7 font-[mainFont]">
                  کوئٹہ میں تجاوزات کے خلاف کارروائیاں جاری، شہر کو منظم بنانے
                  کا عزم...
                </h3>
                <p className="text-sm text-gray-500 mt-1 mb-1">5 منٹ پہلے</p>
              </div>
            </Link>
          </div>

          {/* 🔹 LeftPart: Big Feature Card */}
          <div className="w-full lg:w-1/2 order-1 lg:order-2">
            <Link
              to={`newsDetail/5`}
              className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden flex flex-col hover:shadow-lg transition-transform duration-300 hover:scale-[1.02]"
            >
              <img
                src="/images/governor meet china's foreign minister.png"
                alt="Governor Meeting"
                className="w-full h-56 md:h-72 lg:h-[420px] object-cover"
              />
              <div className="p-4 md:p-6 flex flex-col gap-3">
                <h3 className="text-[20px] md:text-[22px] leading-8 font-[mainFont]">
                  چینی ناظم الامور کی گورنر بلوچستان سے ملاقات، سی پیک اور
                  سرمایہ کاری پر تبادلہ خیال اسلام آباد (نظربان بلوچستان نیوز):
                </h3>
                <p className="text-[16px] leading-8 text-gray-700">
                  چینی ناظم الامور کی گورنر بلوچستان سے ملاقات، سی پیک اور
                  سرمایہ کاری پر تبادلہ خیال...
                </p>
                <p className="text-sm text-gray-500">5 منٹ پہلے</p>
                <span className="inline-block px-5 py-2.5 rounded-lg bg-[rgb(18,16,69)] text-white font-semibold shadow hover:-translate-y-0.5 hover:shadow-lg transition">
                  مزید پڑھیں
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};
