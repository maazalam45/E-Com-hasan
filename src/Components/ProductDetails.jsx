import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading product: {error.message}</div>;
  }

  if (!product) {
    return <div>No product found.</div>;
  }

  return (
    <div className="product-details p-6 max-w-xl mx-auto bg-white rounded-xl shadow-md space-y-4">
      <h1 className="text-2xl font-bold">{product.title}</h1>
      <img
        className="w-full h-auto object-cover rounded-md"
        src={product.thumbnail}
        alt={product.title}
      />
      <p className="text-gray-600">{product.description}</p>
      <p className="text-lg font-semibold">Price: ${product.price}</p>
    </div>
  );
};

export default ProductDetails;
