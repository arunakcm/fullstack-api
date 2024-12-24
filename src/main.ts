import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Enable global validation using class-validator
  // app.useGlobalPipes(new ValidationPipe());
  app.setGlobalPrefix('api');
  app.useGlobalPipes(new ValidationPipe());
  // app.setGlobalPrefix(new ValidationPipe('api'));
  app.enableCors();
  console.log(`Server is runing on port: ${process.env.PORT}`)
  await app.listen(process.env.PORT ?? 3000);
}

bootstrap();


// import { NestFactory } from '@nestjs/core';
// import { AppModule } from './app.module';
// import { ExpressAdapter } from '@nestjs/platform-express';
// import * as express from 'express';

// async function bootstrap() {
//   const server = express();
//   const app = await NestFactory.create(AppModule, new ExpressAdapter(server));
//   app.enableCors(); // Enable CORS for serverless compatibility
//   await app.init();
  
//   return server;
// }

// // Export the server for Vercel to use
// export const handler = bootstrap();
