import React from "react";

function SocialMedia() {
  return (
    <section class="w-full mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-8">
      <h1 class="text-2xl md:text-3xl font-bold mb-4">
        نظربان بلوچستان سوشل میڈیا
      </h1>
      <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        <a
          href="https://whatsapp.com/channel/0029VbApPeXElagmLdZQ2G3e"
          class="flex items-center justify-center gap-3 bg-white border border-gray-200 rounded-xl p-3 hover:shadow"
        >
          <img src="/images/whatsapp.webp" alt="" class="w-12 h-12" />
          <h2 class="text-lg font-semibold">whatsapp</h2>
        </a>

        <a
          href="https://www.facebook.com/share/1Cq7JWDFbb/"
          class="flex items-center justify-center gap-3 bg-white border border-gray-200 rounded-xl p-3 hover:shadow"
        >
          <img
            src="/images/Logo_de_Facebook.png"
            alt=""
            class="w-12 h-12"
          />
          <h2 class="text-lg font-semibold">Facebook</h2>
        </a>

        <a
          href="https://www.instagram.com/nazrbanb?igsh=bjg5YjhtYTF4bzln"
          class="flex items-center justify-center gap-3 bg-white border border-gray-200 rounded-xl p-3 hover:shadow"
        >
          <img src="/images/instagram.png" alt="" class="w-12 h-12" />
          <h2 class="text-lg font-semibold">Instagram</h2>
        </a>

        <a
          href="https://x.com/NazrbanNews?t=Lj-YfnBCnNxQvlyMOlYYnQ&s=09"
          class="flex items-center justify-center gap-3 bg-white border border-gray-200 rounded-xl p-3 hover:shadow"
        >
          <img src="/images/X.webp" alt="" class="w-12 h-12" />
          <h2 class="text-lg font-semibold">Twitter</h2>
        </a>

        <a
          href="https://www.tiktok.com/@nazrban.balochistan?_r=1&_t=ZS-91H9sBRcCiS"
          class="flex items-center justify-center gap-3 bg-white border border-gray-200 rounded-xl p-3 hover:shadow"
        >
          <img src="/images/tiktok.jpg" alt="" class="w-12 h-12" />
          <h2 class="text-lg font-semibold">Tiktok</h2>
        </a>
      </div>
    </section>
  );
}

export default SocialMedia;
