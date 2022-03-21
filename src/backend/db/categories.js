import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "men",
    categoryImg: "/Assets/men-nav.webp",
  },
  {
    _id: uuid(),
    categoryName: "women",
    categoryImg: "/Assets/women-nav.webp",
  },
  {
    _id: uuid(),
    categoryName: "kids",
    categoryImg: "/Assets/kids-nav.webp",
  },
  {
    _id: uuid(),
    categoryName: "best-sellers",
    categoryImg: "/Assets/best-seller-nav.jpg",
  },
];
