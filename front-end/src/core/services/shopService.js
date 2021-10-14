import axios from "axios";

export const fetchShopItems = () => axios.get("/api/shop/items");
