import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { menuItems } from "../Menu/MenuData";
import "./ProductDetails.css";

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const product = menuItems.find(
    (item) => item.id === Number(id)
  );

  const [size, setSize] = useState("M");

  if (!product) {
    return <h2>Product Not Found</h2>;
  }

  return (
    <div className="details-page">

      <div className="details-image">

        <button
          className="back-btn"
          onClick={() => navigate(-1)}
        >
          ←
        </button>

        <img
          src={product.image}
          alt={product.name}
        />

      </div>

      <div className="details-card">

        <div className="title-row">

          <h2>{product.name}</h2>

          <span className="rating">
            ⭐ {product.rating}
          </span>

        </div>

        <p className="subtitle">
          {product.subtitle}
        </p>

        <h3>Description</h3>

        <p className="description">
          A delicious coffee prepared with premium beans,
          creamy milk and rich flavor. Perfect for every
          coffee lover.
        </p>

        <h3>Size</h3>

        <div className="sizes">

          <button
            className={size === "S" ? "active" : ""}
            onClick={() => setSize("S")}
          >
            S
          </button>

          <button
            className={size === "M" ? "active" : ""}
            onClick={() => setSize("M")}
          >
            M
          </button>

          <button
            className={size === "L" ? "active" : ""}
            onClick={() => setSize("L")}
          >
            L
          </button>

        </div>

        <div className="bottom">

          <div>

            <span className="price-title">
              Price
            </span>

            <h2>{product.price} Rs</h2>

          </div>

          <button className="buy-btn">
            Buy Now
          </button>

        </div>

      </div>

    </div>
  );
}

export default ProductDetails;