import { wishlist } from "../../assets/wishlist";
import "./style.css";

export default function WishlistItem({ setActiveItem }) {
  return (
    <ul className="wishlist" onMouseLeave={() => setActiveItem(null)}>
      {wishlist.map((item, i) => (
        <a
          key={item.title}
          onMouseOver={() => setActiveItem(i)}
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>{item.title}</span>
          <span>{item.price} EUR</span>
        </a>
      ))}
    </ul>
  );
}
