import Follower from "../comps/Follower/Follower";
import WishlistItem from "../comps/WishlistItem/WishlistItem";

import { useState } from "react";

function Wishlist() {
  const [activeItem, setActiveItem] = useState(null);
  return (
    <div>
      <WishlistItem setActiveItem={setActiveItem} />
      <Follower activeItem={activeItem} />
    </div>
  );
}

export default Wishlist;
