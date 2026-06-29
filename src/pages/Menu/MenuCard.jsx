import React from "react";
import "./MenuCard.css";

export default function MenuCard({ item, onAdd, cartCount = 0 }) {
  return (
    <div className={`menu-card${cartCount > 0 ? " menu-card--in-cart" : ""}`}>
      <div className="menu-card__image-wrapper">
        <img
          src={item.image}
          alt={item.name}
          className="menu-card__image"
          loading="lazy"
        />
        <span className="menu-card__rating">
          <span className="menu-card__rating-star">★</span>
          {item.rating.toFixed(1)}
        </span>
      </div>

      <div className="menu-card__body">
        <h3 className="menu-card__name">{item.name}</h3>
        <p className="menu-card__subtitle">{item.subtitle}</p>

        <div className="menu-card__footer">
          <span className="menu-card__price">{item.price} Rs</span>
          <button
            className="menu-card__add-btn"
            onClick={() => onAdd(item)}
            aria-label={`Add ${item.name} to cart`}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}