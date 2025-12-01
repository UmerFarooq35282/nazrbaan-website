import { useEffect, useState } from "react";
import { getCategoryNews } from "../../api/news/news.api";
import { dummyLitratureNews } from "../../utils/dummy.data";
import CardSlider from "../common/CardSlider";

export default function LitratureNews() {
  const [litratureNews, setLitraturesNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getLitratureNews() {
      try {
        const data = await getCategoryNews("litrature");
        if (data.length == 0) {
          setLitraturesNews(dummyLitratureNews);
        } else {
          setLitraturesNews(data);
        }
      } catch (error) {
        console.log("Error in getting data ::", error.message);
        setLitraturesNews(dummyLitratureNews);
      } finally {
        setLoading(false);
      }
    }

    getLitratureNews();
  }, []);

  return (
    <section
      id="litrature"
      className="w-full mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-6"
    >
      <h1 className="text-2xl md:text-3xl font-bold mb-4">کالم</h1>
      <CardSlider dataList={litratureNews} loading={loading} />
    </section>
  );
}
