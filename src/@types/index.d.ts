declare global {
  namespace NodeJS {
    interface ProcessEnv {
      MONGODB_URI: string;
      BASE_URL: string;
      JWT_SECRET: string;
      DISCORD_TOKEN: string;
      DISCORD_CLIENT_ID: string;
      DISCORD_CLIENT_SECRET: string;
    }
  }
}

export {};
