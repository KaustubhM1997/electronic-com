import axios from "axios";
import { useEffect, useState, createContext, useContext } from "react";

const DataContext = createContext(null);

const useProduct = () => useContext(DataContext);

const DataProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const getProducts = async () => {
      try {
        // setError("");
        const res = await axios.get("/api/products");
        setProducts(res.data.products);
      } catch (err) {
        setError(err.message);
      }
    };
    getProducts();
  }, []);
  return (
    <DataContext.Provider value={{ products, error }}>
      {children}
    </DataContext.Provider>
  );
};

export { DataProvider, useProduct };
