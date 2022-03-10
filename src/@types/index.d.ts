declare global {
  namespace NodeJS {
    interface ProcessEnv {
      MONGODB_URI: string;
      DISCORD_TOKEN: string;
      BASE_URL: string;
    }
  }
}

export {};