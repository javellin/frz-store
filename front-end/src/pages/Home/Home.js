import { useSelector } from "react-redux";
import { ProductItem } from "./ProductItem";

import "./index.css";
import { Typography, Divider } from "@mui/material";

export const Home = () => {
  const selectedCategory = useSelector((state) => state.shop.selectedCategory);
  const filteredItems = useSelector((state) => state.shop.filteredItems);

  return (
    <div>
      <div className="home-title-container">
        <Typography variant="h3">{selectedCategory.label}</Typography>
        <Divider />
      </div>
      <div className="home-products">
        {filteredItems.map((item) => (
          <ProductItem
            key={item._id}
            product={item}            
          />
        ))}
      </div>
    </div>
  );
};
