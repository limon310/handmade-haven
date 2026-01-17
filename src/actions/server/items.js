"use server";
import { collections, dbConnect } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";

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

export const getSingleItems = async (id) => {
  try {
    if(id.length != 24){
      return {}
    }
    const query = {_id: new ObjectId(id)};
    const item = await dbConnect(collections.ITEMS).findOne(query);

    // MongoDB _id ke string-e convert kora safe
    return { ...item, _id: item._id.toString() } || {};
  } catch (error) {
    console.error("Database error:", error);
    return {};
  }
}