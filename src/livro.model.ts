import { Column, DataType, Model, Table } from 'sequelize-typescript'

@Table // Especificar que é uma tabela 
export class Livro extends Model<Livro> {
   // Informar que é uma coluna, onde receberá algumas opções
   // Posso definir o tipo de dado e passar o tamanho deste dado
   // Por padrão, as colunas podem receber valor nulo
   @Column({
      type: DataType.STRING(60),
      allowNull: false
   })
   codigo: string

   @Column({
      type: DataType.STRING,
      allowNull: false
   })
   nome: string

   @Column({
      type: DataType.DECIMAL(10, 2),
      allowNull: false
   })
   preco: number
}