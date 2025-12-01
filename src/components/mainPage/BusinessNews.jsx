import { useEffect, useState } from "react";
import { getCategoryNews } from "../../api/news/news.api";
import { dummyBusinessNews } from "../../utils/dummy.data";
import CardSlider from "../common/CardSlider";

export default function BusinessNews() {
  const [businessNews, setBusinesssNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getBusinessNews() {
      try {
        const data = await getCategoryNews("businesss");
        if (data.length == 0) {
          setBusinesssNews(dummyBusinessNews);
        } else {
          setBusinesssNews(data);
        }
      } catch (error) {
        console.log("Error in getting data ::", error.message);
        setBusinesssNews(dummyBusinessNews);
      } finally {
        setLoading(false);
      }
    }

    getBusinessNews();
  }, []);

  return (
    <section
      id="Business"
      className="w-full mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-6"
    >
      <h1 className="text-2xl md:text-3xl font-bold mb-4">کاروبار</h1>
      <CardSlider dataList={businessNews} loading={loading} />
    </section>
  );
}
