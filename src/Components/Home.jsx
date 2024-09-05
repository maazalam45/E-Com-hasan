import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data.products))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="product-list p-6">
      <h1 className="text-2xl font-bold mb-4">Product List</h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <li key={product.id} className="border p-4 rounded-md shadow">
            <Link to={`/product/${product.id}`} className="text-lg font-medium">
              {product.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
