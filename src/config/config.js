import "dotenv/config";
import { bcryptUtil } from "../utils/index.utils.js";

const {
  PORT = 3000,
  LOCAL_DATABASE_URI,
  DEV_DATABASE_URI,
  SECRET_WORD,
  CLOUDINARY_KEY,
  CLOUDINARY_NAME,
  CLOUDINARY_API_SECRET,
  GMAIL_USER,
  GMAIL_PASSWORD,
  ADMIN_PASSWORD,
  OPENAI_API_KEY,
  HF_API_TOKEN,
  NODE_ENV,
} = process.env;

const NODEMAILER_CONFIG = {
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // Use `true` for port 465, `false` for all other ports
  auth: {
    user: GMAIL_USER,
    pass: GMAIL_PASSWORD,
  },
};

const CONNECTION = {
  URI: NODE_ENV === "development" ? DEV_DATABASE_URI : LOCAL_DATABASE_URI,
  CONFIG:
    NODE_ENV !== "development"
      ? {
          logging: false,
          native: false,
          dialect: "postgres",
          dialectOptions: {
            ssl: {
              require: true,
              rejectUnauthorized: false,
            },
          },
        }
      : {
          logging: false,
          native: false,
          dialect: "postgres",
        },
};

export {
  CONNECTION,
  PORT,
  SECRET_WORD,
  CLOUDINARY_KEY,
  CLOUDINARY_NAME,
  CLOUDINARY_API_SECRET,
  NODEMAILER_CONFIG,
  ADMIN_PASSWORD,
  OPENAI_API_KEY,
  HF_API_TOKEN,
};
