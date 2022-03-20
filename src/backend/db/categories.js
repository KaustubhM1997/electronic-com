import { v4 as uuid } from "uuid";
// import {Men} from "../../../public/Assets/men.nav.webp"

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "men",
    categoryImg: "/Assets/men-nav.webp"

  },
  {
    _id: uuid(),
    categoryName: "women",
  
  },
  {
    _id: uuid(),
    categoryName: "kids",
  
  },
  {
    _id: uuid(),
    categoryName: "best-sellers",
  
  }
];
