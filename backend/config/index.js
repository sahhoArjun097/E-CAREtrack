import dotenv from "dotenv";

dotenv.config();

const config = {
  PORT: process.env.PORT,
  CLOUDINARY_CLOUD_NAME: process.env.CLOUDINARY_CLOUD_NAME,
  CLOUDINARY_API_SECRET: process.env.CLOUDINARY_API_SECRET,
  CLOUDINARY_API_KEY: process.env.CLOUDINARY_API_KEY,
  COOKIE_EXPIRES: process.env.COOKIE_EXPIRES,
  JWT_EXPIRES: process.env.JWT_EXPIRES,
  JWT_SECRET_KEY: process.env.JWT_SECRET_KEY,
  MONGO_URL: process.env.MONGO_URL,
  DASHBOARD_URL: process.env.DASHBOARD_URL,
  FRONTEND_URL: process.env.FRONTEND_URL,
};

export default config;
