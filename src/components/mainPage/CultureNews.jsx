import { useEffect, useState } from "react";
import { getCategoryNews } from "../../api/news/news.api";
import { dummyCultureNews } from "../../utils/dummy.data";
import CardSlider from "../common/CardSlider";

export default function CultureNews() {
  const [cultureNews, setCulturesNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getCultureNews() {
      try {
        const data = await getCategoryNews("cultures");
        if (data.length == 0) {
          setCulturesNews(dummyCultureNews);
        } else {
          setCulturesNews(data);
        }
      } catch (error) {
        console.log("Error in getting data ::", error.message);
        setCulturesNews(dummyCultureNews);
      } finally {
        setLoading(false);
      }
    }

    getCultureNews();
  }, []);

  return (
    <section
      id="culture"
      className="w-full mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-6"
    >
      <h1 className="text-2xl md:text-3xl font-bold mb-4">ثقافت</h1>
      <CardSlider dataList={cultureNews} loading={loading} />
    </section>
  );
}
