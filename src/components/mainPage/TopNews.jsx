export const TopNews = () => {
  return (
    <>
      <section class="w-full mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
    {/* <!-- Upper Sections wrapper --> */}
    <div class="flex flex-col gap-6 lg:flex-row-reverse">
      {/* <!-- RightPart: 4 small cards (grid) --> */}
      <div class="w-full lg:w-1/2 grid grid-cols-2 gap-4 order-2 lg:order-1">
        {/* <!-- Card 1 --> */}
        <article class="bg-white rounded-xl shadow border border-gray-200 overflow-hidden">
          <img src="/images/youh summit1.png" alt="" class="w-full h-40 md:h-48 lg:h-40 object-cover" />
          <div class="p-3 flex flex-col gap-2">
            <h3 class="text-[18px] leading-7">
              کوئٹہ میں نوجوانوں کے لیے لیڈرشپ ڈیولپمنٹ پروگرام کا انعقاد
              کوئٹہ کے ایک مقامی اسکول میں طلبہ کے لیے ایک روزہ تربیتی سیشن
              منعقد کیا گیا
            </h3>
            <p class="text-sm text-gray-500">5 منٹ پہلے</p>
          </div>
        </article>

        {/* <!-- Card 2 --> */}
        <article class="bg-white rounded-xl shadow border border-gray-200 overflow-hidden">
          <img src="/images/youh summit3.png" alt="" class="w-full h-40 md:h-48 lg:h-40 object-cover" />
          <div class="p-3 flex flex-col gap-2">
            <h3 class="text-[18px] leading-7">
              کوئٹہ میں نوجوانوں کے لیے لیڈرشپ ڈیولپمنٹ پروگرام کا انعقاد
              کوئٹہ کے ایک مقامی اسکول میں طلبہ کے لیے ایک روزہ تربیتی سیشن
              منعقد کیا گیا
            </h3>
            <p class="text-sm text-gray-500">5 منٹ پہلے</p>
          </div>
        </article>

        {/* <!-- Card 3 (hidden at <=1021px like your CSS) --> */}
        <article class="bg-white rounded-xl shadow border border-gray-200 overflow-hidden hidden md:block">
          <img src="/images/meeting.jpg" alt="" class="w-full h-40 md:h-48 lg:h-40 object-cover" />
          <div class="p-3 flex flex-col gap-2">
            <h3 class="text-[18px] leading-7">
              بلوچستان حکومت اور پی پی ایل کے درمیان شراکت، سوئی کی ترقی کیلئے "ماسٹر پلان" پر پیش رفت...
            </h3>
            <p class="text-sm text-gray-500">5 منٹ پہلے</p>
          </div>
        </article>

        {/* <!-- Card 4 (hidden at <=1021px like your CSS) --> */}
        <article class="bg-white rounded-xl shadow border border-gray-200 overflow-hidden hidden md:block">
          <img src="/images/quetta illegal construcion.png" alt="" class="w-full h-40 md:h-48 lg:h-40 object-cover" />
          <div class="p-3 flex flex-col gap-2">
            <h3 class="text-[18px] leading-7">
              کوئٹہ میں تجاوزات کے خلاف کارروائیاں جاری، شہر کو منظم بنانے کا عزم...
            </h3>
            <p class="text-sm text-gray-500">5 منٹ پہلے</p>
          </div>
        </article>
      </div>

      {/* <!-- LeftPart: Big feature --> */}
      <div class="w-full lg:w-1/2 order-1 lg:order-2">
        <article class="bg-white rounded-xl shadow border border-gray-200 overflow-hidden flex flex-col">
          <img src="/images/governor meet china's foreign minister.png" alt="" class="w-full h-56 md:h-72 lg:h-[420px] object-cover" />
          <div class="p-4 md:p-6 flex flex-col gap-3">
            <h3 class="text-[20px] md:text-[22px] leading-8">
              چینی ناظم الامور کی گورنر بلوچستان سے ملاقات، سی پیک اور سرمایہ کاری پر تبادلہ خیال اسلام آباد (نظربان بلوچستان نیوز):
            </h3>
            <p class="text-[16px] leading-8 text-gray-700">
              چینی ناظم الامور کی گورنر بلوچستان سے ملاقات، سی پیک اور سرمایہ کاری پر تبادلہ خیال...
            </p>
            <p class="text-sm text-gray-500">5 منٹ پہلے</p>
            <a
              class="inline-block px-5 py-2.5 rounded-lg bg-[rgb(18,16,69)] text-white font-semibold shadow hover:-translate-y-0.5 hover:shadow-lg transition"
              href="news.html?title=Breaking+News&date=21-11-2025&content=Yeh+poori+news+ka+matn+hai">
              Read More
            </a>
          </div>
        </article>
      </div>
    </div>
  </section>
    </>
  );
};
