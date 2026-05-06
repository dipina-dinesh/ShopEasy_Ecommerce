import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "./Context/CartContext";
import "./Ecommerce.css";

function CategoryPage() {
  const { category } = useParams();
  const { addToCart } = useContext(CartContext);

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://your-api-name.onrender.com/products")
      .then((res) => res.json())
      .then((data) => {
        const filtered = data.filter(
          (item) =>
            item.category.toLowerCase() === category.toLowerCase()
        );
        setProducts(filtered);
        setLoading(false);
      })
      .catch((err) => {
        console.log("Error fetching products:", err);
        setLoading(false);
      });
  }, [category]);

  if (loading) {
    return <h3 style={{ textAlign: "center" }}>Loading...</h3>;
  }

  return (
    <div className="products-section">
      <h2 className="products-title" style={{ textTransform: "capitalize" }}>
        {category} Products
      </h2>

      {products.length === 0 ? (
        <div style={{ textAlign: "center", marginTop: "30px" }}>
          <h4>No products found in this category</h4>
        </div>
      ) : (
        <div className="products-grid">
          {products.map((product) => (
            <div className="modern-card" key={product.id}>
              
              {/* Image */}
              <div className="img-container">
                <img
                  src={product.image}
                  alt={product.name}
                  onError={(e) =>
                    (e.target.src = "https://via.placeholder.com/200")
                  }
                />
              </div>

              {/* Details */}
              <h5 className="product-name">{product.name}</h5>
              <p className="product-price">₹ {product.price}</p>

              {/* Add to Cart */}
              <button
                className="add-cart-btn"
                onClick={() => addToCart(product)}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default CategoryPage;