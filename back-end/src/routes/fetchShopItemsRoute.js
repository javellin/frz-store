import { getDbConnection } from "../db";

export const fetchShopItemsRoute = {
  path: "/store-api/shop/items",
  method: "get",
  handler: async (req, res) => {
    const db = getDbConnection("react-shop-db");
    const items = await db.collection("items").find({}).toArray();

    if (!items) {
      return res.sendStatus(500);
    }

    res.status(200).json(items);
  },
};
