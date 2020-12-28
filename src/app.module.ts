import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';

import { Livro } from './livro.model';
import { LivrosController } from './livros.controller';
import { LivrosService } from './livros.service';

@Module({
   imports: [
      ConfigModule.forRoot(), // Para aceitar variáveis do arquivo .env
      SequelizeModule.forRoot({
         dialect: "mysql",
         host: process.env.DB_HOST,
         port: 3306,
         username: process.env.DB_USER,
         password: process.env.DB_PASS,
         database: process.env.DB_NAME,
         autoLoadModels: true, // Pegar automaticamente as models
         synchronize: true // Sincronizar com o banco
      }),
      SequelizeModule.forFeature([Livro]) // Models que serão passadas
   ],
   controllers: [LivrosController], // Controllers
   providers: [LivrosService], // Services
})
export class AppModule { }
