import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "./users/user.entity";
import { UsersModule } from "./users/user.module";
import { Photo } from "./photos/photos.entity";
import { getDotEnvVariables, getEnvFilePaths } from "utils/env";

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: getEnvFilePaths(),
    }),
    TypeOrmModule.forRoot({
      type: "postgres",
      host: process.env.POSTGRES_HOST,
      port: getDotEnvVariables().postgresPort,
      username: getDotEnvVariables().postgresUsername,
      password: getDotEnvVariables().postgresPassword,
      database: getDotEnvVariables().postgresDatabase,
      synchronize: true,
      logging: true,
      entities: [User, Photo],
      subscribers: [],
      migrations: [],
    }),
    UsersModule,
  ],
})
export class AppModule {}
