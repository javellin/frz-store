import axios from "axios";

export const fetchShopItems = () => axios.get("store-api/shop/items");
