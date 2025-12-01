import { useEffect, useState } from "react";
import { getCategoryNews } from "../../api/news/news.api";
import { dummyScienceAndTechnologyNews } from "../../utils/dummy.data";
import CardSlider from "../common/CardSlider";

export default function ScienceTechNews() {
  const [scienceTechNews, setScienceTechsNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getScienceTechNews() {
      try {
        const data = await getCategoryNews("science & technology");
        if (data.length == 0) {
          setScienceTechsNews(dummyScienceAndTechnologyNews);
        } else {
          setScienceTechsNews(data);
        }
      } catch (error) {
        console.log("Error in getting data ::", error.message);
        setScienceTechsNews(dummyScienceAndTechnologyNews);
      } finally {
        setLoading(false);
      }
    }

    getScienceTechNews();
  }, []);

  return (
    <section
      id="scienceTech"
      className="w-full mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-6"
    >
      <h1 className="text-2xl md:text-3xl font-bold mb-4">سائنس اینڈ ٹیکنالوجی</h1>
      <CardSlider dataList={scienceTechNews} loading={loading} />
    </section>
  );
}
