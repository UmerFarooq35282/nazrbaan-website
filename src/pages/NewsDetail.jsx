import React from "react";
import { useParams } from "react-router-dom";

function NewsDetail() {
  const { news_id } = useParams();
  return <div>NewsDetail of {news_id}</div>;
}

export default NewsDetail;
