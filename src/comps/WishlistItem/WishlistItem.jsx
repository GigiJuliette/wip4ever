import { wishlist } from "../../assets/wishlist";
import "./style.css";

export default function WishlistItem({ setActiveItem }) {
  return (
    <main className="wishlist-container">
      <span className="wishlist-title">
        Voici ma liste de souhait pour mon anniversaire et Noël, se référer a
        Lucas pour savoir qui prend quoi, bisoux
      </span>
      <div className="wishlist" onMouseLeave={() => setActiveItem(null)}>
        {wishlist.map((item, i) => (
          <a
            key={item.title}
            onMouseOver={() => setActiveItem(i)}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="wishlist-link"
          >
            <span>{item.title}</span>
            <span>{item.price} EUR</span>
            <span className="com">{item.com}</span>
          </a>
        ))}
      </div>
    </main>
  );
}
