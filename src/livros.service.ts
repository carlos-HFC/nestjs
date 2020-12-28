import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/sequelize'

import { Livro } from './livro.model'

@Injectable() // Injetará esse Service no Controller
export class LivrosService {
   constructor(
      @InjectModel(Livro) // Injetará o Model ao Service
      private livroModel: typeof Livro
   ) { }

   async index(): Promise<Livro[]> {
      return await this.livroModel.findAll()
   }

   async show(id: number): Promise<Livro> {
      return await this.livroModel.findByPk(id)
   }

   async store(livro: Livro): Promise<void> {
      await this.livroModel.create(livro)
   }

   async update(id: number, livro: Livro): Promise<Livro> {
      const upLivro = await this.show(id)

      return await upLivro.update(livro)
   }

   async delete(id: number): Promise<void> {
      const livro = await this.show(id)

      await livro.destroy()
   }
}