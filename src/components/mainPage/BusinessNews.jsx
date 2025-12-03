import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getCategoryNews } from "../../api/news/news.api";
import CardSlider from "../common/CardSlider";

export default function BusinessNews() {
  const [businessNews, setBusinessNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchBusinessNews() {
      try {
        const data = await getCategoryNews("business");
        if (data && data.length > 0) {
          setBusinessNews(data);
        } else {
          setBusinessNews([]);
        }
      } catch (error) {
        console.error("Error fetching business news:", error.message);
        setBusinessNews([]);
      } finally {
        setLoading(false);
      }
    }

    fetchBusinessNews();
  }, []);

  return (
    <section
      id="Business"
      className="w-full mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-6"
      dir="rtl"
    >
      <Link
        to="/categoryNews/business"
        className="block text-2xl md:text-3xl font-bold mb-4 text-[rgb(18,16,69)] hover:underline"
      >
        کاروبار →
      </Link>

      <CardSlider dataList={businessNews} loading={loading} />

      {!loading && businessNews.length === 0 && (
        <p className="text-gray-500 text-right mt-4">
          فی الحال کاروبار کی کوئی خبر دستیاب نہیں۔
        </p>
      )}
    </section>
  );
}
