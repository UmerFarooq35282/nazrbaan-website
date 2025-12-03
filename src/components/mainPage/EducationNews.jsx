import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getCategoryNews } from "../../api/news/news.api";
import CardSlider from "../common/CardSlider";
import AdsCard from "../common/AdsCard"; // ✅ import your dynamic AdsCard

export default function EducationNews() {
  const [educationNews, setEducationNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchEducationNews() {
      try {
        const data = await getCategoryNews("education");
        if (data && data.length > 0) {
          setEducationNews(data);
        } else {
          setEducationNews([]); // ✅ empty if no data
        }
      } catch (error) {
        console.error("Error fetching education news:", error.message);
        setEducationNews([]); // ✅ empty on error
      } finally {
        setLoading(false);
      }
    }

    fetchEducationNews();
  }, []);

  // ✅ Hide the entire section if not loading & no data
  if (!loading && educationNews.length === 0) return null;

  return (
    <section
      id="education"
      className="w-full mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-6"
      dir="rtl"
    >
      {/* ✅ Clickable Heading */}
      <Link
        to="/categoryNews/education"
        className="block text-2xl md:text-3xl font-bold mb-4 text-[rgb(18,16,69)] hover:underline"
      >
        تعلیم →
      </Link>

      {/* ✅ Show slider only when data exists or loading */}
      {(loading || educationNews.length > 0) && (
        <CardSlider dataList={educationNews} loading={loading} />
      )}

      {/* ✅ Show Twitter AdsCard only when data exists */}
      {!loading && educationNews.length > 0 && (
        <AdsCard
          title="نظربان بلوچستان کو ٹوئٹر پر فالو کریں"
          description="تازہ ترین خبریں، اپ ڈیٹس اور خصوصی مضامین حاصل کرنے کے لیے ہمیں ٹوئٹر پر فالو کریں۔"
          buttonText= "سبسکرائب کرنے کے لیے کلک کریں۔"
          imageUrl="https://upload.wikimedia.org/wikipedia/commons/6/6f/Logo_of_Twitter.svg"
          linkUrl="https://x.com/NazrbanNews"
        />
      )}
    </section>
  );
}
