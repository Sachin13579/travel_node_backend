import { config as conf } from "dotenv";
conf();
const _config = {
  PORT: process.env.PORT || 8888,
  DB_STRING: `${process.env.DB_STRING}hill_dekho_db`,
};

export const config = Object.freeze(_config);
