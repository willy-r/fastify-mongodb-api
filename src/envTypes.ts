declare module 'bun' {
  interface Env {
    MONGODB_URL: string;
    APP_PORT: number;
    APP_HOST: string;
  }
}
