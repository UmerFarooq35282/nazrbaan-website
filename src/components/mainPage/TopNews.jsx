import { Link } from "react-router-dom";
import { getTopNews } from "../../api/news/news.api";
import { dummyLatestNews } from "../../utils/dummy.data";
import { useEffect, useState } from "react";
import { getFileURL } from "../../api/config/api.config";

export const TopNews = () => {
  const [topNewsData, setTopNewsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchTopNews() {
      try {
        const data = await getTopNews();
        if (data && data.length > 0) {
          setTopNewsData(data);
        } else {
          setTopNewsData(dummyLatestNews);
        }
      } catch (error) {
        console.log("Error fetching Top News ::", error.message);
        setTopNewsData(dummyLatestNews);
      } finally {
        setLoading(false);
      }
    }
    fetchTopNews();
  }, []);

  // 🦴 Skeleton Loader (for initial load)
  const SkeletonCard = () => (
    <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden animate-pulse">
      <div className="w-full h-48 bg-gray-200" />
      <div className="p-3 flex flex-col gap-2">
        <div className="h-5 bg-gray-300 rounded w-3/4"></div>
        <div className="h-4 bg-gray-200 rounded w-1/2"></div>
      </div>
    </div>
  );

  // 🧠 Split main & small cards
  const mainCard = topNewsData[0];
  const smallCards = topNewsData.slice(1, 5); // next 4

  return (
    <section className="w-full mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
      {/* 🔹 Upper Section Wrapper */}
      <div className="flex flex-col gap-6 lg:flex-row-reverse">
        {/* 🔹 RightPart: 4 small cards */}
        <div className="w-full lg:w-1/2 grid grid-cols-2 gap-4 order-2 lg:order-1">
          {loading
            ? Array.from({ length: 4 }).map((_, i) => <SkeletonCard key={i} />)
            : smallCards.map((news, i) => (
                <Link
                  key={news.news_id || i}
                  to={`/newsDetail/${news.news_id}`}
                  className={`bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden hover:shadow-lg transition-transform duration-300 hover:scale-[1.02] ${
                    i >= 2 ? "hidden md:block" : ""
                  }`}
                >
                  <img
                    src={
                      news.thumbnail?.startsWith("http")
                        ? news.thumbnail
                        : `${getFileURL(news.thumbnail)}`
                    }
                    alt={news.title}
                    className="w-full h-48 md:h-56 lg:h-52 object-cover"
                  />
                  <div className="p-3 pb-1 flex flex-col gap-1">
                    <h3 className="text-[18px] leading-7 font-[mainFont] line-clamp-3">
                      {news.title}
                    </h3>
                  </div>
                </Link>
              ))}
        </div>

        {/* 🔹 LeftPart: Big Feature Card */}
        <div className="w-full lg:w-1/2 order-1 lg:order-2">
          {loading ? (
            <SkeletonCard />
          ) : (
            mainCard && (
              <Link
                to={`/newsDetail/${mainCard.news_id}`}
                className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden flex flex-col hover:shadow-lg transition-transform duration-300 hover:scale-[1.02]"
              >
                <img
                  src={
                    mainCard.thumbnail?.startsWith("http")
                      ? mainCard.thumbnail
                      : `${getFileURL(mainCard.thumbnail)}`
                  }
                  alt={mainCard.title}
                  className="w-full h-56 md:h-72 lg:h-[420px] object-cover"
                />
                <div className="p-4 md:p-6 flex flex-col gap-3">
                  <h3 className="text-[20px] md:text-[22px] leading-8 font-[mainFont] line-clamp-3">
                    {mainCard.title}
                  </h3>
                  <span className="inline-block px-5 py-2.5 rounded-lg bg-[rgb(18,16,69)] text-white font-semibold shadow hover:-translate-y-0.5 hover:shadow-lg transition">
                    مزید پڑھیں
                  </span>
                </div>
              </Link>
            )
          )}
        </div>
      </div>
    </section>
  );
};
