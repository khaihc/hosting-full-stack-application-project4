import * as dotenv from "dotenv";
dotenv.config();

// ENV variables 
// - AWS_ACCESS_KEY_ID
// - AWS_SECRET_ACCESS_KEY
// Are Also needed

export const config = {
  port: Number(process.env.DB_PORT) || 5432,
  username: process.env.POSTGRES_USERNAME || "postgres11",
  password: process.env.POSTGRES_PASSWORD || "postgres11",
  database: process.env.POSTGRES_DB || "postgres11",
  host: process.env.POSTGRES_HOST || "postgres11.cdoh3arar11a.us-east-1.rds.amazonaws.com",
  aws_region: "",
  AWS_DEFAULT_REGION: "",
  aws_profile: "",
  aws_media_bucket: "",
  url: "http://localhost/8080",
  jwt: {
    secret: process.env.JWT_SECRET || "project4-hosting-a-full-stack-application",
  },
  accessKeyId: "",
  secretAccessKey: "",
};
