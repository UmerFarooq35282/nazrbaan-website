import { useEffect, useState } from "react";
import { getCategoryNews } from "../../api/news/news.api";
import { dummyEducationNews } from "../../utils/dummy.data";
import CardSlider from "../common/CardSlider";

export default function EducationNews() {
  const [educationsNews, setEducationsNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getEducationNews() {
      try {
        const data = await getCategoryNews("educations");
        if (data.length == 0) {
          setEducationsNews(dummyEducationNews);
        } else {
          setEducationsNews(data);
        }
      } catch (error) {
        console.log("Error in getting data ::", error.message);
        setEducationsNews(dummyEducationNews);
      } finally {
        setLoading(false);
      }
    }

    getEducationNews();
  }, []);

  return (
    <section
      id="Education"
      className="w-full mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-6"
    >
      <h1 className="text-2xl md:text-3xl font-bold mb-4">تعلیم</h1>
      <CardSlider dataList={educationsNews} loading={loading} />
    </section>
  );
}
