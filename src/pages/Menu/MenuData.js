import cappuccino from "../../assets/menu/cappuccino.jpg";
import latte from "../../assets/menu/latte.jpg";
import espresso from "../../assets/menu/espresso.jpg";

const menu = [
  {
    id: 1,
    name: "Cappuccino",
    category: "Hot Coffee",
    image: cappuccino,
    price: 95,
    rating: 4.9,
    description: "Rich espresso with steamed milk foam.",
  },

  {
    id: 2,
    name: "Latte",
    category: "Hot Coffee",
    image: latte,
    price: 110,
    rating: 4.8,
    description: "Creamy milk blended with premium espresso.",
  },

  {
    id: 3,
    name: "Espresso",
    category: "Espresso",
    image: espresso,
    price: 75,
    rating: 5.0,
    description: "Strong Italian espresso shot.",
  },
];

export default menu;