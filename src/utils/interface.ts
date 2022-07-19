export interface IProduto {
  id: string;
  nome: string;
  preco: number;
  ingredientes: string;
  foto: string;
}

export interface IVenda {
  produto: IProduto;
  datavenda: Date;
  desconto: number;
}