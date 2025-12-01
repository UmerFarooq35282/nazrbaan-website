import { useEffect, useState } from "react";
import { getCategoryNews } from "../../api/news/news.api";
import { dummyGameNews } from "../../utils/dummy.data";
import CardSlider from "../common/CardSlider";
import AdsCard from "../common/AdsCard";

export default function GameNews() {
  const [gamesNews, setGamesNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getGameNews() {
      try {
        const data = await getCategoryNews("games");
        if (data.length == 0) {
          setGamesNews(dummyGameNews);
        } else {
          setGamesNews(data);
        }
      } catch (error) {
        console.log("Error in getting data ::", error.message);
        setGamesNews(dummyGameNews);
      } finally {
        setLoading(false);
      }
    }

    getGameNews();
  }, []);

  return (
    <section
      id="game"
      className="w-full mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-6"
    >
      <h1 className="text-2xl md:text-3xl font-bold mb-4">کھیل</h1>
      <CardSlider dataList={gamesNews} loading={loading} />
      <AdsCard />
    </section>
  );
}
