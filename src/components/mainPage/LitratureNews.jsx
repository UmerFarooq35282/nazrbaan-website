import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getCategoryNews } from "../../api/news/news.api";
import CardSlider from "../common/CardSlider";

export default function LitratureNews() {
  const [litratureNews, setLitratureNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchLitratureNews() {
      try {
        const data = await getCategoryNews("litrature");
        if (data && data.length > 0) {
          setLitratureNews(data);
        } else {
          setLitratureNews([]);
        }
      } catch (error) {
        console.error("Error fetching litrature news:", error.message);
        setLitratureNews([]);
      } finally {
        setLoading(false);
      }
    }

    fetchLitratureNews();
  }, []);

  if (!loading && litratureNews.length === 0) return null;

  return (
    <section
      id="litrature"
      className="w-full mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-6"
      dir="rtl"
    >
      <Link
        to="/categoryNews/litrature"
        className="block text-2xl md:text-3xl font-bold mb-4 text-[rgb(18,16,69)] hover:underline"
      >
        ادب و فنون →
      </Link>

      {(loading || litratureNews.length > 0) && (
        <CardSlider dataList={litratureNews} loading={loading} />
      )}
    </section>
  );
}
