import React, { useState, useEffect } from "react";
import "./Ecommerce.css";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  // ===== CAROUSEL =====
  const images = [
    "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
    "https://m.media-amazon.com/images/I/311WAWY+wnL._SY500_.jpg",
    "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // ===== NEW ARRIVALS =====
 const arrivalImages = [
  "https://i.pinimg.com/736x/4c/fa/f3/4cfaf3f6253023850768b6af0be1770d.jpg",
  "https://i.pinimg.com/1200x/c9/0a/91/c90a91bcdd704f7c0d54d0a25155dc64.jpg",
  "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c",
];
  const [currentArrival, setCurrentArrival] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentArrival((prev) => (prev + 1) % arrivalImages.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="home-container">

        {/* ===== HERO CAROUSEL ===== */}
        <div className="carousel">
          <img src={images[current]} alt="banner" />
          <div className="carousel-text">
            <h1>Big Sale is Live 🔥</h1>
            <p>Up to 50% off on Electronics</p>
            <button onClick={() => navigate("/products")}>
              Shop Now
            </button>
          </div>
        </div>

        {/* ===== CATEGORY SECTION ===== */}
        <section className="section category-section">
          <h2>Shop by Category</h2>

          <div className="card-grid-home">

            {/* Electronics */}
            <div
              className="card"
              onClick={() => navigate("/category/Electronics")}
            >
              <img
                src="https://helios-i.mashable.com/imagery/articles/05djrP5PjtVB7CcMtvrTOAP/images-4.fill.size_2000x1125.v1723100793.jpg"
                alt="electronics"
              />
              <h3>Electronics</h3>
            </div>

            {/* Fashion */}
            <div
              className="card"
              onClick={() => navigate("/category/Fashion")}
            >
              <img
                src="https://images.unsplash.com/photo-1445205170230-053b83016050"
                alt="fashion"
              />
              <h3>Fashion</h3>
            </div>

            {/* Home Appliances */}
            <div
              className="card"
              onClick={() => navigate("/category/Home Appliances")}
            >
              <img
                src="https://i.pinimg.com/736x/8e/47/31/8e47318579d0592c90dd3a1bbe66580e.jpg"
                alt="home"
              />
              <h3>Home Appliances</h3>
            </div>

          </div>
        </section>

        {/* ===== NEW ARRIVALS ===== */}
        <section className="section new-arrivals">
          <h2 style={{ textAlign: "center" }}>New Arrivals</h2>

          <div className="arrival-carousel">
            <div
              className="arrival-track"
              style={{
                transform: `translateX(-${currentArrival * 100}%)`,
              }}
            >
              {arrivalImages.map((img, index) => (
                <img key={index} src={img} alt="arrival" />
              ))}
            </div>
          </div>
        </section>

      </div>

      {/* ===== FOOTER ===== */}
      <footer className="bg-dark text-light pt-5 pb-4 w-100 m-0">
        <div className="container-fluid px-5">
          <div className="row">

            <div className="col-md-3 mt-3">
              <h5 className="text-warning">ShopEasy</h5>
              <p>
                Your one-stop online shopping destination for electronics,
                fashion, and home appliances.
              </p>
            </div>

            <div className="col-md-2 mt-3">
              <h5 className="text-warning">Quick Links</h5>
              <p onClick={() => navigate("/")}>Home</p>
              <p onClick={() => navigate("/products")}>Products</p>
              <p onClick={() => navigate("/cart")}>Cart</p>
            </div>

            <div className="col-md-3 mt-3">
              <h5 className="text-warning">Categories</h5>
              <p onClick={() => navigate("/category/Electronics")}>
                Electronics
              </p>
              <p onClick={() => navigate("/category/Fashion")}>
                Fashion
              </p>
              <p onClick={() => navigate("/category/Home Appliances")}>
                Home Appliances
              </p>
            </div>

            <div className="col-md-4 mt-3">
              <h5 className="text-warning">Contact</h5>
              <p>Chennai, India</p>
              <p>support@shopeasy.com</p>
              <p>+91 98765 43210</p>
            </div>

          </div>

          <hr />

          <div className="d-flex justify-content-between">
            <p>© 2026 ShopEasy</p>
            <div>
              <i className="bi bi-facebook me-3"></i>
              <i className="bi bi-instagram me-3"></i>
              <i className="bi bi-twitter"></i>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Home;