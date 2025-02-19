import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./card";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const resp = await axios.get("http://localhost:7000/api/products");
      console.log("Products:", resp.data);
      setProducts(resp.data.products);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const deleteProduct = async (id) => {
    try {
      await axios.delete(`http://localhost:7000/api/products/delete/${id}`);
      setProducts((prevProducts) => prevProducts.filter((item) => item._id !== id));
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  return (
    <div>
      {products.length > 0 ? (
        products.map((item) => (
          <div key={item._id}>
            <Card name={item.name} description={item.description} image={item.image} />
            <button type="button" onClick={() => deleteProduct(item._id)}>Delete</button>
          </div>
        ))
      ) : (
        <p>No products found.</p>
      )}
    </div>
  );
}
