export interface IProduto {
  id: string;
  nome: string;
  preco: string;
  ingrediente: string;
}

export interface IVenda {
  produto: IProduto;
  datavenda: Date;
  
}