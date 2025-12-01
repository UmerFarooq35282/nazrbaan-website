import { useEffect, useState } from "react";
import { getCategoryNews } from "../../api/news/news.api";
import { dummyColumnNews } from "../../utils/dummy.data";
import CardSlider from "../common/CardSlider";

export default function ColumnNews() {
  const [columnNews, setColumnsNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getColumnNews() {
      try {
        const data = await getCategoryNews("column");
        if (data.length == 0) {
          setColumnsNews(dummyColumnNews);
        } else {
          setColumnsNews(data);
        }
      } catch (error) {
        console.log("Error in getting data ::", error.message);
        setColumnsNews(dummyColumnNews);
      } finally {
        setLoading(false);
      }
    }

    getColumnNews();
  }, []);

  return (
    <section
      id="column"
      className="w-full mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-6"
    >
      <h1 className="text-2xl md:text-3xl font-bold mb-4">کالم</h1>
      <CardSlider dataList={columnNews} loading={loading} />
    </section>
  );
}
