import axios from "axios";
import { useEffect, useState, createContext, useContext } from "react";

const ProductContext = createContext(null);

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const getProducts = async () => {
      try {
        setError("");
        const res = await axios.get("/api/products");
        setProducts(res.data.products);
      } catch (err) {
        setError(err.message);
      }
    };
    getProducts();
  }, []);
  return (
    <ProductContext.Provider value={{ products, error }}>
      {children}
    </ProductContext.Provider>
  );
};

const useProduct = () => useContext(ProductContext);
export { ProductProvider, useProduct };
