import { MongoClient, ServerApiVersion } from 'mongodb';

const uri = process.env.MONGODB_URI;
const dbName = process.env.DBNAME;

if (!uri) {
  throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
}

export const collections = {
  USERS: "users",
  ITEMS: "items",
};

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

// Database connection helper
export const dbConnect = (cname) => {
  return client.db(dbName).collection(cname);
};