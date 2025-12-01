import axios from "axios"
import { BASE_URL } from "../config/api.config"

export const getTopNews = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/apis/get_feature_news.php`)
        return response.data?.data;
    } catch (error) {
        alert("Error in getting news", error)
    }
}

export const getCategoryNews = async (cat) => {
    try {
        const response = await axios.get(`${BASE_URL}/apis/get_category_news.php?category=${cat}&lang=ur`);
        return response.data?.data;
    } catch (error) {
        alert("Error in getting sports news", error)
    }
}

export const getNewByID = async (id) => {
    try {
        const response = await axios.get(`${BASE_URL}/apis/get_news_detail.php?id=${id}`);
        return response.data?.data;
    } catch (error) {
        console.log("Error ::", error.message)
    }
}