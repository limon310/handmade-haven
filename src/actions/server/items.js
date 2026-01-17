"use server";
import { collections, dbConnect } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";

// all items for all items page
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

// single items for products details page
export const getSingleItems = async (id) => {
  try {
    if (id.length != 24) {
      return {}
    }
    const query = { _id: new ObjectId(id) };
    const item = await dbConnect(collections.ITEMS).findOne(query);

    // MongoDB _id ke string-e convert kora safe
    return { ...item, _id: item._id.toString() } || {};
  } catch (error) {
    console.error("Database error:", error);
    return {};
  }
}

// category items for featured section
export const categoryItems = async () => {
  try {
    // const query = {category: ObjectId(id)};
    const categoryItems = await dbConnect(collections.ITEMS)
      .find()
      .limit(4)
      .toArray();

    // MongoDB _id ke string-e convert kora safe
    return categoryItems.map(item => ({
      ...item,
      _id: item._id.toString()
    }));
  } catch (error) {
    console.error("Database error:", error);
    return [];
  }
}

// add items
export const addItems = async (payload) => {
  if (!payload) {
    throw new Error("Invalid payload");
  }

  try {
    const result = await dbConnect(collections.ITEMS).insertOne({
      ...payload,
      createdAt: new Date().toISOString,
    });

    if (!result.insertedId) {
      throw new Error("Item insert failed");
    }

    return {
      success: true,
      insertedId: result.insertedId,
    };
  } catch (error) {
    console.error("Database error:", error.message);
    throw error;
  }
};
