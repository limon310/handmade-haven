"use server";
import { collections, dbConnect } from "@/lib/dbConnect";

export const getItems = async () => {
  try {
    const items = await dbConnect(collections.ITEMS).find().toArray();
    
    // MongoDB _id ke string-e convert kora safe (Next.js serialization er jonno)
    return items.map(item => ({
      ...item,
      _id: item._id.toString()
    }));
  } catch (error) {
    console.error("Database error:", error);
    return [];
  }
};