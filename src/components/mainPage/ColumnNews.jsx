import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getCategoryNews } from "../../api/news/news.api";
import CardSlider from "../common/CardSlider";

export default function ColumnNews() {
  const [columnNews, setColumnNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchColumnNews() {
      try {
        const data = await getCategoryNews("column");
        if (data && data.length > 0) {
          setColumnNews(data);
        } else {
          setColumnNews([]);
        }
      } catch (error) {
        console.error("Error fetching column news:", error.message);
        setColumnNews([]);
      } finally {
        setLoading(false);
      }
    }

    fetchColumnNews();
  }, []);

  return (
    <section
      id="column"
      className="w-full mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-6"
      dir="rtl"
    >
      <Link
        to="/categoryNews/column"
        className="block text-2xl md:text-3xl font-bold mb-4 text-[rgb(18,16,69)] hover:underline"
      >
        کالم →
      </Link>

      <CardSlider dataList={columnNews} loading={loading} />

      {!loading && columnNews.length === 0 && (
        <p className="text-gray-500 text-right mt-4">
          فی الحال کالم کی کوئی خبر دستیاب نہیں۔
        </p>
      )}
    </section>
  );
}
