import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Men",
    categoryImg: "/Assets/men-nav.webp",
  },
  {
    _id: uuid(),
    categoryName: "Women",
    categoryImg: "/Assets/women-nav.webp",
  },
  {
    _id: uuid(),
    categoryName: "Kids",
    categoryImg: "/Assets/kids-nav.webp",
  },
  {
    _id: uuid(),
    categoryName: "Best-sellers",
    categoryImg: "/Assets/best-seller-nav.jpg",
  },
];
