import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getCategoryNews } from "../../api/news/news.api";
import CardSlider from "../common/CardSlider";

export default function HealthNews() {
  const [healthNews, setHealthNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchHealthNews() {
      try {
        const data = await getCategoryNews("health");
        if (data && data.length > 0) {
          setHealthNews(data);
        } else {
          setHealthNews([]);
        }
      } catch (error) {
        console.error("Error fetching health news:", error.message);
        setHealthNews([]);
      } finally {
        setLoading(false);
      }
    }

    fetchHealthNews();
  }, []);

  if (!loading && healthNews.length === 0) return null;

  return (
    <section
      id="health"
      className="w-full mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-6"
      dir="rtl"
    >
      <Link
        to="/categoryNews/health"
        className="block text-2xl md:text-3xl font-bold mb-4 text-[rgb(18,16,69)] hover:underline"
      >
        صحت →
      </Link>

      {(loading || healthNews.length > 0) && (
        <CardSlider dataList={healthNews} loading={loading} />
      )}
    </section>
  );
}
