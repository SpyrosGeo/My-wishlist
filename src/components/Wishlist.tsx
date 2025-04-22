import React, { useEffect, useState } from "react";
import { WishlistItem } from "../interfaces";
import WishlistItemComponent from "./WishlistItem";
import { getWishlist } from "../services/wishlist";

function Wishlist() {
  const [wishlist, setWishlist] = useState<WishlistItem[]>([]);
  const [error, setError] = useState<string | null>("");
  useEffect(() => {
    const fetchWishlist = async () => {
      try {
        const items = await getWishlist();
        if (!items?.length) return;
        setError("");
        setWishlist(items);
      } catch (error) {
        setError("Error fetching wishlist");
      }
    };
    fetchWishlist();
  }, []);
  return (
    <div>
      <h2>My Wishlist</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {wishlist.map((item) => (
        <WishlistItemComponent key={item.id} item={item} />
      ))}
    </div>
  );
}

export default Wishlist;
