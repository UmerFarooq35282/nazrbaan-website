import React from "react";
import Navbar from "../components/common/Navbar";
import { TopNews } from "../components/mainPage/TopNews";
import GameNews from "../components/mainPage/GameNews";
import BusinessNews from "../components/mainPage/BusinessNews";
import ColumnNews from "../components/mainPage/ColumnNews";
import CultureNews from "../components/mainPage/CultureNews";
import EducationNews from "../components/mainPage/EducationNews";
import HealthNews from "../components/mainPage/HealthNews";
import LitratureNews from "../components/mainPage/LitratureNews";
import ScienceTechNews from "../components/mainPage/ScienceTechNews";
import SocialMedia from "../components/common/SocialMedia";

function MainPage() {
  return (
    <>
      <TopNews />
      <GameNews />
      <BusinessNews />
      <ColumnNews />
      <CultureNews />
      <EducationNews />
      <HealthNews />
      <LitratureNews />
      <ScienceTechNews />
      <SocialMedia />
    </>
  );
}

export default MainPage;
