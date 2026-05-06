import React, { useEffect, useState, useContext } from "react";
import { CartContext } from "./Context/CartContext";
import "./Ecommerce.css";

function Products() {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeCard, setActiveCard] = useState(null);

  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.log(err));
  }, []);

  const categories = [...new Set(products.map((p) => p.category))];

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <div className="products-section">
      <h2 className="products-title">Products</h2>

      {/* Category Buttons */}
      <div className="category-buttons">
        {categories.map((cat, index) => (
          <button
            key={index}
            className="category-btn"
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Product Display */}
      <div className="products-grid">
        {filteredProducts.map((product) => (
          <div
            className="modern-card"
            key={product.id}
            onClick={() => setActiveCard(product.id)}
          >
            <div className="img-container">
              <img
                src={product.image || "https://via.placeholder.com/200"}
                alt={product.name}
              />
            </div>

            <h5>{product.name}</h5>
            <p>{product.category}</p>
            <p>₹ {product.price}</p>

            {/* Show Add to Cart only when card clicked */}
            {activeCard === product.id && (
            <button
  className="add-cart-btn"
  onClick={(e) => {
    e.stopPropagation();   // ✅ prevent card click
    addToCart(product);    // ✅ add item
  }}
>
  Add to Cart
</button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;