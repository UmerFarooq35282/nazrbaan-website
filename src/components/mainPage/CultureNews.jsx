import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getCategoryNews } from "../../api/news/news.api";
import CardSlider from "../common/CardSlider";
import AdsCard from "../common/AdsCard";

export default function CultureNews() {
  const [cultureNews, setCultureNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCultureNews() {
      try {
        const data = await getCategoryNews("culture");
        if (data && data.length > 0) {
          setCultureNews(data);
        } else {
          setCultureNews([]);
        }
      } catch (error) {
        console.error("Error fetching culture news:", error.message);
        setCultureNews([]);
      } finally {
        setLoading(false);
      }
    }

    fetchCultureNews();
  }, []);

  if (!loading && cultureNews.length === 0) return null;

  return (
    <section
      id="culture"
      className="w-full mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-6"
      dir="rtl"
    >
      <Link
        to="/categoryNews/culture"
        className="block text-2xl md:text-3xl font-bold mb-4 text-[rgb(18,16,69)] hover:underline"
      >
        ثقافت →
      </Link>

      {(loading || cultureNews.length > 0) && (
        <CardSlider dataList={cultureNews} loading={loading} />
      )}

      {!loading && cultureNews.length > 0 && <AdsCard />}
    </section>
  );
}
