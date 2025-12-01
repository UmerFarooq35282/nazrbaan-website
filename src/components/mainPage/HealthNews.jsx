import { useEffect, useState } from "react";
import { getCategoryNews } from "../../api/news/news.api";
import { dummyHealthNews } from "../../utils/dummy.data";
import CardSlider from "../common/CardSlider";

export default function HealthNews() {
  const [healthNews, setHealthsNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getHealthNews() {
      try {
        const data = await getCategoryNews("healths");
        if (data.length == 0) {
          setHealthsNews(dummyHealthNews);
        } else {
          setHealthsNews(data);
        }
      } catch (error) {
        console.log("Error in getting data ::", error.message);
        setHealthsNews(dummyHealthNews);
      } finally {
        setLoading(false);
      }
    }

    getHealthNews();
  }, []);

  return (
    <section
      id="health"
      className="w-full mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-6"
    >
      <h1 className="text-2xl md:text-3xl font-bold mb-4">صحت</h1>
      <CardSlider dataList={healthNews} loading={loading} />
    </section>
  );
}
