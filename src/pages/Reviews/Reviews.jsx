import "./Reviews.css";

const reviews = [
  {
    id: 1,
    name: "Sarah L.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    review:
      "The coffee quality exceeded my expectations. Every cup is crafted with care and the atmosphere is absolutely relaxing.",
  },
  {
    id: 2,
    name: "John H.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    review:
      "Veloura Café has become my favorite place. The espresso is rich, smooth, and the service is outstanding.",
  },
  {
    id: 3,
    name: "Emily S.",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    review:
      "Beautiful interior, premium coffee, and friendly staff. Every visit feels luxurious and comfortable.",
  },
];

export default function Reviews() {
  return (
    <section className="reviews-page">

      <p className="reviews-small-title">
        WHAT OUR CUSTOMERS SAY
      </p>

      <h1 className="reviews-title">
        Reviews About Veloura Café
      </h1>

      <div className="reviews-container">

        {reviews.map((item) => (

          <div className="review-card" key={item.id}>

            <img
              src={item.image}
              alt={item.name}
              className="review-image"
            />

            <h2>{item.name}</h2>

            <p>{item.review}</p>

            <div className="review-stars">
              ★★★★★
            </div>

          </div>

        ))}

      </div>

    </section>
  );
}