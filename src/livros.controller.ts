import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";

import { Livro } from './livro.model'
import { LivrosService } from "./livros.service";

// Passamos o decorator Controller para indicar ao NestJS o que a classe é
// O decorator precisa receber um parâmetro, sendo ele uma string, indicando a rota

// Ao retornar um array ou um objeto, o NestJS converte para JSON automaticamente
@Controller('livros')
export class LivrosController {
   constructor(private livrosService: LivrosService) { }

   @Get() // Indicar o tipo de requisição
   async index(): Promise<Livro[]> {
      return await this.livrosService.index()
   }

   @Get(':id') // :id -> Indicando o parâmetro da requisição
   // Passar o decorator indicando que recebe algum parâmetro, indico qual o parâmetro e seu tipo de dado
   async show(@Param('id') id: number): Promise<Livro> {
      return await this.livrosService.show(id)
   }

   @Post()
   async store(@Body() livro: Livro): Promise<void> {
      await this.livrosService.store(livro)
   }

   @Put(':id')
   async update(@Param('id') id: number, @Body() livro: Livro): Promise<Livro> {
      return await this.livrosService.update(id, livro)
   }

   @Delete(':id')
   async delete(@Param('id') id: number): Promise<void> {
      await this.livrosService.delete(id)
   }
}