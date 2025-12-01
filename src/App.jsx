import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MainPage from "./pages/MainPageContent";
import CategoryNews from "./pages/CategoryNews";
import NewsDetail from "./pages/NewsDetail";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route index element={<MainPage />} />
          <Route path="categoryNews/:categoryName" element={<CategoryNews />}/>
          <Route path="newsDetail/:newsID" element={<NewsDetail />}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
