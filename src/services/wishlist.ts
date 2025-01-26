import { WishlistItem } from "../interfaces";
import pb from "../utils";

export const getWishlist = async (): Promise<WishlistItem[] | undefined> => {
  try {
    const records = await pb.collection("wishlist").getFullList<WishlistItem>();
    return records;
  } catch (error) {
    console.error("error", error);
    throw Error;
  }
};

export const addWishlistItem = async (
  item: Partial<WishlistItem>
): Promise<void> => {
  try {
    await pb.collection("wishlist").create(item);
  } catch (error) {
    console.error("error", error);
    throw Error;
  }
};

export const updateWishlistItem = async (
  id: string,
  item: Partial<WishlistItem>
): Promise<void> => {
  try {
    await pb.collection("wishlist").update(id, item);
  } catch (error) {
    console.error("error", error);
    throw Error;
  }
};

export const deleteWishlistItem = async (id: string): Promise<void> => {
  try {
    await pb.collection("wishlist").delete(id);
  } catch (error) {
    console.error("error", error);
    throw Error;
  }
};
