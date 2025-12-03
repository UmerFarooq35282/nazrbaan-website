import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getCategoryNews } from "../../api/news/news.api";
import CardSlider from "../common/CardSlider";
import AdsCard from "../common/AdsCard";

export default function GameNews() {
  const [gameNews, setGameNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchGameNews() {
      try {
        const data = await getCategoryNews("sports"); 
        if (data && data.length > 0) {
          setGameNews(data);
        } else {
          setGameNews([]); 
        }
      } catch (error) {
        console.error("Error fetching game news:", error.message);
        setGameNews([]);
      } finally {
        setLoading(false);
      }
    }

    fetchGameNews();
  }, []);

  if (!loading && gameNews.length === 0) return null;

  return (
    <section
      id="game"
      className="w-full mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-6"
      dir="rtl"
    >
      <Link
        to="/categoryNews/sports"
        className="block text-2xl md:text-3xl font-bold mb-4 text-[rgb(18,16,69)] hover:underline"
      >
        کھیل →
      </Link>

      {(loading || gameNews.length > 0) && (
        <CardSlider dataList={gameNews} loading={loading} />
      )}

      {!loading && gameNews.length > 0 && <AdsCard />}
    </section>
  );
}
