import { config as conf } from "dotenv";
conf();
const _config = {
  PORT: process.env.PORT || 8888,
  DB_STRING: `${process.env.DB_STRING}hill_dekho_db`,
  NODE_ENV: process.env.NODE_ENV,
};

export const config = Object.freeze(_config);
