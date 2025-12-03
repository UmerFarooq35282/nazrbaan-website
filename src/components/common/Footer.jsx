function Footer() {
  return (
    <footer class="bg-[#111] text-white">
      <div class="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
        <p class="text-xl md:text-[26px] mb-3">
          جانئیے کہ آپ نظربان بلوچستان پر کیوں اعتماد کر سکتے ہیں
        </p>
        <hr class="border-gray-700" />

        <ul class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 my-5">
          <li>
            <a
              class="hover:underline"
              href="https://whatsapp.com/channel/0029VbApPeXElagmLdZQ2G3e"
              target="_blank"
            >
              {" "}
              نظربان بلوچستان سے رابطہ کریں
            </a>
          </li>
          <li>
            <a
              class="hover:underline"
              href="https://www.facebook.com/share/1Cq7JWDFbb/"
              target="_blank"
            >
              {" "}
              نظربان بلوچستان کے بارے میں
            </a>
          </li>
        </ul>

        <hr class="border-gray-700" />
        <p class="mt-3 text-sm md:text-base leading-7">
           نظربان بلوچستان - نظربان
          بلوچستان بیرونی ویب سائٹس کے مواد کا ذمہ دار نہیں۔ 
        </p>
      </div>
    </footer>
  );
}

export default Footer;
