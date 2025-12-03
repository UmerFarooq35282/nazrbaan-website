import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { getFileURL } from "../../api/config/api.config";

export default function CardSlider({ dataList = [], loading = false }) {
  const SkeletonCard = () => (
    <div className="bg-white rounded-xl shadow border border-gray-200 overflow-hidden animate-pulse h-full flex flex-col">
      <div className="w-full h-48 bg-gray-200" />
      <div className="p-3 flex flex-col gap-2 flex-grow">
        <div className="h-5 bg-gray-300 rounded w-3/4"></div>
        <div className="h-4 bg-gray-200 rounded w-1/2"></div>
      </div>
    </div>
  );

  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 py-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <SkeletonCard key={`skeleton-${i}`} />
        ))}
      </div>
    );
  }

  return (
    <div className="relative pb-10"> {/* ✅ Added extra bottom padding for dots */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
        className="pb-8" // ✅ ensures pagination has its own margin below
      >
        {dataList.map((news, index) => (
          <SwiperSlide key={news.news_id || index} className="h-full">
            <Link
              to={`/newsDetail/${news.news_id}`}
              className="bg-white rounded-xl shadow border border-gray-200 overflow-hidden flex flex-col h-full hover:shadow-lg transition-transform duration-300 hover:scale-[1.02]"
            >
              {/* 🖼️ Image */}
              <img
                src={
                  news.thumbnail?.startsWith("http")
                    ? news.thumbnail
                    : `${getFileURL(news.thumbnail)}`
                }
                alt={news.title}
                className="w-full h-48 object-cover"
              />

              {/* 📰 Content */}
              <div className="p-3 flex flex-col justify-between flex-grow">
                <h3
                  className="text-[18px] leading-7 font-[mainFont] line-clamp-3 mb-3"
                  title={news.title}
                >
                  {news.title.length > 70
                    ? news.title.substring(0, 70) + "..."
                    : news.title}
                </h3>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
