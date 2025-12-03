import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getCategoryNews } from "../api/news/news.api";
import { getFileURL } from "../api/config/api.config";

export default function CategoryNews() {
  const { categoryName } = useParams();
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;

  useEffect(() => {
    async function fetchCategoryNews() {
      setLoading(true);
      try {
        const data = await getCategoryNews(categoryName);
        if (data && data.length > 0) {
          setNewsData(data);
        } else {
          setNewsData([]); // ✅ no dummy fallback
        }
      } catch (error) {
        console.error("Error fetching category news:", error.message);
        setNewsData([]); // ✅ no dummy fallback
      } finally {
        setLoading(false);
      }
    }
    fetchCategoryNews();
  }, [categoryName]);

  // Pagination logic
  const totalPages = Math.ceil(newsData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = newsData.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Skeleton Loader (Shimmer)
  const SkeletonCard = () => (
    <div className="bg-white rounded-xl shadow border border-gray-200 overflow-hidden animate-pulse">
      <div className="w-full h-40 bg-gray-200" />
      <div className="p-3 flex flex-col gap-2">
        <div className="h-5 bg-gray-300 rounded w-3/4"></div>
        <div className="h-4 bg-gray-200 rounded w-1/2"></div>
      </div>
    </div>
  );

  // Urdu category labels
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

  const categoryTitle = categoryLabels[categoryName] || "خبریں";

  return (
    <section
      className="w-full mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 min-h-[50vh]" // ✅ ensures 50vh min height
      dir="rtl"
    >
      {/* 🏷️ Category Title */}
      <h1 className="text-2xl md:text-3xl font-bold text-right mb-6">
        {categoryTitle}
      </h1>

      {/* 🔹 Loader */}
      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 min-h-[50vh]">
          {Array.from({ length: 8 }).map((_, i) => (
            <SkeletonCard key={i} />
          ))}
        </div>
      ) : newsData.length === 0 ? (
        <div className="text-center text-gray-500 py-20 min-h-[50vh]">
          اس زمرے میں فی الحال کوئی خبر دستیاب نہیں۔
        </div>
      ) : (
        <>
          {/* 🔹 News Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {currentData.map((news) => (
              <Link
                key={news.news_id}
                to={`/newsDetail/${news.news_id}`}
                className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden hover:shadow-lg transition-transform duration-300 hover:scale-[1.02]"
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
                  <h3 className="text-[18px] leading-7 font-[mainFont] line-clamp-3">
                    {news.title}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">
                    {news.published_date
                      ? new Date(news.published_date).toLocaleDateString(
                          "ur-PK",
                          {
                            year: "numeric",
                            month: "short",
                            day: "2-digit",
                          }
                        )
                      : ""}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          {/* 🔹 Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-2 mt-8">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                className="px-3 py-1 rounded border border-gray-300 text-gray-700 hover:bg-gray-100"
                disabled={currentPage === 1}
              >
                پچھلا
              </button>

              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => handlePageChange(i + 1)}
                  className={`px-3 py-1 rounded border ${
                    currentPage === i + 1
                      ? "bg-[rgb(18,16,69)] text-white"
                      : "border-gray-300 text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {i + 1}
                </button>
              ))}

              <button
                onClick={() => handlePageChange(currentPage + 1)}
                className="px-3 py-1 rounded border border-gray-300 text-gray-700 hover:bg-gray-100"
                disabled={currentPage === totalPages}
              >
                اگلا
              </button>
            </div>
          )}
        </>
      )}
    </section>
  );
}
