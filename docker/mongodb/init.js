const adminUser = {
  user: process.env.MONGO_INITDB_ROOT_USERNAME || "admin",
  pwd: process.env.MONGO_INITDB_ROOT_PASSWORD || "123",
  roles: [{ role: "readWrite", db: process.env.MONGO_DATABASE || "nin_hub" }]
};

db = db.getSiblingDB(process.env.MONGO_DATABASE || "nin_hub");
db.createUser(adminUser);
