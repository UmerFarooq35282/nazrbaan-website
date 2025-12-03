import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getCategoryNews, getNewByID } from "../api/news/news.api";
import { fileBaseURL, getFileURL } from "../api/config/api.config";
import { sanitizeAndFixUploads } from "../utils/htmlSanitizer";

export default function NewsDetail() {
  const { newsID } = useParams();
  const [newsData, setNewsData] = useState(null);
  const [relatedNews, setRelatedNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchNewsDetail() {
      setLoading(true);
      try {
        // ✅ Fetch specific news by ID
        const data = await getNewByID(newsID);
        if (data) {
          setNewsData(data);

          // ✅ Fetch related news of same category
          const related = await getCategoryNews(data.category);
          const filtered = related.filter(
            (n) => n.news_id !== parseInt(newsID)
          );
          setRelatedNews(filtered);
        } else {
          console.warn("⚠️ News not found for ID:", newsID);
          setNewsData(null);
          setRelatedNews([]);
        }
      } catch (error) {
        console.error("❌ Error fetching news detail:", error.message);
        setNewsData(null);
        setRelatedNews([]);
      } finally {
        setLoading(false);
      }
    }

    fetchNewsDetail();
  }, [newsID]);

  // 🟡 Loading state
  if (loading)
    return (
      <div className="w-full max-w-5xl mx-auto px-4 flex justify-center items-center text-center text-gray-500 min-h-[50vh]">
        <p className="text-lg md:text-xl font-semibold animate-pulse">
          خبر لوڈ ہو رہی ہے...
        </p>
      </div>
    );

  // 🔴 No data found
  if (!newsData)
    return (
      <div className="w-full max-w-5xl mx-auto px-4 flex justify-center items-center text-center text-red-500 min-h-[50vh]">
        <p className="text-lg md:text-xl font-semibold">
          خبر نہیں ملی۔
        </p>
      </div>
    );

  const htmlForRender = sanitizeAndFixUploads(newsData?.content, fileBaseURL);

  // 🏷 Category name mapping
  const categoryLabels = {
    latest: "تازہ ترین",
    sports: "کھیل",
    education: "تعلیم",
    health: "صحت",
    business: "کاروبار",
    litrature: "ادب و فنون",
    "science & technology": "سائنس اینڈ ٹیکنالوجی",
    culture: "ثقافت",
    column: "کالم",
  };

  const categoryName = categoryLabels[newsData.category] || " ";

  return (
    <section
      className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8"
      dir="rtl"
    >
      {/* 📰 Title Section */}
      <h1 className="text-3xl md:text-4xl font-extrabold text-right mb-3 font-[mainFont] leading-snug">
        {newsData.title}
      </h1>

      {/* 🖼️ Featured Image */}
      {newsData.thumbnail && (
        <img
          src={
            newsData.thumbnail.startsWith("http")
              ? newsData.thumbnail
              : `${getFileURL(newsData.thumbnail)}`
          }
          alt={newsData.title}
          className="w-full h-auto rounded-xl shadow-lg mb-6 object-cover"
        />
      )}

      {/* 🧾 Main Content */}
      <article
        className="prose prose-lg max-w-none prose-p:text-gray-800 prose-p:leading-8 prose-img:rounded-xl text-right"
        dangerouslySetInnerHTML={{
          __html: htmlForRender,
        }}
      ></article>

      {/* 🔹 Related News Section */}
      {relatedNews.length > 0 && (
        <div className="mt-12 border-t border-gray-200 pt-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-right">
            مزید خبریں {categoryName} 
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {relatedNews.slice(0, 6).map((news) => (
              <Link
                key={news.news_id}
                to={`/newsDetail/${news.news_id}`}
                className="bg-white rounded-xl shadow border border-gray-200 overflow-hidden hover:shadow-lg transition-transform duration-300 hover:scale-[1.02]"
              >
                {news.thumbnail && (
                  <img
                    src={
                      news.thumbnail.startsWith("http")
                        ? news.thumbnail
                        : `${getFileURL(news.thumbnail)}`
                    }
                    alt={news.title}
                    className="w-full h-40 object-cover"
                  />
                )}
                <div className="p-3 flex flex-col gap-1">
                  <h3 className="text-[17px] leading-7 font-[mainFont] line-clamp-3">
                    {news.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
