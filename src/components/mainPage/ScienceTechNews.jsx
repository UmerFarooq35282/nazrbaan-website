import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getCategoryNews } from "../../api/news/news.api";
import CardSlider from "../common/CardSlider";

export default function ScienceTechNews() {
  const [scienceTechNews, setScienceTechNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchScienceTechNews() {
      try {
        const data = await getCategoryNews("science & technology");
        if (data && data.length > 0) {
          setScienceTechNews(data);
        } else {
          setScienceTechNews([]);
        }
      } catch (error) {
        console.error(
          "Error fetching science & technology news:",
          error.message
        );
        setScienceTechNews([]);
      } finally {
        setLoading(false);
      }
    }

    fetchScienceTechNews();
  }, []);

  if (!loading && scienceTechNews.length === 0) return null;

  return (
    <section
      id="scienceTech"
      className="w-full mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-6"
      dir="rtl"
    >
      <Link
        to="/categoryNews/science & technology"
        className="block text-2xl md:text-3xl font-bold mb-4 text-[rgb(18,16,69)] hover:underline"
      >
        سائنس اینڈ ٹیکنالوجی →
      </Link>

      {(loading || scienceTechNews.length > 0) && (
        <CardSlider dataList={scienceTechNews} loading={loading} />
      )}
    </section>
  );
}
