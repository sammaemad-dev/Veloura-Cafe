import "./MenuCard.css";

function MenuCard({ item }) {
  return (
    <div className="menu-card">

      <div className="card-image">

        <img src={item.image} alt={item.name} />

        <span className="rating">
          ⭐ {item.rating}
        </span>

      </div>

      <div className="card-content">

        <h3>{item.name}</h3>

        <p>{item.description}</p>

        <div className="card-bottom">

          <span className="price">
            EGP {item.price}
          </span>

          <button className="add-btn">
            +
          </button>

        </div>

      </div>

    </div>
  );
}

export default MenuCard;