import { useState } from "react";
import { WishlistItem } from "../interfaces"
import { updateWishlistItem } from "../services/wishlist";

interface WishlistItemProps {
    item:WishlistItem;
}
const  WishlistItemComponent:React.FC<WishlistItemProps> =({item})=> {
  const [error, setError] = useState<string|null>("");
  const handleTogglePurchased = async () => {
    setError(null);
    try {
       await updateWishlistItem(item.id, { isPurchased: !item.isPurchased }); 
    } catch (error) {
       setError("Error updating item"); 
    }
  }

  return (
  <div className="wishlist-item__container">
          <h3>{item.name}</h3>
      <p>
        <a href={item.url} target="_blank" rel="noopener noreferrer">
          View Item
        </a>
      </p>
      <p>Quantity: {item.quantity}</p>
      <p>Status: {item.isPurchased ? 'Purchased' : 'Not Purchased'}</p>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      <button onClick={handleTogglePurchased}>
        Mark as {item.isPurchased ? 'Not Purchased' : 'Purchased'}
      </button>
  </div>
  )
}

export default WishlistItemComponent