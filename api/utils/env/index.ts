export function getDotEnvVariables() {
  return {
    nodeEnv: process.env.NODE_ENV,
    postgresHost: process.env.POSTGRES_HOST,
    postgresPort: Number(process.env.POSTGRES_PORT),
    postgresUsername: process.env.POSTGRES_USERNAME,
    postgresDatabase: process.env.POSTGRES_DATABASE,
    postgresPassword: process.env.POSTGRES_PASSWORD,
  };
}

export function getEnvFilePaths() {
  const sharedEnvFiles = [".env.local", ".env"];

  if (getDotEnvVariables().nodeEnv === "production") {
    return [...sharedEnvFiles, ".env.production"];
  }

  return [...sharedEnvFiles, ".env.development"];
}
